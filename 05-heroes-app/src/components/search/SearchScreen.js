import React, { useMemo } from 'react';
import queryString from'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({ history }) => {

    const location = useLocation();

    const { q = '' } = queryString.parse( location.search );

    const [ formValues , handleInputChange ] = useForm({
        searchText: q
    });

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`?q=${ searchText }`);
    }

    return (
        <>
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr/>
                    <form onSubmit={ handleSubmit }>
                        <input
                            name="searchText"
                            type="text"
                            value={ searchText }
                            onChange={ handleInputChange }
                            placeholder="Find your hero"
                            className="form-control"/>

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary">
                                Search
                        </button>
                    </form>

                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr />

                    {
                        (q  === '') && 
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }

                    {       
                        (q  !== '' && heroesFiltered.length === 0) &&
                        <div className="alert alert-danger">
                            There is no hero with { q }
                        </div>
                    }

                   {  
                        heroesFiltered.map( hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero }
                            />
                        ))
                    }

                </div>

            </div>
        </>
    )
}

import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({ hero }) => {

    const{
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (

        <div className="card">

            <img src={ `./assets/heroes/${ id }.jpg` } className="card-img-top" alt={ superhero }></img>

            <div className="card-body">
                <h5 className="card-title">{ superhero }</h5>
                <p className="card-text">{ alter_ego }</p>

                {
                    ( alter_ego !== characters )
                    && <p className="card-text">{ characters }</p>
                }

                <p className="card-text">
                    <small>{ first_appearance }</small> 
                </p>

                <Link to={`/hero/${ id }`}>Más</Link>

            </div>
        </div>

    )
}

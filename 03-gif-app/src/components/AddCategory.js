import React, { useState} from 'react';
import PropTypes from 'prop-types'

export const AddCategory = ({setcategories}) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = (e) =>{
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim()){
            setcategories(cats => [inputValue, ...cats]);
            setinputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>{ inputValue }</p>
            <input
                value={inputValue}
                onChange={ handleInputChange }
                type="text"/>
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}

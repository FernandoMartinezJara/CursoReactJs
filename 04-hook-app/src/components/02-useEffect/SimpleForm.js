import React, { useEffect, useState} from 'react'
import './effects.css'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    })

    const { name, email } = formState;

     useEffect(() => {
        //  console.log('La Primera vez')
     }, []);

     useEffect(() => {
        // console.log('Cambió el Form')
    }, [formState]);

    useEffect(() => {
        // console.log('Cambió el Email')
    }, [email]);

     const handleInputChange = ({ target }) =>{
        setformState({
            ...formState,
            [target.name]: target.value
        })
     };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }></input>
            </div>


            <div className='form-group'>
                <input 
                    type="text" 
                    name="email" 
                    className="form-control" 
                    placeholder="Mail@email.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }></input>
            </div>

            { (name === 'Aurora') && <Message/> }

            
        </>
    )
}

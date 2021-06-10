import React, { useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment} = useCounter(1);
    const [show, setshow] = useState();

    return (
        <div>
            <h1>Memorize</h1>
            <hr/>

            <h3>Counter: <Small value={ counter } /> </h3>

            <button
                className="btn btn-primary mt-5"
                onClick={ increment }>
                +1
            </button>


            <button 
                onClick={ () => { setshow( !show ); }}
                className="btn btn-secondary mt-5 ml-6">
                show/hide { JSON.stringify(show)}
            </button>

            
        </div>
    )
}

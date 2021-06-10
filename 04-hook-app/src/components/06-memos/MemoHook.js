import React, { useMemo, useState } from 'react';
import '../02-useEffect/effects.css';
import { useCounter } from '../../hooks/useCounter';
import { procesoPesado } from '../../helpers/ProcesoPesado';


export const MemoHook = () => {

    const { counter, increment} = useCounter(5000);
    const [show, setshow] = useState();

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{ counter }</small> </h3>
            <hr/>

            <p>{ memoProcesoPesado }</p>

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

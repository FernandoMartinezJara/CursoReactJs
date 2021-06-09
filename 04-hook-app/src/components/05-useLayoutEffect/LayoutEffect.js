import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFectch } from '../../hooks/useFectch';
import './Layout.css';
import { useCounter} from '../../hooks/useCounter';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFectch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    const { quote } = !!data && data[0];

    const [boxSize, setboxSize] = useState({});

    const pTag = useRef();

    useLayoutEffect(() =>{
        setboxSize(pTag.current.getBoundingClientRect());
    }, [quote])

    return (
        <div>
            <h1>Layout Effect</h1>
            <hr></hr>

            <blockquote className="blockquote text-right">
                <p 
                    ref={ pTag }
                    className="mb-0"> { quote } </p>
            </blockquote>
                
            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>
            
            <button className="btn btn-primary" onClick={ increment }>
                Siguiente Quote
            </button>

        </div>
    )
}

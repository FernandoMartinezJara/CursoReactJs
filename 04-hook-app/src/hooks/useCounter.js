import { useState } from 'react';

export const useCounter = (initialState = 1) => {

    const [counter, setState] = useState(initialState);

    const increment = () => {

        setState( counter + 1 );
    }

    const decrement = () => {
        setState(counter - 1 );
    }

    const reset = () =>{
        setState(0)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    };

}

import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {

    const { user, setUser } = useContext(UserContext);

    const handleOnClick = ()=>{
        setUser({});
    }

    return (
        <div>
            <h1>About Screen</h1>
            <hr></hr>
            
            <pre>
                { JSON.stringify(user, null, 3) }
            </pre>

            <button
                className="btn btn-primary"
                onClick={ handleOnClick }>
                Logout
            </button>
        </div>
    )
}

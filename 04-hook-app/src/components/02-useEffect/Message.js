import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coordState, setcoordState] = useState({x: 0, y:0});

    const { x, y } = coordState;

    useEffect(() => {

        const mouseMove = (e) =>{
            const coors = { x: e.x, y: e.y };
            setcoordState(coors);
        }

        window.addEventListener('mousemove', mouseMove);
       
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, [])

    return (
        <div>
            <h3>Eres genia!</h3>
            <p>x: { x }, y: { y }</p>
        </div>
    )
}

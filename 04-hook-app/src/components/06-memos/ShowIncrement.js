import React from 'react'

export const ShowIncrement = React.memo(({ increment }) => {

    console.log('me volví a generar :(');

    return (
        <button
            onClick={ increment }
            className="btn btn-primary">
            Incrementar
        </button>
    )
})

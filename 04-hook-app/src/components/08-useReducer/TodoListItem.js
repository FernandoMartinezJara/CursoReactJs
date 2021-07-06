import React from 'react'

export const TodoListItem = ({ i, todo, handleComplete, handleDelete}) => {
    return (
        <li 
            key={ todo.id }
            className="list-group-item">
                <p
                    className={ `${ todo.done && 'complete'}` } 
                    onClick={ () => { handleComplete(todo.id) }}> {i + 1}. { todo.desc } </p>
                <button 
                    className="btn btn-danger"
                    onClick={ () => { handleDelete( todo.id ) } }>
                    Borrar
                </button>
        </li>
    )
}

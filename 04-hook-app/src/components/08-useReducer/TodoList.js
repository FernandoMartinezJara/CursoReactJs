import React from 'react'
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ todos, handleComplete, handleDelete }) => {
    return (

        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, i) => (

                    <TodoListItem
                        i={ i }
                        todo={ todo }
                        handleComplete={ handleComplete }
                        handleDelete={ handleDelete }></TodoListItem>


                ))

            }
        </ul>

    )
}

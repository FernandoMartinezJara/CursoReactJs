import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList }  from './TodoList';
import { TodoAdd } from './TodoAdd'
import './styles.css';

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }
];

const init = () =>{
    return  JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, initialState, init);

    useEffect( () => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [ todos ])

    const handleDelete = (todoId) => {

        dispatch({
            type: 'delete',
            payload: todoId
        });

    }

    const handleComplete = (todoId) => {

        dispatch({
            type: 'complete',
            payload: todoId
        });
    }

    const handleAddTodo = (newTodo) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <hr></hr>

            <div className="row">

                <div className="col-7">

                    Todos

                    <TodoList 
                        todos={ todos }
                        handleComplete={ handleComplete }
                        handleDelete={ handleDelete }/>

                </div>

                <div className="col-5">

                    <TodoAdd handleAddTodo={ handleAddTodo }></TodoAdd>

                </div>

            </div>
            
            
        </div>
    )
}

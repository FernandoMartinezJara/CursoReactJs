const initialState = [
    {
        id: 1,
        todo: 'Hacer ejercicio',
        done: false
    }
];

const todoReducer = (state = initialState, action) =>{

    if(action?.type === 'agregar')
    {
        return [...state, action.payload ];

    }

    return state;
}

let todos = todoReducer()

const newTodo = {
        id: 2,
        todo: 'jugar play',
        done: false
}

const agregarTodo = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodo);


console.log(todos);
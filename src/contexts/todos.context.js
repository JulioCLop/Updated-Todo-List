import React, { createContext } from 'react';
import  UseLocalStorageReducer  from '../hook/useLocalStorageReducer';
import TodoReducer from '../reducers/todo.reducer.js';



const defaultTodos = [{
    id: 1,
    task: 'This is the first todo list item.',
    completed: false
}, {
    id: 2,
    task: 'This is the first todo list item.',
    completed: true
}
];

export const TodoContext = createContext();
export const DispatchContext = createContext();

export function TodoProvider(props) {
  const [todos, dispatch] = UseLocalStorageReducer("todos",defaultTodos, TodoReducer)

    return (
        <TodoContext.Provider value={ todos }>
           <DispatchContext.Provider value={dispatch}>
            {props.children}
            </DispatchContext.Provider>
        </TodoContext.Provider>
    )
}


import React, { createContext, useReducer } from 'react';
import useTodoState from '../useTodoState';
import todoReducer from '../reducers/todo.reducer.js';



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
export const TodosContext = createContext();

export function TodoProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos)

    return (
        <TodosContext.Provider value={{ todos, dispatch}}>
            {props.children}
        </TodosContext.Provider>
    )
}


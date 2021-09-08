import React, { createContext } from 'react';
import useTodoState from '../useTodoState';




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
    const todoStuff = useTodoState(defaultTodos);

    return (
        <TodosContext.Provider value={todoStuff}>
            {props.children}
        </TodosContext.Provider>
    )
}


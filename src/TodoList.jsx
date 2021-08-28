import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";


function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
    
    if (todos.length) return (
        <Paper>
            <List>
                {todos.map((todo, i) => (
                <>
                    <Todo
                        {...todo}
                        key={todo.id}
                        removeTodo={removeTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                    />
                    {i < todos.length - 1 && <Divider />}
                </>
                ) )}
            </List>
        </Paper>

    );
    return null;
}

export default TodoList;
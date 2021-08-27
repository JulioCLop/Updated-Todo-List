import React, { useState, UseEffect } from "react";
import  TextField  from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "././useInputState";






function TodoForm({addTodo}) {

    const [value, handleChage, reset] = useInputState("")
    return (
        <Paper style={{margin: "1rem 0",padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
                <TextField
                    value={value}
                    onChange={handleChage}
                    reset={reset}
                    margin="normal"
                    label="Add New Todo"
                    fullWidth
                />
            </form>
        </Paper>
    )
}

export default TodoForm;
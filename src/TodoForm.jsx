import React, { useContext } from "react";
import  TextField  from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./useInputState";
import { DispatchContext } from "../src/contexts/todos.context";





function TodoForm() {

    const [value, handleChage, reset] = useInputState("");
    const  dispatch  = useContext(DispatchContext);


    return (
        <Paper style={{margin: "1rem 0",padding: "0 1rem"}}>
            <form onSubmit={e => {
                e.preventDefault();
                dispatch({type: 'ADD', task: value})
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
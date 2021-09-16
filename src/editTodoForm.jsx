import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './useInputState';
import { DispatchContext } from '../src/contexts/todos.context';


function EditTodoForm({id,task,toggleEditForm}){
    const  dispatch  = useContext(DispatchContext);
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form
            onSubmit={evt => {
                evt.preventDefault();
               dispatch({type: "EDIT", id: id, newTask: value})
                reset();
                toggleEditForm();
            }}
            style={{marginLeft: "1rem",width: "50%"}}
        >
            <TextField
                margin="normal"
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
       
            />
        </form>
       
    );
}

export default EditTodoForm;
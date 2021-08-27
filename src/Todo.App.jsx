import React, { useState,useEffect } from "react";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';

function TodoApp() {
   const initialTodo = JSON.parse(window.localStorage.getItem('todos') || '[]');
   // const initialTodo = [
   //    {
   //       id: 1,
   //       task: "clean car",
   //       completed: false,
   //    },
   //    {
   //       id: 2,
   //       task: "clean house",
   //       completed: true,
   //    },
   //    {
   //       id: 3,
   //       task: "buy pizza",
   //       completed: false,
   //    },
   // ];
    

   const [todos, setTodos] = useState(initialTodo);

   useEffect(() => {
      window.localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos]);
      
   
   const addTodo = (newTodoText) => {
      setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
   };
    
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    }
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo =>
            todo.id === todoId ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos)
    };
   const editTodo =( todoId,newTask) => {
      const updatedTodos = todos.map( todo =>
            todo.id === todoId ?{...todo,task:  newTask } : todo
      )
      setTodos(updatedTodos)
   };
  
    return (
     
      <Paper
         style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa",
         }}
         elevation={0}>
         <AppBar color="primary" position="static" style={{ height: "64px" }}>
            <Toolbar></Toolbar>
            <Typography color="inherit">Todo with Hooks </Typography>
         </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
            <Grid item xs={11} md={8} lg={4}>
               <TodoForm addTodo={addTodo} />
                   <TodoList
                       todos={todos}
                        removeTodo={removeTodo}
                   toggleTodo={toggleTodo}
                   editTodo={editTodo}
                   
                   />
            </Grid>
         </Grid>
      </Paper>
   );
}

export default TodoApp;
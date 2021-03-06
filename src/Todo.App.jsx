import React from "react";
// import useTodoState from "./useTodoState";
import TodoList from "./TodoList";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoForm from "./TodoForm";
import { TodoProvider } from '../src/contexts/todos.context';


function TodoApp() {
   


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
                <TodoProvider>
                <TodoForm  />
                <TodoList />
                </TodoProvider>
            </Grid>
         </Grid>
      </Paper>
   );
}

export default TodoApp;

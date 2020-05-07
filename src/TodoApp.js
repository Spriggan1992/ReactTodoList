import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';




function TodoApp() {

    // const initialTodos = [{ id: 1, task: "Walk The Goldfish", completed: true }];
    // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos)

    // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || "[]");
    // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

    // const initialTodos = [
    //     { id: 1, task: "Clean Fishtank", completed: false },
    //     { id: 2, task: "Wash Car", completed: false },
    //     { id: 3, task: "Grow Beard", completed: false }
    // ]
    // useEffect(() => {
    //     window.localStorage.setItem("todos", JSON.stringify(todos));
    // }, [todos]);

    // const addTodo = newTodoText => {
    //     setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])


    // }
    // const removeTodo = todoId => {
    //     const updateTodos = todos.filter(todo => todo.id !== todoId);
    //     setTodos(updateTodos)
    // }

    // const toggleTodo = todoId => {
    //     const updateTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    //     );
    //     setTodos(updateTodos);
    // }

    // const editTodo = (todoId, newTask) => {
    //     const updateTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo
    //     );
    //     setTodos(updateTodos);
    // }

    return (
        <Paper style={{
            backgroundColor: "#fafafa",
            margin: 0,
            padding: 0,
            height: "100vh",
        }}
        >
            <AppBar color="primary" position="staic" style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOK</Typography>
                </Toolbar>
            </AppBar>
            <Grid container
                justify="center"
                style={{ marginTop: "1rem" }}
            >
                <Grid item xs={11} md={8} lg={4}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>

                </Grid>
            </Grid>

        </Paper >
    )
}

export default TodoApp;


// -TodoApp  
//   -TodoFrom
//   -TodoList
//     -TodoItem 
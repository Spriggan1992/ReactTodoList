import React, { useState } from 'react'
import { useLockalStorageState } from '../hooks/useLockalStorageState'
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useLockalStorageState("todos", initialTodos)

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }])


        },
        removeTodo: todoId => {
            const updateTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(updateTodos)
        },

        toggleTodo: todoId => {
            const updateTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            );
            setTodos(updateTodos);
        },

        editTodo: (todoId, newTask) => {
            const updateTodos = todos.map(todo => todo.id === todoId ? { ...todo, task: newTask } : todo
            );
            setTodos(updateTodos);
        }
    }

}
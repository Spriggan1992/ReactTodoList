import React, { useContext } from 'react'
import useToggleState from './hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import EditIcon from '@material-ui/icons/Edit';
import EditTodoForm from './EditTodoForm';
import { TodosContext } from './context/todos.context';


function Todo({ task, completed, id }) {
    const { toggleTodo, removeTodo } = useContext(TodosContext)
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditTodoForm
                    id={id}
                    task={task}
                    toggleForm={toggle}
                />
            ) : (
                    <>
                        <Checkbox tabIndex={1} checked={completed} onClick={() => toggleTodo(id)} />
                        <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton aria-label="Edit" onClick={toggle}>
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </>
                )}

        </ListItem>

    )
}

export default Todo;
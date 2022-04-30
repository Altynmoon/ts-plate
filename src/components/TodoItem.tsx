import { Button, Checkbox, styled } from "@mui/material"
import { FC, useCallback, useMemo } from "react"
import { useDispatch } from "react-redux"
import { TodoActionType, Todos } from "../types/todosTypes"
const Title = styled('span') <{done: boolean}>`
    text-decoration: ${(props) => props.done ? 'line-through' : 'none' };
`
type Props = {
    todo: Todos
    onTodoChange: (created: string, done: boolean) => void
}
export const TodoItem:FC<Props> = ({ todo, onTodoChange }) => {
    const dispatch = useDispatch()
    const created = useMemo(() => {
        return new Date(todo.created).toLocaleTimeString()
    }, [todo.created])
    
    const handleRemoveClick = useCallback(() => {
        dispatch({ type: TodoActionType.TODO_REMOVE, payload: todo.created })
    }, [todo.created, dispatch])
    
    return (
        <li>
            <Checkbox checked={todo.done} onChange={() => onTodoChange(todo.created, !todo.done)}/>
            <Title done={todo.done}>{todo.text}</Title>
            <br/>
            {todo.created}
            <Button size="small" onClick={handleRemoveClick}>Delete</Button>
        </li>
    )
}

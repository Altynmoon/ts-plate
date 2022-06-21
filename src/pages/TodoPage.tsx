import { TodoActionType } from './../types/todosTypes';
import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Todos } from "../types/todosTypes"
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

export function TodoPage() {
    const { todo } = useTypedSelector((state) => state.todo)
    const dispatch = useDispatch()

    const handleCreate = useCallback((todo: Todos) => {
        dispatch({ type: TodoActionType.TODO_ADD, payload: todo })
    }, [dispatch])
    const handleTodoChanged = useCallback((created : string, value : boolean) => {
        dispatch({
            type: TodoActionType.TODO_DONE,
            payload: created,
            value ,
        })
    }, [dispatch])
    return (
        <div  style={{marginTop: "30px"}} >
            <TodoForm onCreate={handleCreate} />
            <TodoList todo = {todo} onTodoChange={handleTodoChanged} />
        </div>
    )

}     

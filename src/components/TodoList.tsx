import { FC, useMemo } from "react";
import { Todos } from "../types/todosTypes";
import { TodoItem} from "./TodoItem";
type Props = {
    todo: Todos[]
    onTodoChange:  (created: string, done: boolean) => void
}

export const TodoList:FC<Props> = ({ todo, onTodoChange }) => {
    
    const sortedTodos = useMemo(() => {
        const s = [...todo]
        return s.sort((a, b) => +a.done - +b.done)
    }, [todo])
    return (
        <ul>
            {sortedTodos.map((todo) => (
                <TodoItem key={todo.created} todo={todo} onTodoChange={(created,done) => onTodoChange(created,done)} />
            ))}
        </ul>
    )
}

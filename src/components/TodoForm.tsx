import { Button, TextField } from "@mui/material";
import { FC, useCallback, useMemo, useState } from "react";
import { Todos } from "../types/todosTypes";

type Props = {
    
    onCreate: (todo: Todos) => void
}


export const TodoForm:FC<Props> = ({ onCreate }) => {
    const [text, setText] = useState('')

        const handleCreate = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        let date = new Date()
        onCreate({
            text ,
            created: date.toLocaleTimeString(),
             done: false,}
        )
        setText('')
    }, [onCreate, text])
    
    const isDisabled = useMemo(() => {
        return text.trim().length === 0
    }, [text])

    return (
        <form onSubmit={(e) => handleCreate(e) }>
            <TextField label="Name" value={text} onChange={(e) => setText(e.target.value)}  />
            <Button disabled={isDisabled} type="submit">Create</Button>
        </form>
    )
}

import { Reducer } from 'redux'
import { TodoAction, TodoActionType, TodoState } from '../../types/todosTypes'
import {  } from '../../types/userTypes'

const initState = {
    todo: [],
 
}
export const todoReducer: Reducer<TodoState, TodoAction> = (state = initState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case TodoActionType.TODO_ADD:
            newState.todo = [...state.todo, action.payload]
            break;
        case TodoActionType.TODO_REMOVE:
            newState.todo = state.todo.filter((todo) => todo.created !== action.payload)
            break;
        case TodoActionType.TODO_DONE:
            newState.todo =  state.todo.map((todo) => {
                if (todo.created === action.payload) {
                    return {
                        ...todo,
                        done: action.value
                    }
                }
                return todo
            })
            break;
        default:
            return state
    }
    return newState
}




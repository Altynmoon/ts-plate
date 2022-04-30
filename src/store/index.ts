import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { todoReducer } from './reducers/todoReducer'
import { userReducer } from './reducers/userReducer'


const rootReducer = combineReducers({
    user: userReducer,
    todo : todoReducer, 
})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type IState = ReturnType<typeof rootReducer>
export enum TodoActionType {
    TODO_ADD = 'TODO_ADD',
    TODO_REMOVE = 'TODO_REMOVE',
    TODO_DONE = 'TODO_DONE'
}
export type Todos = {
    text: string
    created : string 
    done : boolean 
}
export type TodoState = {
    todo: Todos[]   
}
export type TodoAddAction = {
    type : TodoActionType.TODO_ADD, 
    payload : Todos
}
export type TodoRemoveAction = {

    type: TodoActionType.TODO_REMOVE,
    payload: string
}
export type TodoDoneAction = {
    type : TodoActionType.TODO_DONE,
    payload : string 
    value: boolean   
}
export type TodoAction = TodoAddAction | TodoDoneAction | TodoRemoveAction




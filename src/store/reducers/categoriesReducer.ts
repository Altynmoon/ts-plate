import { Categories } from './../../types/categoriesType';
import { Reducer } from "redux"
import { CategoriesAction, CategoriesActionType, CategoriesState } from "../../types/categoriesType"

const initState = {
    categories: [],
    loading: false,
}
export const categoriesReducer: Reducer<CategoriesState, CategoriesAction> = (state = initState, action) => {
    switch (action.type) {
        case CategoriesActionType.FETCH_CATEGORIES:
            return { ...state, loading: true, error: undefined }
        case CategoriesActionType.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: action.payload, loading: false }
        case CategoriesActionType.FETCH_CATEGORIES_REJECT:
            return { ...state, error: action.payload, loading: false }
        default:
            return state
     }
}

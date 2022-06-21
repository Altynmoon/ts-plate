import axios from "axios"
import { Dispatch } from "react"
import { Categories, CategoriesAction, CategoriesActionType } from "../../types/categoriesType"


export const fetchCategories  = () => (dispatch: Dispatch<CategoriesAction>) => {
    dispatch({ type: CategoriesActionType.FETCH_CATEGORIES })
    axios.get<Categories[]>('https://kdwed-f1dd2-default-rtdb.europe-west1.firebasedatabase.app/categories.json').then((res) => {
    console.log('data', res);
        
    setTimeout(() => {

            dispatch({ type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS, payload: res.data })
        }, 1000 )
    }).catch(() => {
        dispatch({ type: CategoriesActionType.FETCH_CATEGORIES_REJECT, payload: 'Ошибка при загрузке данных' })
    })
}


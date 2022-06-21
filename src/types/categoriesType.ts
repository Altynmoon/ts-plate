export enum CategoriesActionType {
    FETCH_CATEGORIES = 'FETCH_CATEGORIES',
    FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
    FETCH_CATEGORIES_REJECT = 'FETCH_CATEGORIES_REJECT'
}

export type ChildCat = {
    id: number
    name: string
    parentId: number
}
export type Categories = {
    childCategories: ChildCat[],
    id: number
    name: string 
}

export type CategoriesState = {
    categories : Categories[]
    loading : boolean
    error? : string     
}
export type FetchcategoriesAction = {
    type: CategoriesActionType.FETCH_CATEGORIES,
}

export type FetchCategoriesSuccessAction = {
    type: CategoriesActionType.FETCH_CATEGORIES_SUCCESS,
    payload: Categories[]
}
export type FetchCategoriesRejectionAction = {
    type : CategoriesActionType.FETCH_CATEGORIES_REJECT,
    payload: string 
}
export type CategoriesAction = FetchcategoriesAction | FetchCategoriesSuccessAction | FetchCategoriesRejectionAction








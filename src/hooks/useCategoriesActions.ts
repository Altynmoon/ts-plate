import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as categoriesActionCreators from '../store/actions/categoriesActionCreators'


export const useCategoriesActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => {
        return bindActionCreators(categoriesActionCreators, dispatch)
    }, [dispatch])
}

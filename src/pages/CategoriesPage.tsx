import styled from "@emotion/styled";
import { useEffect } from "react";
import { CategoriesItem } from "../components/CategoriesItem";
import { useCategoriesActions } from "../hooks/useCategoriesActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export function CategoriesPage(){
    const {categories, loading } = useTypedSelector((state) => state.category)
    const {fetchCategories } = useCategoriesActions()
    useEffect (() => {
        fetchCategories()
    }, [fetchCategories])

    if (loading) {
        return (
            <h1>Загрузка данных</h1>
        )
    }
    // if (error) {
    //     return (
    //         <h1 style={{ border: '1px solid red' }}>{error}</h1>
    //     )
    // }
    // const Drop = styled('div')`
    //  position: relative;
    // display: inline-block;     
    // `
    return (
        <div style={{marginTop: "30px"}}>
            {categories.map((category) => ( <CategoriesItem key={category.id} category={category} />))}
        </div>
    )
}

    
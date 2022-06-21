import styled from "@emotion/styled"
import { FC } from "react"
import { Categories } from "../types/categoriesType"



type Props = {
    category: Categories
}
const Dropdown = styled('div')`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

export const CategoriesItem:FC<Props> = ({category}) => {
    return (
        <Dropdown>
            {category.name} 
        </Dropdown>
    )
}
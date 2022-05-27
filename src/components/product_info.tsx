import React from "react";
import { ProductInFo } from "../infrastructure/style";
import { SearchOutlined, RightOutlined } from '@ant-design/icons'
import { Camera } from 'react-feather';
import { SubTab } from "./Subtab";
export const ProductInfo = (prop:
    {
        onItemInfoClick(e: any): any,
        onSelectPayMethod(e: any): any
    }) => {
    return (
        <>
            <ProductInFo.Wrapper>
                <ProductInFo.title>Product Info</ProductInFo.title>
                <ProductInFo.search>
                    <ProductInFo.input type={'search'} placeholder={'Select product category'} />
                </ProductInFo.search>
                <SubTab title="Item information" onClick={
                    (e) => prop.onItemInfoClick(e)
                } />

                <SubTab title="Select Payment" onClick={
                    (e) => prop.onSelectPayMethod(e)}
                />


            </ProductInFo.Wrapper>
        </>
    )
}
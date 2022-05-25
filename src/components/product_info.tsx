import React from "react";
import { ProductInFo } from "../infrastructure/style";
import { SearchOutlined, RightOutlined } from '@ant-design/icons'
import { Camera } from 'react-feather';
import { SubTab } from "./Subtab";
export const ProductInfo = () => {
    return (
        <>
            <ProductInFo.Wrapper>
                <ProductInFo.title>Product Info</ProductInFo.title>
                <ProductInFo.search>
                    <ProductInFo.input type={'search'} placeholder={'Select product category'} />
                </ProductInFo.search>
                <SubTab title="Item information" onClick={function (e: any) {
                    e.preventDefault()
                    try {
                        alert()
                    } catch (error) {
                        throw new Error("Function not implemented.");

                    }
                }} />

                <SubTab title="Select Payment" onClick={function (e: any) {
                    e.preventDefault()
                    try {
                        alert()
                    } catch (error) {
                        throw new Error("Function not implemented.");

                    }
                }} />


            </ProductInFo.Wrapper>
        </>
    )
}
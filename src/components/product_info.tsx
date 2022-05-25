import React from "react";
import { ProductInFo } from "../infrastructure/style";
import { SearchOutlined, RightOutlined } from '@ant-design/icons'
import { Camera } from 'react-feather';
export const ProductInfo = () => {
    return (<>
        <ProductInFo.Wrapper>
            <ProductInFo.title>Product Info</ProductInFo.title>
            <ProductInFo.search>
                <ProductInFo.input type={'search'} placeholder={'Select product category'} />
            </ProductInFo.search>
            <ProductInFo.wrap>
                <ProductInFo.text>fill item information</ProductInFo.text>
                <ProductInFo.icon>
                    <RightOutlined />
                </ProductInFo.icon>
            </ProductInFo.wrap>

        </ProductInFo.Wrapper>
    </>)
}
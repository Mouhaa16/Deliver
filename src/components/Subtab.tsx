import React from 'react'
import { ProductInFo } from '../infrastructure/style'
import { RightOutlined } from '@ant-design/icons'

export const SubTab = (prop:
    {
        title: string, onClick(e: any): any
    }) => {

    return (<>
        <ProductInFo.wrap>
            <ProductInFo.text>{prop.title}</ProductInFo.text>
            <ProductInFo.icon>
                <RightOutlined onClick={(e) => prop.onClick(e)} />
            </ProductInFo.icon>
        </ProductInFo.wrap>
    </>)
}
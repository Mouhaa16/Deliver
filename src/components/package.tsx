import React from 'react'
import { HomeStyle } from '../infrastructure/style'
import { IPackage } from '../interfaces'

export const Package = (props: IPackage) => {


    return (<>
        <HomeStyle.packagewrap>
            <HomeStyle.img src={props.image} />
            <HomeStyle.wrapinfo>
                <HomeStyle.text_company>{props.company_name}</HomeStyle.text_company>
                <HomeStyle.text_product>{props.product_name}</HomeStyle.text_product>
                <HomeStyle.text_from>{props.from}</HomeStyle.text_from>
            </HomeStyle.wrapinfo>
        </HomeStyle.packagewrap>

    </>)
}
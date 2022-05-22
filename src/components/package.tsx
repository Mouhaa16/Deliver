import React from 'react'
import { HomeStyle } from '../infrastructure/style'
interface IPackage {
    company_name: string;
    image: string;
    product_name: string;
    from: string

}
export const Package = (props: IPackage) => {

    return (<>
        <HomeStyle.packagewrap>
            <HomeStyle.img src={props.image} />
        </HomeStyle.packagewrap>
        <HomeStyle.packagewrap>
            <HomeStyle.img src={props.image} />
        </HomeStyle.packagewrap>
        <HomeStyle.packagewrap>
            <HomeStyle.img src={props.image} />
        </HomeStyle.packagewrap>
    </>)
}
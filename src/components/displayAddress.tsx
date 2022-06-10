import React from 'react'
import { Address } from '../infrastructure/style'
export const DisplayAddress = (prop: {
    detail: any
    onClick(e: any): any
}) => {
    return (
        <>
            <Address.contain>
                <Address.wrap>
                    <Address.display>
                        {prop.detail.name}
                        <br />
                        {prop.detail.phone}
                    </Address.display>
                    <Address.display>{prop.detail.city},{prop.detail.LGA}.{prop.detail.area_detail}</Address.display>
                </Address.wrap>
                <Address.line></Address.line>
                <Address.choose
                    type={'button'}
                    value={'edit'}
                    onClick={(e) => prop.onClick(e)} />
            </Address.contain>
        </>
    )
}
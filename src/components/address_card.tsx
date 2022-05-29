import { RightOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'
import { Address } from '../infrastructure/style'
import { PlusIcon } from './plusIcon'
export const AddressCard = (props: { onClickDestination(e: any): any, onClickPickUp(e: any): any }) => {
    return (<>

        <Address.Wrapper>

            <SelectButton title='kano, kubotso LGA, behind Gasau petrol Station . . .' onClick={(e) => props.onClickPickUp(e)} />
            {/* <Address.line></Address.line> */}
            <SelectButton title='Add destination address' onClick={(e) => props.onClickPickUp(e)} />

        </Address.Wrapper>

    </>
    )
}


const SelectButton = (prop: {
    title: string, onClick(e: any): any
}) => {
    return (<>
        <Address.fill onClick={(e: any) => {
            try {
                prop.onClick(e)
            } catch (error) {
                throw new Error('Function not implemented.')
            }
        }}>
            <Address.text>{prop.title}</Address.text>

            <Address.icon
            >
                <RightOutlined onClick={(e) => prop.onClick(e)} />

            </Address.icon>
        </Address.fill>
    </>)

}

export const AddressComp = (
    props: {
        name: string,
        phone: string,
        city: string,
        LGA: string,
        detail: string,
        onClick(e: any): any,
        onEdit(e: any): any
    }) => {
    return (
        <>
            <Address.container onClick={(e) => props.onClick(e)}>
                <Address.content_name>{props.name}<br />{props.phone}</Address.content_name>
                <Address.wrapContent>
                    <Address.content>{props.city},{props.LGA},{props.detail}. . .</Address.content>
                    <Address.edit
                        type={'button'}
                        value={'edit'}
                        onClick={(e) => props.onEdit(e)} />
                </Address.wrapContent>
            </Address.container>

        </>
    )
}
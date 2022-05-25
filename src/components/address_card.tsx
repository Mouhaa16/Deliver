import React from 'react'
import { Address } from '../infrastructure/style'
import { PlusIcon } from './plusIcon'
export const AddressCard = (props: { onClickDestination(e: any): any, onClickPickUp(e: any): any }) => {
    return (<>

        <Address.Wrapper>

            <SelectButton title='fill in pickup address' onClick={(e) => props.onClickPickUp(e)} />
            <Address.line></Address.line>
            <SelectButton title='fill in destination' onClick={(e) => props.onClickPickUp(e)} />

        </Address.Wrapper>




    </>)
}


const SelectButton = (prop: {
    title: string, onClick(e: any): any;
}) => {
    return (<>
        <Address.fill>
            <Address.text>{prop.title}</Address.text>
        </Address.fill>
        <Address.plus
        >
            <PlusIcon size={0} onClick={(e: any) => {
                try {
                    prop.onClick(e)
                } catch (error) {
                    throw new Error('Function not implemented.')
                }
            }} />
        </Address.plus></>)

}


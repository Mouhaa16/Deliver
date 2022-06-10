import React from 'react'
import { RightOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../infrastructure/store/hook'
import { RootState } from '../infrastructure/store/store'
import { Address } from '../infrastructure/style'
import { CurrentPickupAddress, CurrentdestAddress, getAddressById, setCurrentPick, get, setcurrentDest } from '../slices/address'
import { DisplayAddress } from './displayAddress'
import { PlusIcon } from './plusIcon'
export const AddressCard = (
    props: {
        title?: string,
        onClickDestination(e: any): any,
        onClickPickUp(e: any): any
    }) => {

    const currentPickUpAddress: any = useAppSelector(CurrentPickupAddress)
    const currentDestAddress: any = useAppSelector(CurrentdestAddress)

    return (<>

        <Address.Wrapper>
            {
                Object.keys(currentPickUpAddress).length !== 0
                    ?
                    <DisplayAddress
                        detail={currentPickUpAddress} onClick={function (e: any) {
                            return props.onClickPickUp(e)
                        }} />
                    : <SelectButton
                        title={'Add pickup address'}
                        onClick={(e) => props.onClickPickUp(e)} />}
            <Address.underline></Address.underline>
            {
                Object.keys(currentDestAddress).length !== 0
                    ?
                    <DisplayAddress
                        detail={currentDestAddress} onClick={function (e: any) {
                            return props.onClickDestination(e)
                        }} />
                    : <SelectButton
                        title='Add destination address'
                        onClick={(e) => props.onClickDestination(e)} />}

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
        id: string;
        name: string,
        phone: string,
        city: string,
        LGA: string,
        detail: string,

    }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const btn_type = useAppSelector(get)
    const address: any = useAppSelector(
        (state: RootState) =>
            getAddressById(state, props.id));
    const OnClick = (e: any) => {
        e.preventDefault()
        try {
            if (btn_type === false) {
                dispatch(setCurrentPick(address))
            }
            else {
                dispatch(setcurrentDest(address))
            }
            navigate(-1)
        } catch (error) {
            throw new Error('something went wrong!')
        }
    }
    const OnEdit = (e: any) => {


    }
    return (
        <>
            <Address.container onClick={(e) => OnClick(e)}>
                <Address.content_name>{props.name}<br />{props.phone}</Address.content_name>
                <Address.wrapContent>
                    <Address.content>{props.city},{props.LGA},{props.detail}. . .</Address.content>
                    <Address.edit
                        type={'button'}
                        value={'edit'}
                        onClick={(e) => OnEdit(e)} />
                </Address.wrapContent>
            </Address.container>

        </>
    )
}


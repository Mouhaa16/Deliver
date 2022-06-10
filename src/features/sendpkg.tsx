import React, { useState } from "react";
import { AddressCard, PageNav, ProductInfo, PriceCard, BottomDrawer, ItemInfo, BModal, PayMethod } from "../components";
import { CSSReset, Row } from "../infrastructure/style";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from "../infrastructure/store/hook";
import { RootState } from "../infrastructure/store/store";
import { setBtnType } from "../slices/address";

export const SendPackage = () => {
    const navigate = useNavigate();
    const [price, setPrice] = useState('--')
    const [openItemInfo, setItemInfoOpen] = useState(false)
    const [openSelectPay, setSelectPayOpen] = useState(false)
    const dispatch = useAppDispatch()
    return (
        <>
            <PageNav
                title={'Send Package'}
                onClickBack={function (e: any) {
                    e.preventDefault()
                    navigate(-1)
                }} />

            <Row.Wrapper>
                <AddressCard
                    onClickDestination={(e) => {
                        e.preventDefault()
                        try {
                            dispatch(setBtnType(true))
                            navigate('/address')
                        } catch (error) {
                            throw new Error('Error occurred!')
                        }
                    }}
                    onClickPickUp={(e) => {
                        e.preventDefault()
                        try {
                            dispatch(setBtnType(false))
                            navigate('/address')
                        } catch (error) {
                            throw new Error('Error occurred!')
                        }
                    }}
                />
                <ProductInfo onItemInfoClick={function (e: any) {
                    e.preventDefault()
                    try {
                        setItemInfoOpen(true)
                    } catch (error) {
                        throw new Error("Function not implemented.");
                    }
                }} onSelectPayMethod={function (e: any) {
                    e.preventDefault()
                    try {
                        setSelectPayOpen(true)
                    } catch (error) {
                        throw new Error("Function not implemented.");
                    }
                }} />
            </Row.Wrapper>

            <PriceCard price={price} onClickNext={function (e: any) {
                try {
                    if (price === null) return

                } catch (error) {
                    throw new Error("Function not implemented.");
                }
            }} />

            < BottomDrawer state={openItemInfo}
                onCloseDrawer={
                    React.useCallback(() =>
                        setItemInfoOpen(false), []
                    )
                }
                children={<ItemInfo />} />

            < BottomDrawer state={openSelectPay}
                onCloseDrawer={
                    React.useCallback(() =>
                        setSelectPayOpen(false), []
                    )
                }
                children={<PayMethod />}
            />
        </>
    )
}

import React from "react";
import { useState } from "react";
import { useAppDispatch } from "../infrastructure/store/hook";
import { ProductInFo } from "../infrastructure/style";
import { setPayMethod } from "../slices/package";
export const PayMethod = () => {

    const [active, setActive] = useState(true)
    const dispatch = useAppDispatch()
    const style = {
        border: ' 2px solid lightblue'
    }
    const onClickPayNow = (e: any) => {
        e.preventDefault()
        setActive(false)
        dispatch(setPayMethod("now"))
    }

    const onClickArrival = (e: any) => {
        e.preventDefault()
        setActive(true)
        dispatch(setPayMethod("arrival"))
    }

    return (
        <>
            <ProductInFo.wrapPbtn>
                <ProductInFo.paybtn style={!active ? style : { border: 'none' }} onClick={(e) => onClickPayNow(e)} >now</ProductInFo.paybtn>
                <ProductInFo.paybtn style={active ? style : { border: 'none' }} onClick={(e) => onClickArrival(e)} >On arrival</ProductInFo.paybtn>
            </ProductInFo.wrapPbtn>
        </>
    )
}
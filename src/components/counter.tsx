import React, { useState } from 'react'
import { CountInc } from '../infrastructure/style'
export const Counter = (props:
    {
        value: number,
        OnDecrease(e: any): any,
        OnIncrease(e: any): any,
    }) => {
    return (
        <>
            <CountInc.Wrapper>
                <CountInc.btn
                    type={'button'}
                    value={'-'}
                    onClick={(e: any) => props.OnDecrease(e)} />
                <CountInc.input
                    disabled={true}
                    type={'text'}
                    value={props.value}
                />
                <CountInc.btn
                    type={'button'}
                    value={'+'}
                    onClick={(e: any) => props.OnIncrease(e)} />
            </CountInc.Wrapper>
        </>
    )
}
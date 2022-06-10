import React from 'react'
import { View } from '../infrastructure/style'
export const PhoneField = (
    props:
        {
            country_code: string,
            type: string,
            id: string;
            name: string,
            value: string,
            placeholder: string
            onChange(e: any): any,
        }) => {
    return (
        <>
            <View.WrapInput>
                <View.title>{props.country_code}</View.title>
                <View.input
                    id={props.id}
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e: any) => props.onChange(e)} />
            </View.WrapInput>
            <View.line></View.line>
        </>
    )
}
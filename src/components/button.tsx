import React from "react";
import { ButtonXMl, View } from "../infrastructure/style";
export const Button = (props: {
    type: string,
    value: string,
    onClick(e: any): any
}) => {
    return (
        <>
            <ButtonXMl.body type={props.type} value={props.value} onClick={(e) => props.onClick(e)} />
        </>
    )
}

export const ButtonXL = (props: {
    title: string,
    onClick(e: any): any
}) => {
    return (
        <>
            <View.wrapBtn>
                <View.NextButton type="submit" onClick={(e) => props.onClick(e)}>{props.title}</View.NextButton>
            </View.wrapBtn>
        </>
    )
}
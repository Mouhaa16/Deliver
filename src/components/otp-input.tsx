import React from "react";
import { View } from "../infrastructure/style";
export const OtpInput = (props:
    {
        type: string,
        value: string,
        placeholder: string,
        title: string,
        onChange(e: any): any,
        onClickSendOtp(e: any): any
    }) => {
    return (
        <>
            <View.WrapCode>
                <View.otpInput type={props.type} value={props.value}
                    placeholder={props.placeholder}
                    onChange={(e) => props.onChange(e)} />
                <View.wrapotp>
                    <View.otpbtn onClick={(e) =>
                        props.onClickSendOtp(e)}>{props.title}</View.otpbtn>
                </View.wrapotp>
            </View.WrapCode>
            <View.line></View.line>
        </>
    )
}
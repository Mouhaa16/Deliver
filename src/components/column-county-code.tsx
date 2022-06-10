import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../infrastructure/store/hook";
import { View } from "../infrastructure/style";
import { setCurrentCountryCode } from "../slices/user";
export const CodesColumn = (props:
    {
        country: string,
        code: string,
    }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const OnClick = (e: any) => {
        e.preventDefault()
        try {
            dispatch(setCurrentCountryCode({ code: props.code, country: props.country }))
            navigate(-1)

        } catch (error) {
            throw error
        }
    }
    return (
        <>
            <View.wrapCcode onClick={(e) => OnClick(e)}>
                <View.wrapCname>
                    <View.title>{props.country}</View.title>
                </View.wrapCname>
                <View.wrapcode>
                    <View.title>{props.code}</View.title>
                </View.wrapcode>
            </View.wrapCcode>
            <View.underline></View.underline>
        </>
    )
}
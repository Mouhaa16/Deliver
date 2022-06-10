import { RightOutlined } from "@ant-design/icons";
import React from "react";
import { View } from "../infrastructure/style";
export const AreaCode = (props: {
    title: string,
    country: string,
    onSelectCountry(e: any): any
}) => {
    return (
        <>
            <View.WrapAreaCode>
                <View.wraptext>
                    <View.title>{props.title}</View.title>
                </View.wraptext>
                <View.wrapcountry onClick={(e) => props.onSelectCountry(e)}>
                    <View.title>{props.country}</View.title>
                    <RightOutlined />
                </View.wrapcountry>
            </View.WrapAreaCode>
            <View.line></View.line>
        </>
    )
}
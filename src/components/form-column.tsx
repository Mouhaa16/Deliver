import React from "react";
import { Address } from "../infrastructure/style";
export const FormColumn = (props:
    {
        id: string,
        title: string,
        type: string,
        value: any,
        placeholder: string,
        onChange(e: any): any
    }) => {
    return (
        <>
            <Address.column_wrap>
                <Address.wraptitle>
                    <Address.column_title>{props.title}</Address.column_title>
                </Address.wraptitle>
                <Address.input_
                    id={props.id}
                    type={props.type}
                    value={props.value}
                    placeholder={props.placeholder}

                    onChange={props.onChange} />
            </Address.column_wrap>
        </>
    )
}
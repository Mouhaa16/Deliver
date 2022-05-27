import React from "react";
import { PageNav } from "../components";
import { Row } from "../infrastructure/style";
import { useNavigate } from 'react-router-dom'

export const BarCode = () => {
    const navigate = useNavigate();
    return (
        <>
            <PageNav title={'Bar code'} onClickBack={function (e: any) {
                e.preventDefault()
                navigate(-1)
                throw new Error("Function not implemented.");
            }} />
        </>
    )
}
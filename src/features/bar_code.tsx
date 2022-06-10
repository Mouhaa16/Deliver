import React from "react";
import { PageNav, QrCode } from "../components";
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


            <Row.Wrapper>
                <QrCode link={"https://deliver-aa5e5.web.app/"} />
            </Row.Wrapper>
        </>
    )
}
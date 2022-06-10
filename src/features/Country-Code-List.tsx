import React from "react"
import { useNavigate } from "react-router-dom"
import { CodesColumn, PageNav } from "../components"
import { phone_codes } from "../infrastructure/common/codes"
import { Row } from "../infrastructure/style"

export const CountryCodesList = () => {
    const navigate = useNavigate()
    return (
        <>
            <PageNav title={"Country Codes"}
                onClickBack={function (e: any) {
                    return navigate(-1)
                }} />
            <Row.Wrapper>
                {phone_codes.countries.map((item, index) => {
                    return <CodesColumn
                        key={index}
                        country={item.name}
                        code={item.code}
                    />
                })
                }
            </Row.Wrapper>
        </>
    )
}
import React from "react";
import { AddressCard, PageNav, ProductInfo } from "../components";
import { CSSReset, Row } from "../infrastructure/style";
export const SendPackage = () => {

    const onClickPickUp = (e: any) => {
        e.preventDefault()
        alert()

    }
    const onClickDestination = (e: any) => {
        e.preventDefault()
        alert()


    }
    return (
        <>
            <PageNav title={'Send Package'} />
            <Row.Wrapper>
                <AddressCard
                    onClickDestination={(e) => onClickDestination(e)}
                    onClickPickUp={(e) => onClickPickUp(e)}
                />
                <ProductInfo />
            </Row.Wrapper>
        </>
    )
}

import React from "react";
import { AddressCard, PageNav, ProductInfo, PriceCard } from "../components";
import { CSSReset, Row } from "../infrastructure/style";
export const SendPackage = () => {


    return (
        <>
            <PageNav title={'Send Package'} />
            <Row.Wrapper>
                <AddressCard
                    onClickDestination={(e) => {
                        e.preventDefault()
                        try {
                            alert()
                        } catch (error) {
                            throw new Error('Error occurred!')
                        }
                    }}
                    onClickPickUp={(e) => {
                        e.preventDefault()
                        try {
                            alert()
                        } catch (error) {
                            throw new Error('Error occurred!')
                        }
                    }}
                />
                <ProductInfo />
            </Row.Wrapper>
            <PriceCard />

        </>
    )
}

import React from "react";
import { Display, ProductInFo } from '../infrastructure/style'

export const PriceCard = (props: { price: number | string, }) => {
    return (
        <>
            <Display.Wrapper>
                <Display.check type={'checkbox'} />
                <Display.line />
                <Display.wrap>
                    <Display.price>₦ _ _</Display.price>
                    <Display.button type={'button'} value={'Next'} />
                </Display.wrap>
            </Display.Wrapper>
        </>
    )
}

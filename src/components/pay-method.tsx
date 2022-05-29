import React from "react";
import { ProductInFo } from "../infrastructure/style";
export const PayMethod = () => {
    return (
        <>
            <ProductInFo.wrapPbtn>
                <ProductInFo.paybtn type={'button'} value={'now'} />
                <ProductInFo.paybtn type={'button'} value={'On arrival'} />
            </ProductInFo.wrapPbtn>
        </>
    )
}
import React, { FC } from 'react'
import { HomeStyle } from '../infrastructure/style'

interface Iservices {
    children: JSX.Element | JSX.Element[]
}
export const Services: FC<Iservices> = ({ children }) => {
    return (
        <>
            <HomeStyle.WrapperA>
                {children}
            </HomeStyle.WrapperA>
        </>
    )
}
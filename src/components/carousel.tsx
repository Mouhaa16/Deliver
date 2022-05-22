import React, { FC } from 'react'
import { HomeStyle } from '../infrastructure/style'
import Carosel from 'nuka-carousel'
interface ICarousel {
    children: JSX.Element | JSX.Element[];
    onClick(e: any): any;

}
export const Carousel: FC<ICarousel> = ({ children, onClick }) => {
    return (<>

        <HomeStyle.card>
            <Carosel wrapAround={true}
            >
                {children}
            </Carosel>
        </HomeStyle.card>
    </>)
}

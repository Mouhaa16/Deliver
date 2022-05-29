import React from 'react'
import { ProfileCard } from '../infrastructure/style'

export const ProfileCards = (props: { children: JSX.Element | JSX.Element[] }) => {

    return (<>
        <ProfileCard.card>  {props.children}  </ProfileCard.card>
    </>)
}
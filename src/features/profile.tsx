import React from "react"
import { Avatar, MobileNav, Nav, PageNav, PageTitle, ProfileCards, ProfileIcons, SubTab } from "../components"
import { MobileNavbar, Row } from "../infrastructure/style"
export const Profile = () => {
    return (<>
        <PageTitle title={'Me'} />
        <Row.Wrapper>
            <Avatar />
            <ProfileIcons />
            <ProfileCards children={<>
                <SubTab title={"Activity"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />
                <SubTab title={"Cards"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />
                <SubTab title={"Payments history"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />

                <SubTab title={"FAQ"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />
            </>} />

            <ProfileCards children={<>
                <SubTab title={"Customer Service"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />
                <SubTab title={"Customer Hotline"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />
            </>} />

            <ProfileCards children={
                <SubTab title={"Settings"} onClick={function (e: any) {
                    throw new Error("Function not implemented.")
                }} />} />
            <MobileNavbar.bottom />
        </Row.Wrapper>
        <MobileNav />
    </>)
}
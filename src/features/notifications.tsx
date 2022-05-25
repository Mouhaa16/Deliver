import React from "react";
import { MobileNav, Nav, PageNav, PageTitle } from "../components";
import { Row } from "../infrastructure/style";
export const Notification = () => {
    return (<>
        <Nav />
        <PageTitle title={'Notifications'} />
        <MobileNav />
    </>)
}
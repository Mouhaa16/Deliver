import React from "react";
import { Row, Pagetitle } from "../infrastructure/style";
import { LeftOutlined } from '@ant-design/icons'
export const PageTitle = (prop: { title: string }) => {
    return (
        <>
            <Pagetitle.nav>
                <Pagetitle.wrap>
                </Pagetitle.wrap>
                <Pagetitle.title>{prop.title}</Pagetitle.title>
            </Pagetitle.nav>
        </>
    )
}
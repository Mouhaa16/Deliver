import React from "react";
import { Row, Pagetitle } from "../infrastructure/style";
import { LeftOutlined } from '@ant-design/icons'
export const PageNav = (prop: { title: string }) => {
    return (
        <>
            <Pagetitle.nav>
                <Pagetitle.wrap>
                    <LeftOutlined style={{ fontSize: '22px', color: 'black' }} />
                </Pagetitle.wrap>
                <Pagetitle.title>{prop.title}</Pagetitle.title>
            </Pagetitle.nav>
        </>
    )
}
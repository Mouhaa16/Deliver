import React from "react";
import { Row, Pagetitle } from "../infrastructure/style";
import { LeftOutlined } from '@ant-design/icons'
export const PageNav = (prop: { title: string, onClickBack(e: any): any }) => {
    return (
        <>
            <Pagetitle.nav>
                <Pagetitle.wrap>
                    <LeftOutlined
                        style={{ fontSize: '22px', color: 'black' }}
                        onClick={(e) => prop.onClickBack(e)} />
                </Pagetitle.wrap>
                <Pagetitle.title>{prop.title}</Pagetitle.title>
            </Pagetitle.nav>
        </>
    )
}
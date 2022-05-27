import React from 'react'
import Drawer from 'react-bottom-drawer'
export const BottomDrawer = (prop: { children: JSX.Element | JSX.Element[], state: boolean, onCloseDrawer(): any }) => {

    return (
        <>
            <Drawer
                duration={250}
                hideScrollbars={true}
                onClose={prop.onCloseDrawer}
                isVisible={prop.state}
            >
                {prop.children}
            </Drawer>
        </>)
}


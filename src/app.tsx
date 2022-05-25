import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { MobileNav, Nav } from './components';
import { Styles, CSSReset } from './infrastructure/style';
import { Home, Notification, Profile, SendPackage, BarCode } from './features/'
const MyAppComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notification" element={<Notification />} />
                <Route path="/user" element={<Profile />} />
                <Route path='/send/package' element={<SendPackage />} />
                <Route path='/barcode' element={<BarCode />} />
                <Route path='/me' element={<Profile />} />
            </Routes>

        </>
    );
};

export const App = () => {
    if (isMobile) {
        return (
            <>
                <Styles.Wrapper>
                    <CSSReset />
                    <MyAppComponent />
                </Styles.Wrapper>
            </>
        );
    }
    return <div>desktop version not available</div>;
};

import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { Styles, CSSReset } from './infrastructure/style';
import { Home, Notification, Profile, SendPackage, BarCode, Address, } from './features/'
const MyAppComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notification" element={<Notification />} />
                <Route path='/send/package' element={<SendPackage />} />
                <Route path='/barcode' element={<BarCode />} />
                <Route path='/me' element={<Profile />} />
                <Route path='/address' element={<Address />} />

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

import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { Styles, CSSReset } from './infrastructure/style';
import {
    Home,
    Notification,
    Profile,
    SendPackage,
    BarCode,
    Address,
    Messaging,
    NewAddress,
    Login,
    OtpToken,
    CountryCodesList,
} from './features/'
const MyAppComponent = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/country/code" element={<CountryCodesList />} />
                <Route path="/otp" element={<OtpToken />} />
                <Route path='/me' element={<Profile />} />
                <Route path='/barcode' element={<BarCode />} />
                <Route path='/address' element={<Address />} />
                <Route path='/messages' element={<Messaging />} />
                <Route path='/new-address' element={<NewAddress />} />
                <Route path="/notification" element={<Notification />} />
                <Route path='/send/package' element={<SendPackage />} />
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

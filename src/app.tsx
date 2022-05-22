import React from 'react';
import { isMobile } from 'react-device-detect';
import { Route, Routes } from 'react-router-dom';
import { MobileNav, Nav } from './components';
import { Styles, CSSReset } from './infrastructure/style';
import { Home } from './features/home'
const MyAppComponent = () => {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <MobileNav />

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

import styled from 'styled-components';
import { Navbar } from './navbar';
export const Styles = {
    Wrapper: styled.main`
        display: flex;
        background-color: #eeeeee;
        width: 100%;
        overflow: auto;
    `,
};

export const MobileNavbar = {
    Wrapper: styled(Navbar.Wrapper)`
        position: fixed;
        width: 100vw;
        bottom: 0;
        justify-content: center;
    `,
    Items: styled(Navbar.Items)`
        flex: 1;
        justify-content: space-around;
    `,
    Item: styled(Navbar.Item)`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.2rem;
    `,
    Icon: styled.span``,
};

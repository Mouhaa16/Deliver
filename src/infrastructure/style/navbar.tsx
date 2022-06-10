import styled from 'styled-components';
export const Navbar = {
    Wrapper: styled.nav`
        position: absolute;
        width:100%;
        flex: 1;
        align-self: flex-start;
        padding: 1rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    `,
    Logo: styled.h1`
        border: 1px solid gray;
        padding: 0.5rem 1rem;
    `,
    Items: styled.ul`
        display: flex;
        list-style: none;
    `,
    Item: styled.li`
        padding: 0 1rem;
        cursor: pointer;
    `,
    Icon: styled.span``,
};



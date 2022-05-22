import styled from 'styled-components';

export const list = {
    wrap: styled.div`
        padding: 1rem;
        background-color: transparent;
        overflow-x: hidden; /* Hide horizontal scrollbar */
        overflow-y: scroll;
        height: 200px;
    `,
    item: styled.li`
        text-decoration: none;
        color: white;
        font-size: 2rem;
        list-style-type: none;
        text-align: center;
        font-style: Georgia;
    `,
    underline: styled.div`
        -webkit-text-decoration-style: underline;
        text-decoration-color: red;
    `,
};

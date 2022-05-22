import styled from 'styled-components';

export const A = {
    wrapper: styled.div`
        width: 100%;
        height: fit-content;
        background-color: white;
        display: flex;
        flex-wrap: wrap;
        padding: 0.3rem;
        border-radius: 5px;
        margin-bottom: 0.5rem;
    `,
    board: styled.div`
        width: 100%;
        height: 200px;
        background-color: grey;
        border: 1px solid white;
        border-radius: 10px;
        margin-bottom: 0.5rem;
    `,
    title: styled.h4`
        font-size: 2.3rem;
        font-style: Georgia;
        text-align: center;
        color: white;
        margin: 5rem;
    `,
    text: styled.p`
        font-style: Georgia;
        margin: auto;
    `,
    view: styled.button`
        width: 70px;
        padding: 0.7rem;
        background-color: lightgreen;
        border: 0;
        border-radius: 5px;
        margin-right: 0.2rem;
    `,
    btn: styled.button`
        width: 70px;
        padding: 0.7rem;
        background-color: lightblue;
        border: 0;
        border-radius: 5px;
    `,
};

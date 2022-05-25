import styled from 'styled-components'

export const Display = {
    Wrapper: styled.div` 
        width: 100%;
        height: 100px;
        background: #FFFFFF;
        position: fixed;
        bottom: 0;
        padding:0.5rem;`,
    wrap: styled.div`
        padding:0.6rem;
    `,
    price: styled.h4`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;`,

    button: styled.input`
        float:right;
        width:140px;
        background: #000000;
        color:white;
        padding:10px;
        border-radius: 20px;
        border:none;
        text-decoration:none;
        outline:none;
    `,
    check: styled.input`
    background-color: #000000;
    `,
    line: styled.hr`
        background:#C4C4C4
        width:95%;
        margin:0 auto;      `
}
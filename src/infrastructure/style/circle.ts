import styled from 'styled-components';

export const circle = {
    wrapper: styled.div`
        text-align: center;
        background-color: white;
        border-radius: 10px;
    `,
    SVG: styled.svg`
        width: 195px;
        height: 200px;
    `,
    round: styled.circle`
        transition: all 0.7s ease-in-out;
    `,
    text: styled.text`
        font-size: 20px;
    `,
};

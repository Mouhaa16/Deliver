import styled from 'styled-components';

export const Modal_ = {
    Wrapper: styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
        display: block;
    `,
    main: styled.section`
        position: fixed;
        background: white;
        width: 80%;
        height: auto;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -50%);
    `,

    bmain: styled.section`
        position: absolute;
        background: white;
        width: 100%;
        height: 45%;
        top: 0;
        margin-buttom: 50px;
        left: 50%;
        transform: translate(-50%, -50%);
    `,
    display_none: styled.div`
        display: none;
    `,
};

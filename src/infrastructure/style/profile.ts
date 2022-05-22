import styled from 'styled-components';

export const ProfileStyle = {
    Wrapper: styled.div`
        width: 100%;
        height: 150px;
        background-color: white;
        padding: 2rem;
        border-radius: 10px;
    `,
    image: styled.img`
        width: 110px;
        height: 110px;
        float: left;
        border-radius: 50%;
        background-color: grey;
    `,
    text: styled.p`
        margin: 2.5rem;
        float: left;
    `,
    button: styled.button`
        bottom: 0;
        width: 100%;
        padding: 5px;
        text-align: center;
        border: 1px solid red;
        border-radius: 5px;
    `,
};

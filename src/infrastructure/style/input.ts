import styled from 'styled-components';

export const InputStyle = {
    Wrapper: styled.div`
        margin-top: 10rem;
        background-color: ;
    `,
    title: styled.title`
        width: 200px;
    `,
    body: styled.input`
        width: 75%;
        height: 40px;
        padding: 0.5rem;
        border: none;
        margin-bottom: 10px;
        outline: none;
    `,

    full: styled.input`
        width: 100%;
        height: 40px;
        padding: 0.5rem;
        border: none;
        margin-bottom: 10px;
        outline: none;
    `,
    half: styled.input`
        width: 65%;
        height: 40px;
        border-radius: 5px;
        padding: 0.5rem;
        border: none;
        margin-bottom: 10px;
        outline: none;
    `,

    code: styled.input`
        width: 25%;
        height: 40px;
        border-radius: 5px;
        padding: 0.5rem;
        border: none;
        margin-bottom: 10px;
        margin-right: 5px;
        outline: none;
    `,
    swrap: styled.div`
        width: 100%;
        height: 40px;
        display: flex;
        flex-wrap: wrap;
        border-radius: 5px;
        float: left;
        overflow: auto;
        margin-bottom: 15px;
    `,
    line: styled.span`
        color: grey;
        font-size: 27px;
        font-weight: 100;
    `,
    select: styled.datalist`
        width: 25%;
        height: 40px;
        padding: 0.3rem;
        border: transparent;
        text-align: center;
        outline: none;
        color: black;
    `,
    Sin: styled.input`
        width: 25%;
        height: 40px;
        padding: 0.5rem;
        border: transparent;
    `,

    option: styled.option``,

    recaptcha: styled.div`
        margin-top: 0.5rem;
    `,
};

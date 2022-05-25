import styled from 'styled-components'
export const ProductInFo = {
    Wrapper: styled.div`
        width: 100%;
        height: fit-content;
        background: #FFFFFF;
        border-radius: 10px;
        margin-top:10px;
        padding:1rem;
    `,
    title: styled.h5`
        text-align:center;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        margin-bottom:6px;
    `,
    wrap: styled.div`
        width:100%;
        padding:2rem 0.5rem;
    `,
    text: styled.h5`
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        margin-bottom:6px;
        float:left;
        line-height: 15px;`,

    search: styled.div`
        background: #EEEEEE;
        border-radius: 16px;
        margin-bottom:5px;
        padding:0.8rem;`


    ,
    input: styled.input`
        text-decoration: none;
        border: none;
        outline: none;
        width: 290px;
        margin-left:10px;
        background: #EEEEEE;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;

  `,

    icon: styled.div` float:right; `,
    camera: styled.div` `


}
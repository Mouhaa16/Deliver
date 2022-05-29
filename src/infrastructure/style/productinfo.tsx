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
    wrapCard: styled.div`
        width:100%;
        background-color:grey;
        height:300px;
       
    `,
    card: styled.div`
        width:100%;
        height:fit-content;
        padding:1rem;
        background: #EEEEEE;
        margin-bottom:10px;
       `,
    camera: styled.div`
        width:80px;
        height:80px;
        background: white;
        text-align:center;
        padding:1rem;
        margin:0 auto;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 15px;
        color:#8E8D8D;
           
         `,
    count: styled.div`
       width:100%;
       padding:1rem;
       margin-bottom:15px;
    `,
    desc: styled.h4`
        font-family: 'Georgia';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 13px;
            `,
    textArea: styled.textarea`
      width:100%;
      font-family: 'Georgia';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 15px;
      padding:5px;
      border:none;
    `,

    wrap_save: styled.div`
        display:flex;
        width:100%;
        padding:1rem;
        justify-content:center;
    `,

    save: styled.input`
       border:none;
       outline:none;
       width:120px;
       padding:1.2rem; 
       background:#000000;
       border-radius:25px;
       color:white; 
       margin: 0 auto;
       `,
    wrapPbtn: styled.div`
       padding:2rem;
       background: #EEEEEE;
       width:100%;
       display:flex;
       justify-content:center;
    `,
    paybtn: styled.input`
        width:200px;
       outline:none;
       border:none;
       padding:1rem;
       background-color: white;
       border-radius:5px;
       margin-left:10px;
    `
}
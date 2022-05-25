import styled from "styled-components";
export const Address = {
  Wrapper: styled.div`
    font-size: 20px;
    width: 100%;
    height: 130px;
    border-radius: 10px;
    background-color: white;
    padding: 2rem;
  `,
  wrap: styled.div``,
  fill: styled.div`
    width: 270px;
    background: #e5e5e5;
    border-radius: 3px;
    padding: 0.6rem;
    float: left;
  `,
  text: styled.p`
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 17px;
    line-height: 15px;
    color: grey;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
  `,
  input: styled.input`
    text-decoration: none;
    border: none;
    outline: none;
    width: 270px;
  `,
  plus: styled.div`
    width: 34px;
    height: 25px;
    background: #000000;
    border-radius: 2px;
    float: right;
    text-align: center;
    margin-top: 2px;
  `,
  line: styled.div`
    width: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    height: 50px; /* Override in-line if you want specific height. */
    margin-top: 10px;
    margin-left: 10px;
  `,
  vert_line: styled.div`
    width: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    height: 50px; /* Override in-line if you want specific height. */
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
  `,
};

import { style } from "@mui/system";
import styled from "styled-components";
export const Address = {
  Wrapper: styled.div`
    font-size: 20px;
    width: 100%;
    height: 140px;
    border-radius: 10px;
    background-color: white;
    padding: 5px;
  `,
  wrap: styled.div``,
  fill: styled.div`
    position: relative;

    width: max-size;
    height: 50px;
    background: #e5e5e5;
    border-radius: 8px;
    text-align: center;
    margin: 10px;
    padding: 1rem;
  `,
  icon: styled.div`
    float: right;
    color: grey;
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
    border-radius: 2px;
    text-align: center;
  `,
  line: styled.div`
    width: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    height: 20px; /* Override in-line if you want specific height. */
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
  container: styled.div`
    width:60%,
    heigth:fit-content;
    margin:auto;
    background:#D9D9D9;
    margin-top:10px;
    border-radius:10px;
    padding:1.5rem ;
  `,

  content_name: styled.h3`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
  `,
  wrapContent: styled.div`
    margin-bottom: 30px;
  `,
  content: styled.p`
    font-family: "Georgia";
    font-style: normal;
    font-weight: 200;
    font-size: 11px;
    line-height: 10px;
    margin: 10px;
    color: #38453b;
    float: left;
  `,

  edit: styled.input`
    outline: none;
    border: none;
    border-radius: 50%;
    font-family: "Georgia";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    padding: 1rem;
    color: grey;
    float: right;
  `,
  sticky: styled.button`
    position: -webkit-sticky;
    position: sticky;
    float: right;
    padding: 16px;
    background-color: black;
    border: 2px solid white;
    border-radius: 50%;
    position: fixed;
    right: 10px;
    bottom: 50px;
    color: white;
  `,
};

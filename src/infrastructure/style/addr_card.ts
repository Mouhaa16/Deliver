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
  wrap: styled.div`
    padding: 1rem;
    width: 85%;
  `,
  contain: styled.div`
    display: flex;
  `,
  fill: styled.div`
    width: max-size;
    height: 50px;
    background: #e5e5e5;
    border-radius: 8px;
    text-align: center;
    margin: 7px;
  `,
  icon: styled.div`
    color: grey;
    float: right;
    font-size: 15px;
    padding: 1.65rem 0.2rem;
  `,
  display: styled.p`
    font-family: "Inter";
    font-style: normal;
    font-weight: 200;
    font-size: 17px;
    line-height: 15px;
    color: grey;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
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
    font-size: 14px;
    line-height: 15px;
    padding: 1.5rem;
    float: left;
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
  underline: styled.div`
    height: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    width: 90%;
    margin: 0 auto;
    text-align: center;
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
    padding: 25px;
    background-color: black;
    border: 2px solid white;
    border-radius: 50%;
    position: fixed;
    right: 10px;
    bottom: 50px;
    color: white;
  `,
  choose: styled.input`
    outline: none;
    border: none;
    border-radius: 5px;
    background: grey;
    color: white;
    width: fit-content;
    margin: 3px;
    padding: 6px;
  `,
  wrap_from: styled.div`
    width: 100%;
    height: 300px;
    background: white;
    border-radius: 10px;
  `,
  form: styled.form``,
  column_wrap: styled.div`
    margin-top: 10px;
    display: flex;
    padding: 1rem 1rem;
    padding-top: 20px;
    align-items: center;
  `,
  wraptitle: styled.div`
    width: 100px;
  `,
  column_title: styled.h5`
    font-family: "Georgia";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 15px;
    margin-right: 10px;
  `,
  input_: styled.input`
    width: 100%;
    border: none;
    outline: none;
    padding: 5px;
    border-radius: 5px;
    background: #e5e5e5;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
  `,
  loc: styled.div`
    width: 90%;
    background: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 15px;
    margin: 0 auto;
  `,
  down: styled.div`
    float: right;
  `,
  Save: styled.input``,
};

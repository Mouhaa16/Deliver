import { style } from "@mui/system";
import styled from "styled-components";
export const View = {
  WrapAreaCode: styled.div`
    margin-top: 35%;
    padding: 1rem;
    width: 100%;
    height: 45px;
  `,
  WrapCode: styled.div`
    margin-top: 60%;
    display: flex;
    align-items:center
    padding: 1rem;
    width: 98%;
    height: 45px;
  `,
  WrapInput: styled.div`
    margin-top: 7%;
    display: flex;
    padding: 1rem;
    width: 100%;
    height: 45px;
  `,
  wraptext: styled.div`
    float: left;
    overflow: hidden;
  `,
  wrapcountry: styled.div`
    display: flex;
    align-items: center;
    float: right;
    overflow: hidden;
  `,
  title: styled.h5`
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  `,
  line: styled.div`
    height: 1px; /* Line width */
    background-color: #000000; /* Line color */
    width: 95%;
    margin: 0 auto;
    text-align: center;
  `,
  input: styled.input`
    outline: none;
    border: none;
    padding: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    background: transparent;
    margin-left: 20px;
  `,
  otpInput: styled.input`
    width: 100%;
    outline: none;
    border: none;
    padding: 1rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    background: transparent;
  `,
  wrapBtn: styled.div`
    margin-top: 4%;
    padding: 0.7rem;
  `,
  wrapotp: styled.div`
    width: 30%;
  `,
  NextButton: styled.button`
    width: 100%;
    height: 54px;
    background-color: #000000;
    outline: none;
    border: none;
    border-radius: 5px;
    color: white;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
  `,
  otpbtn: styled.div`
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    background: #c4c4c4;
    border-radius: 4px;
    padding: 1rem;
  `,
  wrapCcode: styled.div`
    width:100%
    heigth: 100px;
    display: flex;
    justify-content:space-between;
    background-color: white;     
    align-item: center;
    padding:1rem;
  `,
  wrapCname: styled.div``,
  wrapcode: styled.div``,
  underline: styled.div`
    height: 1px; /* Line width */
    background-color: grey; /* Line color */
    width: 100%;
    margin: 0 auto;
    text-align: center;
  `,
};

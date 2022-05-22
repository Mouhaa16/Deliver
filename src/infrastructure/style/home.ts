import styled from "styled-components";
export const HomeStyle = {
  card: styled.div`
    border-radius: 10px;
    background-color: white;
    font-size: 20px;
    width: 100%;
    height: 136px;
  `,
  WrapperA: styled.div`
    width: 100%;
    height: 87px;
    margin-top: 10px;
    background-color: white;
    border: grey 1px;
    border-radius: 10px;
  `,
  packagewrap: styled.div`
    border-radius: 10px;
    margin-top: 10px;
    width: 100%;
    height: 130px;
    background-color: white;
    padding: 10px;
  `,
  align: styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    text-align: center;
  `,
  itemWrap: styled.div`
    flex: 0 0 33.333333%;
    margin-top: 16px;
    width: fit-content;
    padding-left: 50px;
  `,
  item2Wrap: styled.div`
    flex: 0 0 33.333333%;
    margin-top: 16px;
    width: fit-content;
    padding-right: 50px;
  `,
  line: styled.div`
    width: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    height: 60px; /* Override in-line if you want specific height. */
    margin: 0 auto;
    text-align: center;
    margin-top: 14px;
  `,

  img: styled.img`
    bottom: 8.33%;
    border-radius: 10px;
    width: 130px;
    height: 110px;
  `,
  text: styled.p``,
  title_btn: styled.h6`
    width: 124px;
    height: 27px;
    border-radius: 23.5px;
    background-color: #d9d9d9;
    margin: 0 auto;
    margin-top: 10px;
    display: flex;
    justify-content: center;
  `,
  btn: styled.a`
    width: fit-content;
    heigth: fit-content;
    float: left;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
    margin: center;
  `,
  t_line: styled.div`
    width: 1px; /* Line width */
    background-color: grey; /* Line color */
    height: 15px; /* Override in-line if you want specific height. */
    margin: 0 auto;
    float: left;
    margin-top: 0.5rem;
  `,
  wraptext: styled.span`
    width: 50px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    padding: 0.7rem 0;
  `,
};

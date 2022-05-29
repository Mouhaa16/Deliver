import styled from "styled-components";

export const ProfileAvatar = {
  Wrapper: styled.div``,

  ImageWrap: styled.div`
    width: 100%;
    height: 214px;
    display: block;
    justify-content: center;
    margin-top: 50px;
    padding: 1rem;
    text-align: center;
  `,
  background: styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50%;
    background: #ffffff;
    margin: 0 auto;
    margin-bottom: 15px;
  `,
  image: styled.img`
    width: 83px;
    height: 83px;
    border-radius: 50%;
    background: #ffffff;
  `,
  div: styled.div``,
  phone: styled.h4`
    font-family: "Inter";
    font-style: normal;
    font-weight: 50;
    font-size: 25px;
    line-height: 24px;
    color: #000000;
  `,
};

export const ProfileCard = {
  card: styled.div`
    width: 100%;
    height: fit-content;
    background: #ffffff;
    border-radius: 10px;
    margin-top: 10px;
    padding: 1rem;
  `,
  cardIcons: styled.div`
    width: 100%;
    height: 56px;
    left: 22px;
    top: 301px;
    background: #ffffff;
    border-radius: 8px;
    margin-bottom: 10px;
  `,
  wrap: styled.div``,
  line: styled.div`
    width: 1px; /* Line width */
    background-color: #e0dcdc; /* Line color */
    height: 50px; /* Override in-line if you want specific height. */
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
  `,
};

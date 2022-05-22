import styled from "styled-components";

export const Row = {
  Wrapper: styled.div`
    position: absolute;
    margin-top: 60px;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    background-color: #e5e5e5;
    box-sizing: border-box;
    padding: 1rem;
  `,
  Wrap: styled.div`
    position: absolute;
    border-radius: 15px;
    margin-top: 60px;
    flex-wrap: nowrap;
    width: 100%;
    padding: 1rem;
    height: fit-content;
    background-color: grey;
  `,
  row: styled.div`
    width: 50%;
    height: fit-content;
  `,
};

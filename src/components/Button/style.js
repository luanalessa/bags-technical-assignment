import styled from "styled-components";

export const Button = styled.button`
  all: unset;
  text-align: center;
  width: 130px;
  height: 32px;

  background: #020202;
  border-radius: 6px;

  font-weight: 700;
  font-size: 16px;
  line-height: 20px;

  color: #ffffff;

  @media (min-width: 1300px) {
    background: #0051ff;
  }
`;
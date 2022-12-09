import styled from "styled-components";

export const Container = styled.div`
  width: 432px;
  height: 399px;

  background: #ffffff;
  border: 2.25px solid #C8C6C6;
  border-top: none ;
  border-radius: 12px;
  margin: 0 auto;
  padding: 48px 18px 25px 18px;

  section {
    display: flex;
    justify-content: space-between;
  }
  
`;


export const Title = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;

export const Infor = styled.span`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;

  color: #000000;

  display: block;
  margin-top: 28px;
`;

export const Price = styled.div`

  position: relative;
  width: 432px;
  height: 59px;
  right: 21px;
  top: 13px;

  border: 2px solid #868686;
  border-radius: 0px 0px 12px 12px;

  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  color: #7b5be4;

  display: flex;
  align-items: center;

  padding: 25px;
`;

export const Option = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap:20px;

  margin-top: 26px;
  margin-bottom: 44px;
`
export const Items = styled.li`
  width: 311px;
  height: 27px;

  background: #eceaf2;
  border-radius: 24px;

  font-weight: 700;
  font-size: 16px;
  color: #7b5be4;

  display: flex;
  align-items: center;

  padding: 17px;

`;
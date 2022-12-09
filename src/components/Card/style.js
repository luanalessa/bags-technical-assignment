import styled from 'styled-components';

export const Container = styled.div`
  width: 432px;
  height: 229px;

  background: #ffffff;
  border: 2.25px solid #868686;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  margin: 0 auto;
  padding: 22px 18px;

  position: relative;
  top: 15px;
  
`;

export const Title = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 33px;

  color: #000000;

  @media (min-width: 640px){
    font-size:  20px;
  }
  @media (min-width: 1024px){
    font-size:  24px;
  }
`;

export const Infor = styled.span`
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 33px;

  color: #000000;
  display: block;

  .icon {
    margin-right: 8px;
    margin-top:1px;
    position: relative;
    top: 1px;
  }
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

export const Tag = styled.div`
  position: absolute;
  width: 121px;
  height: 24px;
  left: 287px;
  top: -12px;

  text-align: center;
  display: flex;
  justify-content: center;  background: #7b5be4;
  border-radius: 6px;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  align-items: center;

  color: #ffffff;
`;
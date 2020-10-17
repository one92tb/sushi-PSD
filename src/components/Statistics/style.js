import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ff7f7f;
  line-height: 1.2;
`;

const Inner = styled.div`
  max-width: 1440px;
  padding: 146.5px 200px 100px 135px;
  position: relative;
  margin: 0 auto;
`;

const Title = styled.span`
  display: block;
  font-size: 58.33px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const Description = styled.span`
  display: block;
  font-size: 24.68px;
  color: #fff;
  text-align: center;
  padding-top: 32.5px;
  padding-bottom: 87px;
  max-width: 716.11px;
  margin-left: auto;
  margin-right: auto;
`;

const Panel = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Card = styled.div`
  border-radius: 50%;
  border: 5px solid #fff;
  width: 275px;
  height: 275px;
  box-sizing: border-box;
  margin-bottom: 32px;
`;

const Number = styled.span`
  font-size: 75px;
  color: #fff;
  font-weight: bold;
  display: block;
  text-align: center;
  padding-top: 65.75px;
`;

const Name = styled.span`
  color: #fff;
  font-size: 41.67px;
  font-weight: bold;
  display: block;
  text-align: center;
  position: relative;
  top: -2.39px;
  text-transform: uppercase;
`;

const VectorSmart3 = styled.img`
  position: absolute;
  top: 212px;
  left: 114px;
`;

const VectorSmart4 = styled.img`
  position: absolute;
  top: 108px;
  right: 135px;
`;

export {
  Wrapper,
  Inner,
  Title,
  Description,
  Panel,
  Card,
  Number,
  Name,
  VectorSmart3,
  VectorSmart4
};

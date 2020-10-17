import styled from 'styled-components';

const Wrapper = styled.div`
  background:#fff;
`;

const Inner = styled.div`
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  padding: 179px 125px 139px 125px;
  flex-wrap: wrap;
  position: relative;
`;

const Image = styled.img``;

const Card = styled.div``;

const Title = styled.span`
  display: block;
  font-size: 58.33px;
  font-weight: bold;
  color: #ff7f7f;
  text-transform: uppercase;
  padding-top: 72px;
  padding-bottom: 41.25px;
`;

const Description = styled.span`
  display: block;
  max-width: 576.65px;
  font-size: 29.72px;
  color: #ff7f7f;
  line-height: 1.2;
  word-wrap: break-word;
  padding-bottom: 62.75px;
`;

const Button = styled.button `
  text-transform: uppercase;
  font-size: 25px;
  font-weight: bold;
  border-radius: 32.5px;
  width: 322px;
  height: 65px;
  border: none;
  color: #fff;
  background: #ff7f7f;
  margin-bottom: 65px;
`;

const VectorSmart1 = styled.img`
  position: absolute;
  bottom: 89px;
  left: 654px;
`;

const VectorSmart2 = styled.img`
  position: absolute;
  right: 490px;
  top: -74px;
`;

const VectorSmart5 = styled.img`
  position: absolute;
  right: 36px;
  top: 93px;
`;

const VectorSmart6 = styled.img`
  position: absolute;
  left: 120px;
  top: 41px;
`;


export {
  Wrapper,
  Inner,
  Image,
  Card,
  Title,
  Description,
  Button,
  VectorSmart1,
  VectorSmart2,
  VectorSmart5,
  VectorSmart6
};

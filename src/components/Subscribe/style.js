import styled from "styled-components";

const Wrapper = styled.div `
  background: #fff;
`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const Title = styled.span `
  font-size: 58.33px;
  color: #ff7f7f;
  font-weight: bold;
  text-align: center;
  display: block;
  line-height: 1.2;
  padding-top: 170px;
  padding-bottom: 41.5px;
`;

const Description = styled.span `
  font-size: 29.72px;
  color: #ff7f7f;
  max-width: 923.9px;
  margin: 0 auto;
  text-align: center;
  display: block;
  line-height: 1.2;
`;

const Form = styled.form `
  margin: 0 auto;
  position: relative;
  width: 770px;
  padding-top: 73.5px;
  padding-bottom: 309px;
  max-width: 770px;
  width: 770px;
`;

const Input = styled.input `
  width: 659px;
  height: 63px;
  background: #f4f4f4;
  border: 1px solid #fff;
  border-radius: 32.14px 30.86px 30.86px 30.86px;
  font-size: 25px;
  color: #000;
  padding-left: 28.76px;
  box-sizing: border-box;
`;

const Button = styled.button `
  border-radius: 32.5px;
  background: #ff7f7f;
  color: #fff;
  border: 1px solid #fff;
  width: 222px;
  height: 65px;
  font-size: 25px;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
  }
`;

const VectorSmart2 = styled.img `
  position: absolute;
  top: 34px;
  right: 174px;
`;

const VectorSmart3 = styled.img `
  position: absolute;
  bottom: 85px;
  left: 437px;
`;

const VectorSmart4 = styled.img `
  position: absolute;
  top: 91px;
  left: 73px;
`;

const VectorSmart5 = styled.img `
  position: absolute;
  bottom: -61px;
  right: 174px;
`;

export {
  Wrapper,
  Inner,
  Title,
  Description,
  Form,
  Input,
  Button,
  VectorSmart2,
  VectorSmart3,
  VectorSmart4,
  VectorSmart5
};
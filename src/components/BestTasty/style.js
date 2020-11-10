import styled from "styled-components";

const Wrapper = styled.div `
  background:#fff;
  position: relative;
`;

const Inner = styled.div `
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 110px 98px 208px 130px;
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;
`;

const Image = styled.img ``;

const Card = styled.div ``;

const Title = styled.span `
  display: block;
  font-size: 58.33px;
  font-weight: bold;
  color: #ff7f7f;
  text-transform: uppercase;
  padding-top: 72px;
  padding-bottom: 41.25px;

`;

const Description = styled.span `
  display: block;
  max-width: 576.65px;
  font-size: 29.72px;
  color: #ff7f7f;
  line-height: 1.2;
  padding-bottom: 63.25px;
  word-wrap: break-word;
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
`;

const Shape = styled.img `
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export {
  Wrapper,
  Inner,
  Image,
  Card,
  Title,
  Description,
  Button,
  Shape
};
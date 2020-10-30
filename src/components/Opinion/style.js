import styled from "styled-components";

const Wrapper = styled.div `
  background-image: url('opinionBG.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(255, 127, 127, 0.6);
  background-blend-mode: darken;

`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const Image = styled.img `

`;

const Description = styled.span `
  font-size: 33.33px;
  color: #fff;
  text-align: center;
  max-width: 902.2px;
  display: block;
  padding-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 29px;
`;

const Name = styled.span `
  font-size: 44.9px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  display: block;
  padding-bottom: 206px;
`;

const ImageBox = styled.div `
  margin-left: auto;
  margin-right: auto;
  width: 241px;
  height: 242px;
  padding-top: 92px;
  padding-bottom: 53px;
`;

export {
  Wrapper,
  Inner,
  Image,
  Description,
  Name,
  ImageBox
};
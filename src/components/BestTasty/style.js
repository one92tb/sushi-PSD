import styled from "styled-components";

const Wrapper = styled.section `
  background:#fff;
  position: relative;
  font-size: 10px;
  overflow: hidden;

  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 6px;
  }
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

  @media only screen and (max-width: 320px) {
    padding: 55px 15px 44px 15px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding: 66px 15px 84.8px 15px;
  }
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div `
  width: 475px;
  height: 482px;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 320px) {
    width: 237.5px;
    height: 241px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    width: 285px;
    height: 289.2px;
    margin: 0 auto;
  }
`;


const Article = styled.article `
  @media only screen and (max-width: 768px) {
    margin: 0 auto;
  }
`;

const Title = styled.h1 `
  margin: 0;
  font-size: 5.8em;
  font-weight: bold;
  color: #ff7f7f;
  text-transform: uppercase;
  padding-top: 72px;
  padding-bottom: 41.25px;

  @media only screen and (max-width: 320px) {
    padding-top: 36px;
    padding-bottom: 20.625px;
    text-align: center;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding-top: 43.68px;
    padding-bottom: 24.75px;
    text-align: center;
  }
`;

const Description = styled.p `
  margin: 0;
  max-width: 576.65px;
  font-size: 3em;
  color: #ff7f7f;
  line-height: 1.2;
  padding-bottom: 63.25px;
  word-wrap: break-word;

  @media only screen and (max-width: 320px) {
    padding-bottom: 31.625px;
    text-align: center;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding-bottom: 37.95px;
    text-align: center;
  }
`;

const Button = styled.button `
  text-transform: uppercase;
  font-size: 2.5em;
  font-weight: bold;
  border-radius: 32.5px;
  width: 322px;
  height: 65px;
  border: none;
  color: #fff;
  background: #ff7f7f;
  display: block;
  z-index: 2;
  transition: all 0.23s;
  backface-visibility: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: -2px 2px 9px -2px #000;
  }

  @media only screen and (max-width: 320px) {
    width: 161px;
    height: 32.5px;
    border-radius: 16.25px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    width: 193.2px;
    height: 39px;
    border-radius: 19.5px;
    margin: 0 auto;
  }
`;

const Shape = styled.img `

  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  pointer-events: none; 


  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 1600px) and (max-width: 1799px){
   bottom: -10px;
  }
  @media only screen and (min-width: 1800px) and (max-width: 2099px){
    bottom: -15px;
  }
  @media only screen and (min-width: 2100px) and (max-width: 2349px){
    bottom: -20px;
  }

  @media only screen and (min-width: 2350px)  {
    display: none;
  }
`;

export {
  Wrapper,
  Inner,
  Image,
  ImageBox,
  Article,
  Title,
  Description,
  Button,
  Shape
};
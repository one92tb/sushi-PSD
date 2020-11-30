import styled from "styled-components";

const Wrapper = styled.section `
  background: #fff;
  position: relative;
  font-size: 10px;


  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    font-size: 6px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1200px) {
    overflow: hidden;
}
`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 1200px){
    padding: 0 15px;
  }

`;

const Title = styled.h1 `
  font-size: 5.8em;
  color: #ff7f7f;
  text-align: center;
  margin: 0 auto;
  line-height: 1.2;
  padding-top: 169px;
  padding-bottom: 40.5px;

  @media only screen and (max-width: 320px) {
    padding-top: 84.5px;
    padding-bottom: 20.25px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    padding-top: 101.4px;
    padding-bottom: 24.3px;
  }
`;

const Description = styled.p `
  font-size: 3em;
  color: #ff7f7f;
  max-width: 923.9px;
  margin: 0 auto;
  text-align: center;
  margin: 0 auto;
  line-height: 1.2;
`;

const Form = styled.form `
  margin: 0 auto;
  position: relative;
  padding-top: 73.5px;
  padding-bottom: 309px;
  max-width: 770px;
  z-index: 1;

  @media only screen and (max-width: 320px) {
    width: 280px;
    padding-top: 36.75px;
    padding-bottom: 84.5px;
    width: 80%;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 290px;
    padding-top: 44.1px;
    padding-bottom: 101.4px; 
    width: 80%;
  }
`;

const Input = styled.input `
  width: 659px;
  height: 63px;
  background: #f4f4f4;
  border: 1px solid #fff;
  border-radius: 33px;
  font-size: 2.5em;
  color: #000;
  padding-left: 29px;
  box-sizing: border-box;
  z-index: 1;

  &:focus {
    outline: none;
    border: 2px solid #6e5dcc;
  }

  &:hover {
    cursor: text;
  }

  @media only screen and (max-width: 320px) {
    width: 230px;
    height: 31.5px;
    width: 100%;
    border radius: 16.5px;
    padding-left: 14.5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 240px;
    height: 37.8px;
    width: 100%;
    padding-left: 17.4px;
    border radius: 20px;
  }
`;

const Button = styled.button `
  border-radius: 32.5px;
  background: #ff7f7f;
  color: #fff;
  border: 1px solid #fff;
  width: 222px;
  height: 65px;
  font-size: 2.5em;
  text-transform: uppercase;
  position: absolute;
  right: 0;
  box-sizing: border-box;

  &:hover{
    cursor: pointer;
    color: #FFFF00;
  }

  @media only screen and (max-width: 320px) {
    width: 100px;
    height: 32.5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 110px;
    height: 39px;
  }
  
`;

const VectorSmart2 = styled.img `
  position: absolute;
  top: 34px;
  right: 174px;
  z-index: 1;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart3 = styled.img `
  position: absolute;
  bottom: 85px;
  left: 437px;
  z-index: 1;
  
  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart4 = styled.img `
  position: absolute;
  top: 91px;
  left: 73px;
  z-index: 1;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart5 = styled.img `
  position: absolute;
  bottom: -61px;
  right: 174px;
  z-index: 1;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const Shape1 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  display: block;

  @media only screen and (max-width: 768px) {
    display:  none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1200px) {
      left: -30px;
      top: -40px;
  }

  @media only screen and (min-width: 2350px)  {
    display: none;
  }
`;

const Shape2= styled.img`
  position: absolute;
  top:0;
  right:0;

  @media only screen and (min-width: 769px) and (max-width: 1200px) {
    right: -30px;
  }

  @media only screen and (max-width: 768px) {
    display:  none;
  }

  @media only screen and (min-width: 2350px)  {
    display: none;
  }
`;

const Shape3 = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;

  @media only screen and (max-width: 768px) {
    display:  none;
  }

  @media only screen and (min-width: 2350px)  {
    display: none;
  }
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
  VectorSmart5,
  Shape1,
  Shape2,
  Shape3
};
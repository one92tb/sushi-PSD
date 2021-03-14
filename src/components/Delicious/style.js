import styled from 'styled-components';

const Wrapper = styled.section `
  background:#fff;
  font-size: 10px;

  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    font-size: 6px;
  }
`;

const Inner = styled.div `
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  padding: 171px 125px 165px 125px;
  flex-wrap: wrap;
  position: relative;

  @media only screen and (max-width: 768px){
    justify-content: center;
    padding: 30px 15px 30px 15px;
  }
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
`;

const ImageBox = styled.div`
  width: 465px;
  height: 464px;
  border-radius: 50%;
  overflow: hidden;

  @media only screen and (max-width: 320px) {
    width: 232.5px;
    height: 232px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 279px;
    height: 278.4px;
  }
`;


const Article = styled.article ``;

const Title = styled.h1 `
  margin: 0;
  font-size: 5.8em;
  color: #ff7f7f;
  text-transform: uppercase;
  padding-top: 57px;
  padding-bottom: 38px;

  @media only screen and (max-width: 320px) {
    padding-top: 36px;
    padding-bottom: 20.625px;
    text-align: center;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    padding-top: 36px;
    padding-bottom: 20.625px;
    text-align: center;
  }
`;

const Description = styled.p `
  margin: 0;
  max-width: 600px;
  font-size: 3em;
  color: #ff7f7f;
  line-height: 1.2;
  word-wrap: break-word;
  padding-bottom: 66px;

  @media only screen and (max-width: 320px) {
    padding-bottom: 33px;
    text-align: center;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    padding-bottom: 39.6px;
    text-align: center;
  }
`;

const Button = styled.button `
  text-transform: uppercase;
  display: block;
  font-size: 2.5em;
  font-weight: bold;
  border-radius: 32.5px;
  width: 322px;
  height: 65px;
  border: none;
  color: #fff;
  background: #ff7f7f;
  margin-bottom: 59px;
  transition: all 0.23s;
  backface-visibility: hidden;

  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
    box-shadow: -2px 2px 9px -2px #000;
  }

  @media only screen and (max-width: 320px) {
    width: 161px;
    height: 32.5px;
    border-radius: 16.25px;
    margin: 0 auto 29.5px auto;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 193.2px;
    height: 39px;
    border-radius: 19.5px;
    margin: 0 auto 35.4px auto;
  }
`;

const VectorSmart1 = styled.img `
  position: absolute;
  bottom: 89px;
  left: 654px;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart2 = styled.img `
  position: absolute;
  right: 490px;
  top: -74px;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart5 = styled.img `
  position: absolute;
  right: 36px;
  top: 93px;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart6 = styled.img `
  position: absolute;
  left: 120px;
  top: 41px;

  @media only screen and (max-width : 1200px) {
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
  VectorSmart1,
  VectorSmart2,
  VectorSmart5,
  VectorSmart6
};
import styled from 'styled-components';

const Wrapper = styled.div `
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
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
  padding: 179px 125px 139px 125px;
  flex-wrap: wrap;
  position: relative;

  @media only screen and (max-width: 768px){
    justify-content: center;
    padding: 30px 15px 30px 15px;
  }


`;

const Image = styled.img `
  width: 475px;
  height: 482px;

  @media only screen and (max-width: 320px) {
    width: 237.5px;
    height: 241px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 285px;
    height: 289.2px;
  }
`;

const Card = styled.div ``;

const Title = styled.p `
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

  @media only screen and (min-width: 321px) and (max-width: 768px){
    padding-top: 36px;
    padding-bottom: 20.625px;
    text-align: center;
  }
`;

const Description = styled.p `
  margin: 0;
  max-width: 576.65px;
  font-size: 3em;
  color: #ff7f7f;
  line-height: 1.2;
  word-wrap: break-word;
  padding-bottom: 62.75px;

  @media only screen and (max-width: 320px) {
    padding-bottom: 31.375px;
    text-align: center;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    padding-bottom: 37.65px;
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
  margin-bottom: 65px;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 320px) {
    width: 161px;
    height: 32.5px;
    border-radius: 16.25px;
    margin: 0 auto 32.5 auto;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px){
    width: 193.2px;
    height: 39px;
    border-radius: 19.5px;
    margin: 0 auto 39px auto;
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
  Card,
  Title,
  Description,
  Button,
  VectorSmart1,
  VectorSmart2,
  VectorSmart5,
  VectorSmart6
};
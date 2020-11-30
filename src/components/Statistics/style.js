import styled from 'styled-components';

const Wrapper = styled.section `
  background: #ff7f7f;
  line-height: 1.2;
  font-size: 10px;

  @media only screen and (max-width : 320px) {
    font-size: 5px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
		font-size: 6px;
	}
`;

const Inner = styled.div `
  max-width: 1440px;
  padding: 146.5px 135px 100px 135px;
  position: relative;
  margin: 0 auto;
  
  @media only screen and (max-width : 320px) {
    padding: 74.25px 15px 50px 15px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
    padding: 87.9px 15px 60px 15px;
	}
`;

const Title = styled.h1 `
  margin: 0;
  font-size: 5.8em;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

const Description = styled.p `
  margin: 0;
  font-size: 2.5em;
  color: #fff;
  text-align: center;
  padding-top: 32.5px;
  padding-bottom: 85px;
  max-width: 716.11px;
  margin-left: auto;
  margin-right: auto;

  @media only screen and (max-width : 320px) {
    padding-top: 16.25px;
    padding-bottom: 42.5px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
    padding-bottom: 19.5px;
    padding-bottom: 51px;

	}
`;

const Panel = styled.div `
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;


	@media only screen and (max-width : 992px) {
		justify-content: center;
	}
`;

const Card = styled.div `
  border-radius: 50%;
  border: 5px solid #fff;
  width: 274px;
  height: 275px;
  box-sizing: border-box;
  margin-bottom: 32px;
  margin-right: 65px;

  @media only screen and (max-width : 320px) {
    width: 137.5px;
    height: 137.5px;
    margin-bottom: 16px;
    margin-right: 32.5px;
    margin-left: 32.5px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
    width: 165px;
    height: 165px;
    margin-bottom: 19.2px;
    margin-right: 39px;
    margin-left: 39px;
  }
  
  @media only screen and (min-width: 768px) and (max-width : 1200px) {

    margin-bottom: 19.2px;
    margin-left: 39px;
    margin-right: 39px;
	}
`;

const Number = styled.p `
  font-size: 7.5em;
  color: #fff;
  font-weight: bold;
  margin: 0;
  text-align: center;
  padding-top: 65.75px;

  @media only screen and (max-width : 320px) {
    padding-top: 32.875px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
    padding-top: 39.45px;
	}
`;

const Name = styled.p `
  color: #fff;
  font-size: 4.2em;
  font-weight: bold;
  margin: 0;
  text-align: center;
  position: relative;
  top: -2.39px;
  text-transform: uppercase;
`;

const VectorSmart3 = styled.img `
  position: absolute;
  top: 212px;
  left: 114px;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart4 = styled.img `
  position: absolute;
  top: 108px;
  right: 135px;

  @media only screen and (max-width : 1200px) {
		display: none;
	}
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
import styled from "styled-components";

const Wrapper = styled.section `
  background-image: url('opinionBG.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-color: rgba(255, 127, 127);
  background-blend-mode: multiply;
  font-size: 10px;

  @media only screen and (max-width: 320px) {
    font-size: 5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    font-size: 6px;
  }
`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 92px; 

  @media only screen and (max-width: 320px) {
    padding: 48px 15px 0 15px;
  };

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding: 55.2px 15px 0 15px;
  };
`;

const Description = styled.p `
  font-size: 3.3em;
  color: #fff;
  text-align: center;
  max-width: 819px;
  margin: 0;

  margin-left: auto;
  margin-right: auto;
  padding-bottom: 28px;

  @media only screen and (max-width: 320px) {
    padding-top: 14px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding-top: 16.8px;
  } 
`;

const Name = styled.p `
  font-size: 4.5em;
  color: #fff;
  text-align: center;
  font-weight: bold;
  margin: 0;
  padding-bottom: 206px;

  @media only screen and (max-width: 320px) {
    padding-bottom: 103px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    padding-bottom: 123.6px;
  }
`;

const ImageBox = styled.div `
  margin-left: auto;
  margin-right: auto;
  width: 241px;
  height: 242px;
  margin-bottom: 53px;
  border-radius: 50%;
  overflow: hidden;
 

  @media only screen and (max-width: 320px) {
    width: 120.5px;
    height: 121px;
    margin-bottom: 26.5px;
  }

  @media only screen and (min-width: 321px) and (max-width: 768px) {
    width: 144.6px;
    height: 145.2px;
    margin-bottom: 31.8px;
  }
`;

const Image = styled.img `
  width: 100%;
  height: 100%;
`;

export {
  Wrapper,
  Inner,
  Image,
  Description,
  Name,
  ImageBox
};
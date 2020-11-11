import styled from "styled-components";

const Wrapper = styled.div `
  background-image: url('intro_background.png');
  background-position: center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  position: relative;
  font-size: 25px;

  @media only screen and (max-width : 320px) {
    font-size: 12.5px;
  }

  @media only screen and (min-width : 321px) and (max-width : 768px) {
    font-size: 15px;
  }
`;

const Shape = styled.div `
  background: url('shape.png') no-repeat;
  background-position: bottom;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  height: 0;
  position: absolute;
  top:0;
  left:0;
  z-index: 0;
  transition: height 1s;
  -webkit-mask-repeat: no-repeat;

  @media only screen and (max-width : 768px) {
    background: url('shape_BIG.png');
    background-position: center;
  }

  @media only screen and (min-width: 2350px) {
    background: url('shape_BIG.png') no-repeat;
    background-size: cover;
  }
`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;
  padding-top: 129px;
  pointer-events: none; 

  &:hover {
    ${Shape} {
      height: 1105px;

      @media only screen and (max-width : 768px) {
        height: 100%;
      }

      @media only screen and (min-width: 1700px) and (max-width: 2099px) {
        height: 1180px;
      }
      @media only screen and (min-width: 2100px) and (max-width:2349px) {
        height: 1225px;
      }
      @media only screen and (min-width: 2350px) {
        height: 796px;
      }
    }
  }
`;

const Jumbotron = styled.div `
  padding-top: 120.5px;
  padding-left: 96px;
  padding-bottom: 133px;
  z-index: 1;

  @media only screen and (max-width : 320px) {
    padding: 60.25px 15px 66.5px 15px;
  }

  @media only screen and (min-width:321px) and (max-width : 768px) {
    padding: 72.3px 15px 79.8px 15px;
  }
`;

const Title = styled.p `
  font-size: 3em;
  color:#fff;
  text-transform: uppercase;
  font-weight: 700;
  display: block;
  position: relative;
  margin: 0;


`;

const BodyText = styled.p `
  color: #fff;
  font-size: 1.2em;
  padding: 14.5px 0 39px 0;
  max-width: 580px;
  display: block;
  word-wrap: break-word;
  position: relative;
  margin: 0;

  @media only screen and (max-width: 1200px) {
    z-index: 0;
  }
`;

const Button = styled.button `
  text-transform: uppercase;
  font-size: 1em;
  width: 322px;
  height: 65px;
  border-radius: 32.5px;
  color: #ff7f7f;
  background: #fff;
  border: none;
  font-weight: 700;
  position: relative;
  pointer-events: auto;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width : 320px){
    width: 166px;
    height: 32.5px;
    border-radius: 16.25px;
  }

  @media only screen and (min-width: 321px) and (max-width : 768px) {
    width: 193.2px;
    height: 39px;
    border-radius: 19.5px;
  }
`;

export {
  Wrapper,
  Inner,
  Jumbotron,
  Title,
  BodyText,
  Button,
  Shape,
};


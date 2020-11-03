import styled from "styled-components";

const Shape = styled.div `
  background: url('shape.png');
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

  @media only screen and (min-width: 2700px) {
    background: url('shape_BIG.png');
  }
`;

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
  pointer-events: none; 
  &:hover {
    ${Shape} {
      height: 1105px;
      @media only screen and (min-width: 1700px) {
        height: 1180px;
      }
      @media only screen and (min-width: 2100px) {
        height: 1210px;
      }
      @media only screen and (min-width: 2300px) {
        height: 1290px;
      }
      @media only screen and (min-width: 2700px) {
        height: 796px;
      }
    }
  }
`;
const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  z-index: 5;

`;

const BackgroundHeader = styled.div `
  position: absolute;
  height: 129px;
  background-color: rgba(255, 127, 127, 0.75);
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Header = styled.div `
  height: 99px;
  color: #fff;
  display: flex;
  padding: 15px 56px;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;
`;

const Logo = styled.div `
  z-index: 1;
`;

const Image = styled.img ``;

const Nav = styled.ul `
  margin: 0;
  display: flex;
  width: 737px;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  z-index: 1;
  font-weight: 700;
`;


const NavItem = styled.li `
  list-style-type: none;
`;

const NavLink = styled.a `
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled.img `
  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const Jumbotron = styled.div `
  padding-top: 120.5px;
  padding-left: 96px;
  padding-bottom: 133px;
  z-index: 5;
`;

const Title = styled.span `
  font-size: 75px;
  color:#fff;
  text-transform: uppercase;
  font-weight: 700;
  z-index: 1;
  display: block;
  position: relative;
`;



const BodyText = styled.span `
  color: #fff;
  font-size: 30px;
  padding: 14.5px 0 39px 0;
  max-width: 590px;
  display: block;
  word-wrap: break-word;
  z-index: 1;
  position: relative;
`;


const Button = styled.button `
  text-transform: uppercase;
  font-size: 28px;
  width: 322px;
  height: 65px;
  border-radius: 32.5px;
  color: #ff7f7f;
  background: #fff;
  border: none;
  font-weight: 700;
  z-index: 1;
  position: relative;
  pointer-events: auto;

  &:hover {
    cursor: pointer;
  }
`;

export {
  Wrapper,
  Inner,
  Header,
  Logo,
  Image,
  Nav,
  NavItem,
  NavLink,
  SearchIcon,
  Jumbotron,
  Title,
  BodyText,
  Button,
  BackgroundHeader,
  Shape,
};


import styled, {
  css
} from "styled-components";

const Wrapper = styled.div `
  height: 99px;
  color: #fff;
  display: flex;
  justify-content: center;
  position absolute;
  background-color: rgba(255, 127, 127, 0.75);
  width: 100%;
  padding: 15px 0;
  z-index: 1;
  transition: background-color 1s;


  @media only screen and (max-width: 320px) {
    height: 39.6px;
  };

  @media only screen and (max-width: 768px) {
    height: 77.4px;
  };

  @media only screen and (max-width: 1200px) {
    background-color: ${props => props.isChecked && "rgba(255, 127, 127, 1)"};
  };
`;

const Inner = styled.div `
 max-width: 1440px;
 padding: 0 56px;
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 justify-content: spece-between;
 box-sizing: border-box;

 @media only screen and (max-width: 1200px) {
  padding: 0;
 };
`;

const Logo = styled.div `
  z-index: 1;

  @media only screen and (max-width: 1200px) {
    padding-left: 15px;
  };
`;

const Image = styled.img `
  width: 107px;
  height: 83px;

  @media only screen and (max-width: 320px) {
    width: 42.8px;
    height: 33.2px;
  };

  @media only screen and (max-width: 768px) {
    width: 64.2px;
    height: 49.8px;
  };
`;

const ToggleStyle = css `
  width: 100%;
  height: 5px;
  background: #fff;
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
`

const Nav = styled.ul `
  margin: 0;
  display: flex;
  width: 737px;
  display: flex;
  justify-content: space-between;
  opacity: 1;
  z-index: 1;
  font-weight: 700;
  transition: all 1s ease;

  @media only screen and (max-width: 1200px) {
    overflow: hidden;
    width: 100%;
    position: absolute;
    background: #ff7f7f;;
    top: 129px;
    z-index: 5;
    flex-direction: column;
    text-align: center;
    padding: 0;
    opacity: ${props => props.isChecked ? "1" : "0" };
    max-height: ${props => props.isChecked ? "435px" : "0"};
  }

  @media only screen and (max-width: 320px) {
    top: 69.594px;
  }
  @media only screen and (max-width: 1200px) {
    top: 107.4px;
  }
`;

const NavItem = styled.li `
  list-style-type: none;
  padding: 10px 0;
`;

const NavLink = styled.a `
  text-transform: uppercase;
  font-size: 1em;

  &:hover {
    cursor: pointer;
  }
`;

const SearchIcon = styled.img `

  @media only screen and (max-width: 1200px) {
    display: none;
  }

  z-index: 1;

  &:hover {
    cursor: pointer;
  }
`;

const ToggleOne = styled.div `
  ${ToggleStyle}
  transform: ${props => props.isChecked && "rotate(45deg) translate(5px, 5px)"}
`
const ToggleTwo = styled.div `
  ${ToggleStyle}
  opacity: ${props => props.isChecked && "0"}
`
const ToggleThree = styled.div `
  ${ToggleStyle}
    transform: ${props =>
      props.isChecked && "rotate(-45deg) translate(8px, -8px)"}
`
const Input = styled.input `
  display: none;
`

const Label = styled.label `
  display: none;
  pointer-events: auto;
  z-index: 1;
  width: 28px;
  height: 30px;
  padding-right: 15px;
 
  &:hover {
    cursor: pointer;
  }

  @media all and (max-width: 1200px) {
    display: block;
  }
`

export {
  Wrapper,
  Inner,
  Logo,
  Image,
  Label,
  ToggleOne,
  ToggleTwo,
  ToggleThree,
  Input,
  Nav,
  NavItem,
  NavLink,
  SearchIcon
}
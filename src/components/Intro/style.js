import styled from "styled-components";

const Container = styled.div `
  font-weight: 700;
  font-size: 25px;
  background-image: url('intro_background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`;

const Inner = styled.div `
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
`;

const BackgroundHeader = styled.div `
  position: absolute;
  height: 129px;
  background-color: rgba(255, 127, 127, 0.75);
  top: 0;
  width: 100%;
`;

const Header = styled.div `
  height: 99px;
  color: #fff;
  display: flex;
  padding: 15px 56px;
  justify-content: space-between;
  align-items: center;
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
`;

const NavItem = styled.li `
  list-style-type: none;
`;

const NavLink = styled.a `
  text-transform: uppercase;
`;

const SearchIcon = styled.img `
  z-index: 1;
`;

const Jumbotron = styled.div `
  padding-top: 120.5px;
  padding-left: 96px;
  padding-bottom: 133px;
`;

const Title = styled.span `
  font-size: 75px;
  color:#fff;
  text-transform: uppercase;
  font-weight: 700;

`;

const BodyText = styled.span `
  color: #fff;
  font-size: 30px;
  padding: 14.5px 0 39px 0;
  width: 590px;
  display: block;
  word-wrap: break-word;
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
`;

export {
	Container,
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
	BackgroundHeader
};

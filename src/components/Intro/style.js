import styled from "styled-components";

const Container = styled.div `
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 25px;
  background-image: url('intro_background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Header = styled.div `
  background-color: rgba(255, 127, 127, 0.75);
  height: 99px;
  color: #fff;
  display: flex;
  max-width: 1440px;
  padding: 15px 56px;
  justify-content: space-between;
  align-items: center;

`;

const Logo = styled.div `
`;

const Image = styled.img ``;

const Nav = styled.ul `
  margin: 0;
  display: flex;
  width: 737px;
  display: flex;
  justify-content: space-between;
  opacity: 1;
`;

const NavItem = styled.li `
  list-style-type: none;
`;

const NavLink = styled.a `
  text-transform: uppercase;
`;

const SearchIcon = styled.img ``;

const Jumbotron = styled.div `
  padding-top: 120.5px;
  padding-left: 96px;
  padding-bottom: 133px;
`;

const Title = styled.span `
  font-size: 75px;
  color:#fff;
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-weight: 700;

`;

const BodyText = styled.span `
  font-family: 'Montserrat';
  color: #fff;
  font-size: 30px;
  padding: 14.5px 0 39px 0;
  width: 590px;
  display: block;
`;

const Button = styled.button `
 text-transform: uppercase;
 font-size: 30px;
 width: 322px;
 height: 65px;
 border-radius: 32.5px;
 color: #ff7f7f;
 background: #fff;
 border: none;
`;

export {
	Container,
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
	Button
};

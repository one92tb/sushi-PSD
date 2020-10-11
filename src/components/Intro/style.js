import styled from "styled-components";

const Container = styled.div`
  background: #ff7f7f;
  height: 129px;
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 25px;
  color : #fff;
  display: flex;
  max-width: 1440px;
  padding: 15px 56px;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div `
`;

const Title = styled.span`
`;

const Image = styled.img``;

const Nav = styled.ul`
  margin: 0;
  display: flex;
  width: 737px;
  display: flex;
  justify-content: space-between;
`;

const NavItem = styled.li `
  list-style-type: none;
`;

const NavLink = styled.a `
  text-transform: uppercase;
`;

const SearchIcon = styled.img ``;

export {
	Container,
	Logo,
  Title,
  Image,
	Nav,
	NavItem,
	NavLink,
	SearchIcon
};

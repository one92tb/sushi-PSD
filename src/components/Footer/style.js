import styled from 'styled-components';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const Wrapper = styled.div `
  color: #fff;
  line-height: 1.2;
  background: #000;

`;

const Inner = styled.div `
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  justify-content: space-between;
  padding-top: 337.5px;
  padding-bottom: 138.5px;
  padding-left: 93.47px;
  padding-right: 87.5px;
  flex-wrap: wrap;

`;

const SocialMedia = styled.div `
`;

const Title = styled.span `
  display: block;
  font-size: 31.6px;
  padding-bottom: 30px;

`;

const Description = styled.span `
  font-size: 23.7px;
  max-width: 462.97px;
  display: block;

`;

const Card = styled.div `
  padding-bottom: 50px;
`;

const Information = styled.div `
  display: flex;
  width: 633.63px;
  justify-content: space-between;
  flex-wrap: wrap;

`;

const Panel = styled.div `
  display: flex;
  padding-top: 30px;
  padding-bottom: 50px;
`;

const IconBox = styled.div `
  width: 42px;
  height: 42px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  margin-right: 16px;
`;

const Icon = styled(FontAwesomeIcon)
`
  color: #000;
`;


const Nav = styled.ul `
    padding: 0;
    margin: 0;
    height: 184px;
`;

const NavItem = styled.li `
  list-style-type: none;
  padding-bottom: 12px;

`;

const NavLink = styled.a `
  font-size: 23.7px;
`;


export {
  Wrapper,
  Inner,
  SocialMedia,
  Title,
  Description,
  Panel,
  IconBox,
  Icon,
  Card,
  Information,
  Nav,
  NavItem,
  NavLink,
};
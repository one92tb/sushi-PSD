import styled from 'styled-components';
import {
  FontAwesomeIcon
} from '@fortawesome/react-fontawesome';

const Wrapper = styled.footer `
  color: #fff;
  line-height: 1.2;
  background: #111111;
  font-size: 10px;

  @media only screen and (max-width: 320px){
    font-size: 5px;
  }

  @media only screen and (min-width: 321px) and (max-width:768px){
    font-size: 6px;
  }
`;

const Inner = styled.div `
  display: flex;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  justify-content: space-between;
  padding: 334.5px 92px 177px 93px;
  flex-wrap: wrap;

  @media only screen and (max-width: 320px){
    padding: 167.25px 15px 88.5px 15px;
  }

  @media only screen and (min-width: 321px) and (max-width:768px){
    padding: 200.7px 15px 106.2px 15px;
  }

`;

const Article = styled.article `  
  max-width: 458px;
  margin-bottom: 30px;
  margin-right: 20px;


  @media only screen and (max-width:768px){
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.p `
  margin: 0;
  font-size: 3.2em;
  padding-bottom: 29.5px;

  @media only screen and (max-width:768px){
    text-align: center;
  }
`;

const Description = styled.p `
  font-size: 2.4em;
  width: 480px;
  margin: 0;

  @media only screen and (max-width:768px){
    width: 100%;
    text-align: center;
  }
`;

const Card = styled.div `
  margin-bottom: 30px;

  @media only screen and (max-width: 320px) {

  }

  @media only screen and (min-width: 321px) and (max-width: 768px){

  }
`;

const Information = styled.div `
  display: flex;
  width: 629px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width:768px){
    justify-content: space-around;
  }

`;

const Panel = styled.div `
  display: flex;
  padding-top: 33px;
  padding-bottom: 4px;

  @media only screen and (max-width:768px){
    justify-content: center;
  }
`;

const IconBox = styled.div `
  width: 42px;
  height: 42px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5em;
  margin-right: 16px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: #000;

  &:hover {
    color: #ff7f7f;
    cursor: pointer;
  }
`;

const Nav = styled.ul `
    padding: 0;
    margin: 0;
    height: 190px;

    @media only screen and (max-width:768px){
      text-align: center;
    }
`;

const NavItem = styled.li `
  list-style-type: none;
  padding-bottom: 11.25px;

`;

const NavLink = styled.a `
  font-size: 2.4em;

  &:hover {
    cursor: pointer;
    color: #ff7f7f;
  }
`;


export {
  Wrapper,
  Inner,
  Article,
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
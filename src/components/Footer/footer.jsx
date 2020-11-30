import React from "react";
import {
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
} from "./style.js";
import {
  faInstagram,
  faFacebookF,
  faTwitter,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <Wrapper>
    <Inner>
      <Article>
        <Title>Title Here</Title>
        <Description>
          Lorem ipsum dolor sit amet, consecte&#173;tur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignis&#173;sim elit, at dignissim enim.
        </Description>
        <Panel>
          <IconBox>
            <Icon icon={faInstagram} />
          </IconBox>
          <IconBox>
            <Icon icon={faFacebookF} />
          </IconBox>
          <IconBox>
            <Icon icon={faTwitter} />
          </IconBox>
          <IconBox>
            <Icon icon={faWhatsapp} />
          </IconBox>
        </Panel>
      </Article>
      <Information>
        <Card>
          <Title>About</Title>
          <Nav>
            <NavItem>
              <NavLink>History</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Our Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Brand Guidelines</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Terms & Condition</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Privacy Policy</NavLink>
            </NavItem>
          </Nav>
        </Card>
        <Card>
          <Title>Services</Title>
          <Nav>
            <NavItem>
              <NavLink>How to Order</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Our Product</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Order Status</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Promo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Payment</NavLink>
            </NavItem>
          </Nav>
        </Card>
        <Card>
          <Title>Other</Title>
          <Nav>
            <NavItem>
              <NavLink>Contact Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Privacy</NavLink>
            </NavItem>
          </Nav>
        </Card>
      </Information>
    </Inner>
  </Wrapper>
);

export default Footer;

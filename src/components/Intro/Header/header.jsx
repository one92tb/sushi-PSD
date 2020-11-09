import React, { useState }  from "react";
import {
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
} from "./style.js";

const Header = () => {
    const [isChecked, setChecked] = useState(false);
    console.log(isChecked);
    return (
        <Wrapper isChecked={isChecked}>
            <Inner>
                <Logo>
                    <Image src={'sushi_icon.png'} />
                </Logo>
                <Label htmlFor="toggle" onClick={() => setChecked(!isChecked)} >
                    <ToggleOne isChecked={isChecked} />
                    <ToggleTwo isChecked={isChecked} />
                    <ToggleThree isChecked={isChecked} />
                </Label>
                <Input type="checkbox" id="toggle" />
                <Nav isChecked={isChecked} >
                    <NavItem>
                        <NavLink>home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>product</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>contact</NavLink>
                    </NavItem>
                </Nav>
                <SearchIcon src={'search.png'} width={25} height={25} />
            </Inner>
        </Wrapper>
    );
}

export default Header;


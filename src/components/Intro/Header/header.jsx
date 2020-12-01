import React, { useState, useEffect } from "react";
import { faArrowUp, faSearch } from '@fortawesome/free-solid-svg-icons';
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
    SearchIcon,
    ScrollBackButton,
    ScrollBackIcon
} from "./style.js";


const Header = (props) => {
    const { refs } = props;

    const [isChecked, setChecked] = useState(false);
    const [scrollBtnAppear, setScrollBtnAppear] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            (window.scrollY !== 0) ? setScrollBtnAppear(true) : setScrollBtnAppear(false)
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollBtnAppear])

    const scrollToComponent = ref => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
        setChecked(false);
    };

    const backToIntroComponent = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

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
                        <NavLink href="#" onClick={() => scrollToComponent(refs.introRef)}>home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => scrollToComponent(refs.bestSellerRef)}>product</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => scrollToComponent(refs.deliciousRef)}>promo</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => scrollToComponent(refs.opinionRef)}>about</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"  onClick={() => scrollToComponent(refs.footerRef)}>contact</NavLink>
                    </NavItem>
                </Nav>
                <SearchIcon icon={faSearch}/>
            </Inner>
            <ScrollBackButton appear={scrollBtnAppear} onClick={backToIntroComponent}>
              <ScrollBackIcon icon={faArrowUp}  />
            </ScrollBackButton>
        </Wrapper>
    );
}

export default Header;


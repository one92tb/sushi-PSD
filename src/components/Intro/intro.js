import React from "react";
import {
	Container,
	Logo,
	Title,
	Image,
	Nav,
	NavItem,
	NavLink,
	SearchIcon
} from "./style";



class Intro extends React.Component {
	render() {
		return (
			<Container>
				<Logo>
					<Image src={'sushi_icon.png'} width={107} height={83} />
				</Logo>
				<Nav>
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
			<SearchIcon src={'search.png'} width={25} height={25}/>
		</Container>
		)
	}
}

export default Intro;

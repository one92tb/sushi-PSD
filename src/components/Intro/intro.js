import React from "react";
import {
	Wrapper,
	Inner,
	BackgroundHeader,
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
} from "./style";

const Intro = () => (
			<Wrapper>
				<BackgroundHeader />
				<Inner>
					<Header>
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
				</Header>
				<Jumbotron>
					<Title>delicious<br />  sushi</Title>
					<BodyText>
					Lorem ipsum dolor sit amet, consecte&#173;tur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
					</BodyText>
					<Button>order now</Button>
				</Jumbotron>
			</Inner>
		</Wrapper>
	);

export default Intro;

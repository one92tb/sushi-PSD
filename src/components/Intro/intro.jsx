import React from "react";
import Header from "./Header/header";
import {
	Wrapper,
	Inner,
	Jumbotron,
	Title,
	BodyText,
	Button,
	Shape,
} from "./style.js";


const Intro = React.forwardRef((props, ref) => (
	<Wrapper ref={ref}>
		<Header refs={props.refs} />
		<Inner>
			<Shape />
			<Jumbotron>
				<Title>delicious<br />  sushi</Title>
				<BodyText>
					Lorem ipsum dolor sit amet, consecte&#173;tur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
				</BodyText>
				<Button>order now</Button>
			</Jumbotron>
		</Inner>
	</Wrapper>
));

export default Intro;

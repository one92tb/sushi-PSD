import styled from "styled-components";

const Wrapper = styled.section `
	background: #ff7f7f;
	color: #fff;
	width: 100%;
	font-size: 10px;

	@media only screen and (max-width : 320px) {
		font-size: 6px;
	}

	@media only screen and (min-width: 321px) and (max-width : 768px) {
		font-size: 7px;
	}
`;

const Inner = styled.div `
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 240px;
	box-sizing: border-box;
	position: relative;

	@media only screen and (max-width : 768px) {
		padding: 0 15px;
	}
`;

const Title = styled.h1 `
	 text-align: center;
	 font-size: 5.8em;
	 font-weight: bold;
	 text-transform: uppercase;
	 padding: 186px 0 30px 0;
	 margin: 0;

	 @media only screen and (max-width : 320px) {
		padding: 93px 0 15px 0;
	}

	@media only screen and (min-width : 321px) and (max-width: 768px) {
		padding: 111.6px 0 18px 0;
	}


`;

const Description = styled.p `
	 text-align: center;
	 font-size: 2.5em;
	 padding-bottom: 50px;
	 margin: 0 auto;
	 max-width: 700px;

	 @media only screen and (max-width : 320px) {
		padding-bottom: 25px;
	}

	@media only screen and (min-width : 321px) and (max-width: 768px) {
		padding-bottom: 30px;
	}
`;

const OurOffer = styled.div `
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	@media only screen and (max-width : 992px) {
		justify-content: center;
	}
`;

const Card = styled.div `
	width: 250px;
	padding-top: 27px;
	
	@media only screen and (max-width : 320px) {
		padding-top: 13.5px;
	}

	@media only screen and (min-width : 321px) and (max-width: 768px) {
		padding-top: 16.2px;
	}
`;

const Image = styled.img `
	width: 100%;
	heigth: 100%;
`;

const ImageBox = styled.div `
	width:213px;
	height: 213px; 
	border-radius: 50%;
	overflow: hidden;
	background: yellow;
	margin-left: auto;
	margin-right: auto;

	@media only screen and (max-width: 320px) {
		width: 106.5px;
		height: 106.5px; 
	}

	@media only screen and (min-width: 321px) and (max-width: 768px) {
		width: 170.4px;
		height: 170.4px; 
	}
`;

const Name = styled.p `
	font-size: 2.8em;
	font-weight: bold;
	text-align: center;
	padding: 43.75px 0 18.5px 0;
	margin: 0;

	@media only screen and (max-width: 320px) {
		padding: 21.875px 0 9.25px 0;
	}

	@media only screen and (min-width: 321px) and (max-width: 768px) {
		padding: 21.875px 0 9.25px 0;
	}
`;

const Text = styled.p `
	font-size: 1.7em;
	text-align: center;
	padding-bottom: 22.75px;
	margin: 0;

	@media only screen and (max-width : 320px) {
		padding-bottom: 11.375px;
	}
`;

const VectorSmart1 = styled.img `
	position: absolute;
	top: 458px;
	left: 0;

	@media only screen and (max-width : 1200px) {
		display: none;
	}
`;

const VectorSmart2 = styled.img `
	position: absolute;
	top: 349px;
	right: 59px;

	@media only screen and (max-width : 1200px) {
		display: none;
	}
`;

export {
	Wrapper,
	Inner,
	Title,
	Description,
	OurOffer,
	Card,
	Image,
	ImageBox,
	Name,
	Text,
	VectorSmart1,
	VectorSmart2
};
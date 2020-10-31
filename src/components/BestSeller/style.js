import styled from "styled-components";

const Wrapper = styled.div `
	background: #ff7f7f;
	color: #fff;
	width: 100%;
`;

const Inner = styled.div `
	max-width: 1440px;
	margin-left: auto;
	margin-right: auto;
	padding: 0 240px;
	box-sizing: border-box;
	position: relative;
`;

const Title = styled.span `
	 display: block;
	 text-align: center;
	 font-size: 58px;
	 font-weight: bold;
	 text-transform: uppercase;
	 padding: 186px 0 30px 0;
`;

const Description = styled.span `
	 display: block;
	 text-align: center;
	 font-size: 25px;
	 padding-bottom: 77px;
`;

const OurOffer = styled.div `
	display: flex;
	justify-content: space-between;
	  flex-wrap: wrap;
`;

const Card = styled.div `
	width: 250px;
`;

const Image = styled.img `
	display: block;
	margin-left: auto;
	margin-right: auto;
`;

const Name = styled.span `
	display: block;
	font-size: 28px;
	font-weight: bold;
	text-align: center;
	padding: 43.75px 0 18.5px 0;
`;

const Text = styled.span `
	display: block;
	font-size: 17px;
	text-align: center;
	padding-bottom: 22.75px;
`;

const VectorSmart1 = styled.img `
	position: absolute;
	top: 458px;
	left: 0;
`;

const VectorSmart2 = styled.img `
	position: absolute;
	top: 349px;
	right: 59px;
`;

export {
	Wrapper,
	Inner,
	Title,
	Description,
	OurOffer,
	Card,
	Image,
	Name,
	Text,
	VectorSmart1,
	VectorSmart2
};
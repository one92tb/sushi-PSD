import React from "react";
import {
  Wrapper,
  Inner,
  Title,
  Description,
  Form,
  Input,
  Button,
  VectorSmart2,
  VectorSmart3,
  VectorSmart4,
  VectorSmart5,
  Shape1,
  Shape2,
  Shape3
} from "./style.js";

const Subscribe = () => (
  <Wrapper>
    <Inner>
      <Title>Subscribe</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi&#173;vamus lacinia odio vitae vestibulum vestibulum. </Description>
      <Form>
        <Input placeholder="Your Email" />
        <Button>subscribe</Button>
      </Form>
      <VectorSmart2 src='vectorSmart2.png' />
      <VectorSmart3 src='vectorSmart3.png' />
      <VectorSmart4 src='vectorSmart4.png' />
      <VectorSmart5 src='vectorSmart5.png' />
    </Inner>
    <Shape1 src="subscribeShape1.png" />
    <Shape2 src="subscribeShape2.png" />
    <Shape3 src="subscribeShape3.png" />
  </Wrapper>
);

export default Subscribe;

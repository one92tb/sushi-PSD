import React from "react";
import { StaticQuery, graphql } from "gatsby"
import {
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
} from "./style.js";

const BestSeller = React.forwardRef((props, ref) => (
  <StaticQuery
    query={graphql`
      {
        allContentfulBestSeller {
          edges {
            node {
              order
              name
              text
              image {
                id
                title
                file {
                  url
                  fileName
                  contentType
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allContentfulBestSeller;
      return (
        <Wrapper ref={ref}>
          <Inner>
            <Title>best seller</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
            </Description>
            <OurOffer>
              {edges.sort((a, b) => a.node.order - b.node.order).map(edge => (
                <Card key={edge.node.image.title}>
                  <ImageBox>
                   <Image src={edge.node.image.file.url} alt={`dish ${edge.node.order}`}/>
                  </ImageBox>
                  <Name>{edge.node.name}</Name>
                  <Text>{edge.node.text}</Text>
                </Card>
              ))}
            </OurOffer>
            <VectorSmart1 src={'vectorSmart1.png'} />
            <VectorSmart2 src={'vectorSmart2.png'} />
          </Inner>
        </Wrapper>
      );
    }}
  />
));

export default BestSeller;

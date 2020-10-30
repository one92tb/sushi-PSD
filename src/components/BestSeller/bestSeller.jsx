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
  Name,
  Text,
  VectorSmart1,
  VectorSmart2
} from "./style.js";

const BestSeller = () => (
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
        <Wrapper>
          <Inner>
            <Title>best seller</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vivamus lacinia odio vitae vestibulum vestibulum.
            </Description>
            <OurOffer>
              {edges.sort((a, b) => a.node.order - b.node.order).map(edge => (
                <Card key={edge.node.image.title}>
                  <Image src={edge.node.image.file.url} width={213} height={213} />
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
)




export default BestSeller;

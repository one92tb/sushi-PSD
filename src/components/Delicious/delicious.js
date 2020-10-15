import React from "react";
import { StaticQuery, graphql } from "gatsby"
import {
  Wrapper,
  Inner,
  Image,
  Card,
  Title,
  Description,
  Button,
  VectorSmart1,
  VectorSmart2,
  VectorSmart5,
  VectorSmart6
} from './style';

const Delicious = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulDelicious {
          title
          description
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
    `}
    render={data => {
      return (
        <Wrapper>
          <Inner>
            <Card>
              <Title>{data.contentfulDelicious.title}</Title>
              <Description>{data.contentfulDelicious.description}</Description>
              <Button>order now</Button>
            </Card>
            <Image src={data.contentfulDelicious.image.file.url} width={475} height={482} />
            <VectorSmart1 src={'vectorSmart1.png'} />
            <VectorSmart2 src={'vectorSmart2.png'} />
            <VectorSmart5 src={'vectorSmart5.png'} />
            <VectorSmart6 src={'vectorSmart6.png'} />
          </Inner>
        </Wrapper>
      );
    }}
  ></StaticQuery>
)

export default Delicious;
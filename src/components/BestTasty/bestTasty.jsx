import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Wrapper,
  Inner,
  Image,
  ImageBox,
  Article,
  Title,
  Description,
  Button,
  Shape
} from "./style.js";

const BestTasty = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulBestTasty {
          title
          description
          image {
            id
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
            <ImageBox>
              <Image src={data.contentfulBestTasty.image.file.url} />
            </ImageBox>
            <Article>
              <Title>{data.contentfulBestTasty.title}</Title>
              <Description>{data.contentfulBestTasty.description}</Description>
              <Button>order now</Button>
            </Article>
          </Inner>
          <Shape src="bestTastyShape.png"/>
        </Wrapper >
      )
    }}
  />
)

export default BestTasty;

//  <Shape src="bestTastyShape.png"/>
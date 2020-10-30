import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Wrapper,
  Inner,
  Image,
  Description,
  Name,
  ImageBox
} from "./style.js"

const Opinion = () => (
  <StaticQuery
    query={graphql`
      {
        contentfulOpinion {
          name
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
            <ImageBox>
              <Image src={data.contentfulOpinion.image.file.url} />
            </ImageBox>
            <Description>{data.contentfulOpinion.description}</Description>
            <Name>{data.contentfulOpinion.name}</Name>
          </Inner>
        </Wrapper>
      );
    }}
  />
);

export default Opinion;

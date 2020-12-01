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

const Opinion = React.forwardRef((props, ref) => (
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
        <Wrapper ref={ref}>
          <Inner>
            <ImageBox>
              <Image src={data.contentfulOpinion.image.file.url} alt="customer" />
            </ImageBox>
            <Description>{data.contentfulOpinion.description}</Description>
            <Name>{data.contentfulOpinion.name}</Name>
          </Inner>
        </Wrapper>
      );
    }}
  />
));

export default Opinion;

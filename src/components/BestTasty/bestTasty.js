import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Wrapper,
  Inner,
  Image,
  Card,
  Title,
  Description,
  Button
} from "./style";

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
      console.log(data);
        //<Image src={...}/>
      return (
        <Wrapper>
          <Inner>
            <Image src={data.contentfulBestTasty.image.file.url} width={475} height={482}/>
            <Card>
              <Title>{data.contentfulBestTasty.title}</Title>
              <Description>{data.contentfulBestTasty.description}</Description>
              <Button>order now</Button>
            </Card>
          </Inner>
        </Wrapper>
      )
    }}
  />
)

export default BestTasty;

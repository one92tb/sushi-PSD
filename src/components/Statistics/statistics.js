import React from "react";
import { StaticQuery, graphql } from "gatsby";
import {
  Wrapper,
  Inner,
  Title,
  Description,
  Panel,
  Card,
  Number,
  Name,
  VectorSmart3,
  VectorSmart4
} from './style';

const Statistics = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulStats {
          edges {
            node {
              order
              name
              value
            }
          }
        }
      }
    `}
    render={data => {
      const { edges } = data.allContentfulStats;
      return (
        <Wrapper>
          <Inner>
            <Title>statistics</Title>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Vivamus lacinia odio vitae vestibulum vestibulum.
            </Description>
            <Panel>
              {edges.sort((a,b) => a.node.order - b.node.order).map(edge =>
                <Card>
                  <Number>{edge.node.value}</Number>
                  <Name>{edge.node.name}</Name>
                </Card>
              )}
            </Panel>
            <VectorSmart3 src={'vectorSmart3.png'} width={113} height={90} />
            <VectorSmart4 src={'vectorSmart4.png'} width={114} height={104} />
          </Inner>
        </Wrapper>
      );
    }}
  ></StaticQuery>
);

export default Statistics;

import React from "react";
import styled from "styled-components";
import loadable from "@loadable/component"

import Layout from "../components/Layout/layout";

const Intro = loadable(() => import("../components/Intro/intro"));
const BestSeller = loadable(() => import("../components/BestSeller/bestSeller"));
const BestTasty = loadable(() => import("../components/BestTasty/bestTasty"));
const Statistics = loadable(() => import("../components/Statistics/statistics"));
const Delicious = loadable(() => import("../components/Delicious/delicious"));
const Opinion = loadable(() => import("../components/Opinion/opinion"));
const Subscribe = loadable(() => import("../components/Subscribe/subscribe"));
const Footer = loadable(() => import("../components/Footer/footer"));

const Container = styled.div`
  width: 100%;
  margin: 0;
  background: #999;
`

class Home extends React.Component {
  render(){
    return(
      <Layout>
        <Container>
          <Intro />
          <BestSeller />
          <BestTasty />
          <Statistics />
          <Delicious />
          <Opinion />
          <Subscribe />
          <Footer />
        </Container>
      </Layout>
    );
  }
}

export default Home;

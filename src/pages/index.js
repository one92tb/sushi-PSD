import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout/layout";
import Intro from "../components/Intro/intro";
import BestSeller from "../components/BestSeller/BestSeller";
import BestTasty from "../components/BestTasty/bestTasty";

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
        </Container>
      </Layout>
    );
  }
}

export default Home;

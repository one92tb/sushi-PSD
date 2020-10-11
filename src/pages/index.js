import React from "react";
import styled from "styled-components";

import Layout from "../components/Layout/layout";
import Intro from "../components/Intro/intro";




const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0;
  background: #999;
  width: 100%;

`


class Home extends React.Component {
  render(){
    return(
      <Layout>
        <Container>
          <Intro />
        </Container>
      </Layout>
    );
  }
}

export default Home;

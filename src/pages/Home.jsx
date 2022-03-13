import React from 'react'
import Veggi from "../components/Veggi";
import Popular from "../components/Popular";
import styled from 'styled-components';


function Home() {
  return (
    <Wrapper>
        <Veggi />
        <Popular />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 0% 10%;
`;

export default Home
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
  margin: 5% 10%;
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  position: relative;
  width: 80%;
  padding: 2rem;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`;

export default Home
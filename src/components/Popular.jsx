import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardSection from './CardSection';

function Popular() {

  const [popularRcp, setpopularRcp] = useState([])

  const url = 'https://api.spoonacular.com/recipes/random';

  useEffect(() => {
    getPopular();
  },[])

  const getPopular  = async () =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
    const data = await api.json();

    setpopularRcp(data.recipes)
    console.log(data);
  }
  return (
    <div>   
        <Wrapper>
          <h3>Popular Recipes</h3>
          <CardWrapper>
            <CardSection recipesList={popularRcp} />
          </CardWrapper>
        </Wrapper> 
    </div>
  )
}

const Wrapper = styled.div `
  margin: 2rem 0rem;
`
const CardWrapper = styled.div`
  background: #fff;
  border-radius: 20px;
  display: inline-block;
  position: relative;
  width:100%;
  padding: 1rem;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  margine-right:200px;
  z-index: 10px;
`;

export default Popular
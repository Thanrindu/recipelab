import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardSection from './CardSection';


function Veggi() {

  const [popularRcp, setpopularRcp] = useState([])

  const url = 'https://api.spoonacular.com/recipes/random';

  useEffect(() => {
    getPopular();
  },[])

  const getPopular  = async () =>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
    const data = await api.json();

    setpopularRcp(data.recipes)
    console.log(data);
  }

  return (
    <div>   
        <Wrapper>
          <h3>Vegetarian Recipes</h3>
          <CardSection recipesList={popularRcp} />
        </Wrapper> 
    </div>
  )
}

const Wrapper = styled.div `
  margin: 2rem 0rem;
`

export default Veggi
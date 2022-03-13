import React from 'react'
import styled from 'styled-components'
import {Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

function CardSection(props) {
  return (
    <div>       
          <Splide
            options={{
              perPage:4,
              arrows:false,
              pagination:false,
              drag:'free',
              gap: '2rem'
            }}
          >
            {props.recipesList.map((recipe) =>{
              return(
                <SplideSlide>
                  <Card>
                    <p key={recipe.id}>{recipe.title}</p>
                    <img src={recipe.image} alt={recipe.title}/>
                    <Gradient /> 
                  </Card>
                </SplideSlide>
              )
            })}
          </Splide>
    </div>
  )
}

const Card = styled.div`
  min-height: 25rem;
  boarder-redius:2rem;
  overflow:hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left:0;
    width:100%;
    height:80%;
    object-fit:cover;
  }
  p{
    position:absolute;
    z-index: 10;
    left: 50%;
    bottom: 10%;
    transform:translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index:3;
  position: absolute;
  width: 100%;
  height: 80%;
  background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5));
  border-radius: 2rem;
`;

export default CardSection
import React from 'react'
import styled from 'styled-components'
import Category from './Category';
import Search from './Search';

function HeroHeader() {
  return (
     <>
    <HeaderWrapper>
        <div class="hero">
            <header class="container row">
                <a href="#" class="logo">
                    <img src={process.env.PUBLIC_URL + 'images/logo192.png'} alt="" />
                </a>
                <nav class="navigation row">
                    
                    <ul class="primary-list row">
                        <Category />
                    </ul>
                    <ul class="secondary-list row">
                        
                    </ul>
                </nav>               
            </header>
            <section class="container hero row">
                <div class="content">
                    <h1>Eat</h1>
                    <h1>Sleep</h1>
                    <h1>Repeate</h1>
                    <p>Food === life, dont forget to eat</p>
                </div>
                <div class="img">
                    <img  src={process.env.PUBLIC_URL + '/images/burger.png'} />
                    <span></span>
                </div>
            </section>
        </div>
        <div>
            <img  src={process.env.PUBLIC_URL + '/images/wave1.png'} class="waveimg"/>
        </div>
    </HeaderWrapper>
     </> 
  )
}

const HeaderWrapper = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;900&display=swap');

*,
*::before,
*::after {
    box-sizing: border-box;
}

position: relative;
font-family: 'Poppins', sans-serif;
background-image: linear-gradient(to right top, #f0f0f0, #f4f4f4, #f7f7f7, #fbfbfb, #ffffff);
background-repeat: no-repeat;
background-size: cover;
background-position: center;
min-height: 30vh;

body::after {
    position: absolute;
    right: 0;
    bottom: 0;
    content: "";
    background-image: url(./bgBtn.png);
    background-position: bottom;
    background-repeat: no-repeat;
    min-width: 300px;
    height: 100%;
}

img {
    max-width: 100%;
}

.waveimg{
    position:relative;
    marign-top: 50px;
    overflow: visible;
    height:100%;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
    padding: 0;
}

:is(h1, p) {
    margin: 0;
    color:black;
}

.container {
    max-width: 90%;
    margin: 0 auto;
}

.row {
    display: flex;
}

/* Navigation */
header {
    justify-content: space-between;
    align-items: center;
    padding: 1.5em;
}

header ul {
    gap: 2em;
}

header a {
    position: relative;
    font-weight: 500;
    font-size: 24px;
    color: #fff;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -ms-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
}

.navigation {
    flex-grow: 1;
    align-items: center;
}

.primary-list {
    margin: 0 auto;
}

.primary-list a::before {
    position: absolute;
    top: -30px;
    content: "";
    width: 100%;
    height: 100%;
    background-image: url(./dot.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: auto;
    transform: scale(1, 0) rotate(360deg);
    -webkit-transform: scale(1, 0) rotate(360deg);
    -moz-transform: scale(1, 0) rotate(360deg);
    -ms-transform: scale(1, 0) rotate(360deg);
    -o-transform: scale(1, 0) rotate(360deg);
    transition: transform 0.3s ease-in-out;
    -webkit-transition: transform 0.3s ease-in-out;
    -moz-transition: transform 0.3s ease-in-out;
    -ms-transition: transform 0.3s ease-in-out;
    -o-transition: transform 0.3s ease-in-out;
}

nav a:hover::before {
    transform: scale(1, 1) rotate(0);
    -webkit-transform: scale(1, 1) rotate(0);
    -moz-transform: scale(1, 1) rotate(0);
    -ms-transform: scale(1, 1) rotate(0);
    -o-transform: scale(1, 1) rotate(0);
}

.secondary-list {
    margin-left: 0;
}

.secondary-list a {
    font-weight: 600;
    font-size: 18px;
}

.secondary-list li {
    background-color: #081ea9;
    padding: 0.3em 2em;
    border-radius: 30px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    -ms-border-radius: 30px;
    -o-border-radius: 30px;
}

.secondary-list li:nth-of-type(2) {
    background-color: #ffc041;
    padding: 0.3em 1em;
}


.secondary-list li:nth-of-type(2) a {
    color: #000;
}

/* End Navigation */

/* Hero */
.hero {
    align-items: center;
}

.hero>* {
    flex-basis: 100%;
}

.content {
    max-width: 600px;
    z-index: 1;
}

.content h1 {
    font-weight: 900;
    font-size: clamp(40px, 6vw, 100px);
    color: #000;
    text-transform: uppercase;
    line-height: 1;
}

.content p, .content a {
    font-weight: 500;
    font-size: 24px;
    color: #000;
    padding-top: 2em;
}

.content a {
    align-items: center;
    gap: 1em;
}

.content i {
    font-size: 2em;
    transition: 0.3s ease-in-out;
    -webkit-transition: 0.3s ease-in-out;
    -moz-transition: 0.3s ease-in-out;
    -ms-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
}

.content a:hover i {
    color: #081ea9;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
}

.img {
    position: relative;
}

.img span {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
    width: 75%;
    height: 35px;
    background-color: rgba(0, 0, 0, 0.6);
    filter: blur(5px);
    -webkit-filter: blur(5px);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
} 
/* End Hero */

/* Media */
@media screen and (max-width:1000px) {
    .toggleMenu {
        position: absolute;
        right: 50px;
        background-image: url(./open.svg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: 30px;
        width: 30px;
        height: 30px;
        padding: 2em;
        z-index: 1000;
    }

    .toggleMenu.active {
        position: fixed;
        background-image: url(./close.svg);
        background-size: 25px;
    }

    .navigation {
        justify-content: center;
        flex-direction: column;
        transform: scale(1, 0);
        -webkit-transform: scale(1, 0);
        -moz-transform: scale(1, 0);
        -ms-transform: scale(1, 0);
        -o-transform: scale(1, 0);
        transform-origin: top;
        max-height: 0;
        opacity: 0;
    }

    .navigation.active {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        transform: scale(1, 1);
        -webkit-transform: scale(1, 1);
        -moz-transform: scale(1, 1);
        -ms-transform: scale(1, 1);
        -o-transform: scale(1, 1);
        max-height: 100%;
        opacity: 1;
        background-color: #ffc041;
        z-index: 999;
    }

    .navigation ul {
        flex-direction: column;
        text-align: center;
    }

    .secondary-list {
        margin-top: 2em;
    }

    .hero {
        flex-wrap: wrap-reverse;
        gap: 2em;
        padding: 2em 0;
    }
}
`;

export default HeroHeader
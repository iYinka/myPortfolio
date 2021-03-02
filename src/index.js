import React, { Component } from "react"
import ReactDOM from "react-dom"
import AnimatedNavbar from "./AnimatedNavbar"
import DemoControls from "./DemoControls"
import styled from "styled-components"
import "./index.css"
import "normalize.css";
import image from './images/vic.jpg'

const AppContainer = styled.div`
  background: linear-gradient(150deg, #1b6ca8 15%, black);
  display: flex;
  flex-direction: column;
  min-height: -10vh;
  

  > div:first-of-type {
    flex: 1 0 70vh;
  }

  .greeting {
    position: absolute;
    top: 90px;
    font-size: 20px;
    margin-left: 500px;
  }

  .image {
    border-radius: 50%;
    margin-left: 4px;
    margin-top: -500px;
    height: 400px;
    width: 400px;
    box-shadow: 0px 0px 150px 5px #000000;
  }

  .name {
    position: absolute;
    top: 194px;
    color: white;
    wor-wrap: break-word;
    width: 700px;
    height: 180px;
    font-size: 30px;
    font-family: sans-serif;
    margin-left: 40%;
  }
  
  .name:after {
  
    animation: shine 5s ease-in-out  infinite;
    animation-fill-mode: forwards;  
    content: "";
    position: absolute;
    top: -110%;
    left: -200%;
    width: 135%;
    height: 200%;
    opacity: 0;
    transform: rotate(30deg);
  
    background: rgba(255, 255, 255, 0.13);
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0.13) 0%,
      rgba(255, 255, 255, 0.13) 77%,
      rgba(255, 255, 255, 0.10) 92%,
      rgba(255, 255, 255, 0.0) 100%
    );
}

/* Hover state - trigger effect */


/* Active state */

.name:active:after {
  opacity: 0;
}

@keyframes shine{
  10% {
    opacity: 1;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
    transition-duration: 0.7s, 0.7s, 0.15s;
    transition-timing-function: ease;
  }
  100% {
    opacity: 0;
    top: -30%;
    left: -30%;
    transition-property: left, top, opacity;
  }
}



  .line {
    border-left: 3px solid black;
    height: 200px;
    position: absolute;
    right: 345px;
    top: 400px;
    border-radius: 10px;
  }

  .lagos {
    position: absolute;
    top: 400px;
    word-wrap: break-word;
    width: 250px;
    right: 350px;
    fade-in: 50px;
    font-weight: bold;
    
  animation: fadeIn ease-in-out 5s infinite;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 0s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;

@keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:;
  }
}
  }

  .about {
    position: relative;
    top: -45px;
    word-wrap: break-word;
    width: 250px;
    left: 950px;
  animation: fadeIn ease 10s;
  -webkit-animation: fadeIn ease 10s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 10s;
  -ms-animation: fadeIn ease 10s;

@keyframes fadeIn{
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:;
  }
}}

@media (max-width: 600px) {
  .name {
    position: absolute;
    top: 150px;
    display: flex;
    word-wrap: break-word;
    width: 9px;
    font-size: 15px;
    margin-left: 230px;
  }
  .greeting {
    display: none;
  }

  .image {
    margin-left: 15px;
    margin-bottom: 250px;
    height: 200px;
    width: 200px;
    box-shadow: 0px 0px 150px 5px #000000;
  }
   .about {
    position: relative;
    top: -5px;
    word-wrap: break-word;
    width: 250px;
    left: 70px;
}
  .line {
    display: none;
  }
  .lagos {
    position: absolute;
    top: 400px;
    word-wrap: break-word;
    width: 250px;
    left: 50px;
}

@keyframes shine{
  display: none;
}
`

class App extends Component {
  state = { duration: 300 }

  onChange = data => {
    this.setState(data)
  }

  render() {
    return (
      <AppContainer>
        <AnimatedNavbar duration={this.state.duration} />
        <div className='greeting'>
          <p><h1>Hi.... 😃👋🏾</h1></p>
          <p style={{marginTop: '45px'}}>I am</p>
        </div>
        <div>
          <img src={image} alt='' className='image'/>
        </div>
        <div>
          <p className='name'>
            <strong><h1>Olayinka Victor Owolabi</h1></strong>
          </p>
          <div style={{}}>
            <p className='lagos'>
              Fondly called <em>Yinka</em>, I reside in Lagos, Nigeria where the level of technology is rapidly on the increase.</p>
            <div className='line'></div>
            <p className='about'>I love to design as <em>Life</em> itself is a design. I exhaust most of my time building cool Web applications with various functionalities.
            And whenever I need to take time off, I see movies, listen to music or take a walk.</p>
          </div>
          </div>
        <DemoControls
          duration={this.state.duration}
          onChange={this.onChange}
        />
      </AppContainer>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"))

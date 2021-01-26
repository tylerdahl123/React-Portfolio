import React from "react";
import { Carousel } from "react-bootstrap";
import  troyQuiz  from "../assets/troyQuiz.png";
import searchRescue from "../assets/newSearch.png";
import academy from "../assets/academy.png"
import {Container} from "../components/layout/layout"


function portfolio(){

    return (
        <div style={{background: "#3333"}} >
        {/* <Container > */}
    <Carousel>
    <Carousel.Item> 
        <a href="https://github.com/tylerdahl123/javascript-quiz-game">
      <img
        className="img-fluid"
        src={troyQuiz}
        alt="Click for the Repo!"
      /></a>
      <Carousel.Caption style={{ color: "black" }}>
        <h3>JAVASCRIPT QUIZ APP!</h3>
        <p>use local storage to store and save high scores!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <a href="https://github.com/candygarcia014/search-and-rescue">
      <img
        className="img-fluid"
        src={searchRescue}
        alt="Click for the Repo!"
      />
  </a>
      <Carousel.Caption style={{ color: "black" }}>
        <h3>SEARCH AND RESCUE!</h3>
        <p>let us help you search and resuce that perfect fuzzy friend</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://github.com/wlawsonkelly/project-2">
      <img
        className="img-fluid"
        src={academy}
        alt="Click for the Repo!"
      />
  </a>
      <Carousel.Caption  style={{ color: "black" }} >
        <h3>WILSONS ACADEMY</h3>
        <p>ALL IN ONE CODING KNOWLEDGE REPOSITORY</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  <p>Click the images to be redirected to the GITHUB Repository!</p>
  
  {/* </Container> */}
  </div>
  )
}


export default portfolio; 
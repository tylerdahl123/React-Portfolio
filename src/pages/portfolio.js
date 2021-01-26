import React from "react";
import { Carousel } from "react-bootstrap";
import  troyQuiz  from "../assets/troyQuiz.png";
import searchRescue from "../assets/newSearch.png";
import academy from "../assets/academy.png";
import workout from "../assets/workoutTracker.png";
import googlebook from "../assets/googlebook.png";
import notetaker from "../assets/noteTaker.png";
import {Container} from "../components/layout/layout"


function portfolio(){

    return (
        <div style={{background: "#F6E8EA"}} >
        {/* <Container > */}<p style={{textAlign: "center"}}>Click the images to be redirected to the GITHUB Repository!</p>
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
    <Carousel.Item>
    <a href="https://github.com/tylerdahl123/FITNESS-TRACKER">
      <img
        className="img-fluid"
        src={workout}
        alt="Click for the Repo!"
      />
  </a>
      <Carousel.Caption  style={{ color: "black" }} >
        <h3>Workout Tracker</h3>
        <p>Keep Track of Your workouts!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://github.com/tylerdahl123/googlebook">
      <img
        className="img-fluid"
        src={googlebook}
        alt="Click for the Repo!"
      />
  </a>
      <Carousel.Caption  style={{ color: "Black" }} >
        <h3>Google Book Finder!</h3>
        <p>Keep Track of your Reading list!</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href="https://github.com/tylerdahl123/NOTE-TAKER-HW">
      <img
        className="img-fluid"
        src={notetaker}
        alt="Click for the Repo!"
      />
  </a>
      <Carousel.Caption  style={{ color: "black", cursor: "pointer"}} >
        <h3>Note Taker!</h3>
        <p>Keep notes all in one place!</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
  
  {/* </Container> */}
  </div>
  )
}


export default portfolio; 
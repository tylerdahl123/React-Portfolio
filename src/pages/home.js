import React from "react";
import { Container, Row, Col} from "../components/layout/layout";
// import thisImage from "src/assets/IMG_E0409 (2).JPG"
import me from "../assets/me.png"
function Home(){
return (

<div style={{background: "#3333"}}>
{/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
  <h1>Pupster</h1>
  <h2>They're the Good Boys and Girls</h2>
</Hero> */}
<Container>
  <Row>
    <Col size="md-12">
      <h1>About Me!</h1>
    </Col>
    <img src={me} fluid/>
  </Row>
  <Row>
    <Col size="md-12">
      <p>
      Hello all! My name is Tyler Dahlgren. I am a 25 year old full-stack developer currently enrolled in the UCLA coding Bootcamp. Check out my Repos!
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta odit mollitia dolorum hic? Recusandae quam qui debitis quaerat quae consequatur nostrum architecto laboriosam pariatur nobis omnis sunt, explicabo dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat laborum quia quisquam provident totam fuga doloremque consectetur doloribus, omnis temporibus qui magnam accusamus maiores, voluptates pariatur. Voluptates, voluptatum velit! Delectus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi atque sunt pariatur velit impedit, in modi dolorum alias? Repudiandae alias ut illo mollitia! Maiores praesentium obcaecati fugit rerum. Lorem ipsum dolor sit amet consectetur, adipisicing. If you would like to see my previous projects or see what i am currently working on feel free to checkout my <a class="aboutlink" href="https://github.com/tylerdahl123">GITHUB!</a> or download my <a class="aboutlink" href="resources\Resume.pdf" download>RESUME</a></p>
                    <p>IF you wish to contact me feel free to reach out at any of the following.</p>
                    <ul>
                      <p>EMAIL: dahlgren15@gmail.com</p>
                     <p>PHONE: (818)-836-1992</p>
                    </ul>
                    
                    {/* <img src="../assets/IMG_E0409(2).jpg" class="img-fluid" alt="ME!"/> */}
    </Col>
  </Row>
</Container>
</div>
)
}


    

export default Home;

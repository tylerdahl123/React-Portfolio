import React from "react";
import { Container, Row, Col} from "../components/layout/layout";
// import thisImage from "src/assets/IMG_E0409 (2).JPG"

function Home(){
return (

<div>
{/* <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
  <h1>Pupster</h1>
  <h2>They're the Good Boys and Girls</h2>
</Hero> */}
<Container style={{ marginTop: 30 }}>
  <Row>
    <Col size="md-12">
      <h1>About Me!</h1>
    </Col>
  </Row>
  <Row>
    <Col size="md-12">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
        consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
        sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
        gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
        turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
        tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
        quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
        volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
        mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
        tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
      </p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dicta odit mollitia dolorum hic? Recusandae quam qui debitis quaerat quae consequatur nostrum architecto laboriosam pariatur nobis omnis sunt, explicabo dolore. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat laborum quia quisquam provident totam fuga doloremque consectetur doloribus, omnis temporibus qui magnam accusamus maiores, voluptates pariatur. Voluptates, voluptatum velit! Delectus?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti animi atque sunt pariatur velit impedit, in modi dolorum alias? Repudiandae alias ut illo mollitia! Maiores praesentium obcaecati fugit rerum. Lorem ipsum dolor sit amet consectetur, adipisicing. If you would like to see my previous projects or see what i am currently working on feel free to checkout my <a class="aboutlink" href="https://github.com/tylerdahl123">GITHUB!</a> or download my <a class="aboutlink" href="resources\Resume.pdf" download>RESUME</a></p>
                    <p>IF you wish to contact me feel free to reach out at any of the following.</p>
                    {/* <img src="../assets/IMG_E0409(2).jpg" class="img-fluid" alt="ME!"/> */}
    </Col>
  </Row>
</Container>
</div>
)
}


    

export default Home;

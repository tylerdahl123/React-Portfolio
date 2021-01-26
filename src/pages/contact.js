import React from "react";
import { Container, Row, Col} from "../components/layout/layout";
import { Form, Button } from "react-bootstrap"
// import thisImage from "src/assets/IMG_E0409 (2).JPG"

function Contact(){
return (
<div style={{backgroundColor: "#312F2F"}}>
    
    <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label style={{color: "white"}}>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text style={{color: "white"}}>
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group controlId="formBasicPassword">
      <Form.Label style={{color:"white"}}>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    
    
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form> 

</div>
) 
}
export default Contact;

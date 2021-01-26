import React from "react";
import {Navbar, NavDropdown, FormControl, Button, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav(){
    return(
        

<header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="https://github.com/tylerdahl123">Tyler Dahlgren</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedConten" aria-controls="navbarSupportedConten" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedConten">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="contact.html">Contact Me<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home/About</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
          </form>
        </div>
      </nav>
</header>

)
}

export default Nav;
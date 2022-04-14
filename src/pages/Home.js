import React from "react";
import ReactDOM from "react-dom";
import Image from "react-bootstrap/Image";
import svg1 from "../img/back.svg";
import svg2 from "../img/back2.svg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import draw from "../img/draw.svg";
import {
  Navbar,
  Container,
  Nav,
  Card,
  Form,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

const Home = () => {
  const navBar = () => (
    <div className="position-relative vh-100">
      <img src={svg1} alt={"logo"} style={{ zIndex: -1 }} />
      <img
        src={svg2}
        alt={"logo"}
        style={{ zIndex: -2 }}
        className="position-absolute bottom-0 end-0"
      />
      <Navbar
        collapseOnSelect
        expand="sm"
        className="fixed-top my-3"
        style={{ fontFamily: "Roboto,sans-serif", zIndex: 2 }}
        scrolling
      >
        <Container>
          <Navbar.Brand href="#home">
            <h3>IRekommend</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#features" className="fs-6 text-dark mx-3">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 text-dark mx-3">
                About
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 text-dark mx-3">
                Blog
              </Nav.Link>
              <Nav.Link href="#pricing" className="fs-6 text-dark mx-3">
                Learn
              </Nav.Link>
            </Nav>
            <Nav>
              <Button variant="contained">Contained</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-column justify-content-center align-items-center text-center mx-5 my-0 py-0">
        <p className="fs-1 fw-bold"> Get Hired Faster </p>

        <p className="fs-2">
          {" "}
          With <span className="text-primary">Insider Access</span> to Hiring
          Manager
        </p>

        <Card style={{ width: "600px" }}>
          <Card.Body>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="mx-3 my-3"
            />
            <Button variant="contained" className="mx-3 my-3 ">
              Search
            </Button>
          </Card.Body>
        </Card>
      </div>

    </div>
  );
  const sec2 = () => (
    <div className="position-relative ">
      <div className="d-flex flex-row justify-content-center align-items-center"> 
        <div className="mx-auto my-auto text-center">
            <p className="fs-3 fw-bold">
            Let Us Work For You
            </p>
            <p className="fs-5">
            Take back your precious time with IRekommend <br/> by saving an average of 18 minutes <br/>per job application and doing<br/> what you want instead.
            </p>
        </div>

        <div className="mx-auto my-auto">
        <img src={draw} alt={"logo"} style={{ zIndex: -1, height: "500px" }} className=" my-5 py-5" />
        </div>

      </div>
    </div>
  );
  const sec3 = () => (
    <div className="position-relative skewx">

    </div>
  )



  return <div className="home">{navBar()} {sec2()} {sec3()}</div>;
};

export default Home;

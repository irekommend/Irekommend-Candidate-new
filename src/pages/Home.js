import React, { useState, useRef, useEffect } from "react";
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
import { red, blue, green, orange } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PaidIcon from "@mui/icons-material/Paid";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
// import { Link, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        className="fixed-top py-3 px-4"
        style={{
          fontFamily: "Roboto,sans-serif",
          zIndex: 2,
          transition: "1s ease",
          backgroundColor: navBackground ? "white" : "transparent",
        }}
        scrolling
      >
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
      </Navbar>

      <div className="d-flex flex-column justify-content-center align-items-center text-center mx-5 py-0">
        <p style={{ fontSize: "80px", fontWeight: "900"}}> Get Hired Faster </p>

        <p style={{ fontSize: "45px", fontWeight: "700"}}>
          {" "}
          With <span className="text-primary">Insider Access</span> to Hiring
          Manager
        </p>

        <Card className="position-relative"
          style={{
            width: "fit-content",
            background: "transparent",
            boxShadow: "0 14px 26px rgba(0,0,0,0.04)",
          }}
        >
          <Card.Title className="pt-3 mb-0"> Search for Jobs </Card.Title>
          <Card.Body>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              className="mx-3 my-3"
              style={{ width: "max-content" }}
            />
            <Button
              variant="contained"
              className="mx-3 my-3"
              style={{ fontSize: "1rem", padding: "13px 23px" }}
            >
              Search
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  const cardx = () => (
    <div className="position-relative sec2 ">
      <div className="d-flex justify-content-evenly align-items-stretch flex-wrap mx-5 py-3">
        <Card style={{ width: "15rem" }} className="mx-3 my-3 card-c">
          <Card.Body>
            <div
              className="d-flex justify-content-center icon mb-3"
              style={{ borderColor: orange[400] }}
            >
              <HandshakeIcon
                className="align-self-center"
                style={{ color: orange[400] }}
              />
            </div>
            <Card.Title>We are your Concierge</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Your Candidate Agent will make direct introduction to hiring
              managers.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="mx-3 my-3 card-c">
          <Card.Body>
            <div
              className="d-flex justify-content-center icon mb-3"
              style={{ borderColor: green[400] }}
            >
              <WorkHistoryIcon
                className="align-self-center"
                style={{ color: green[400] }}
              />
            </div>
            <Card.Title>Curated Job Openings</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              We curate jobs across various boards and 100s of companies and our
              AI shortlists jobs based on your profile and sends to your inbox.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="mx-3 my-3 card-c">
          <Card.Body>
            <div
              className="d-flex justify-content-center icon mb-3"
              style={{ borderColor: blue[400] }}
            >
              <PaidIcon
                className="align-self-center"
                style={{ color: blue[400] }}
              />
            </div>
            <Card.Title>Maximize your Earning</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Job Search is lonely. We represent candidate and believe in
              maximizing candidate earning potential and we do it for free.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }} className="mx-3 my-3 card-c">
          <Card.Body>
            <div
              className="d-flex justify-content-center icon mb-3"
              style={{ borderColor: red[400] }}
            >
              <CastForEducationIcon
                className="align-self-center"
                style={{ color: red[400] }}
              />
            </div>
            <Card.Title>Ace your Interviews</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              Mock interviews, interview preparation, compensation - we do it
              all for you!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  const sec2 = () => (
    <div className="position-relative ">
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap mt-5">
        <div className="mx-auto my-auto text-center">
          <p className="fs-3 fw-bold">Let Us Work For You</p>
          <p className="fs-5">
            Take back your precious time with IRekommend <br /> by saving an
            average of 18 minutes <br />
            per job application and doing
            <br /> what you want instead.
          </p>
        </div>

        <div className="mx-auto my-auto px-5">
          <img
            src={draw}
            alt={"logo"}
            style={{ zIndex: -1, width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
          />
        </div>
      </div>
    </div>
  );

  const sec3 = () => (
    <div className="position-relative skewx">
      <div class="bubbles">
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
        <div class="bubble"></div>
      </div>
    </div>
  );

  return (
    <div className="home">
      {navBar()} {cardx()} {sec2()} {sec3()}
    </div>
  );
};

export default Home;

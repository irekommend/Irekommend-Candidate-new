import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "react-bootstrap/Image";
import svg1 from "../img/back.svg";
import svg2 from "../img/back2.svg";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import draw from "../img/draw.svg";
import draw1 from "../img/draw1.svg";
import Typography from "@mui/material/Typography";
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
import { styled, createTheme } from "@mui/material/styles";
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

  const hasWindow = typeof window !== "undefined";

  const [winDim, detectHW] = useState({
    winWidth: hasWindow ? window.innerWidth : null,
    winHeight: hasWindow ? window.innerHeight : null,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [winDim]);
  console.log(winDim);

  const navBar = () => (
    <div className="position-relative vh-100 ">
      <img
        src={svg1}
        alt={"logo"}
        style={{ zIndex: -1 }}
        className="position-absolute top-0 start-0"
      />
      <img
        src={svg2}
        alt={"logo"}
        style={{ zIndex: -3 }}
        className="position-absolute bottom-0 end-0"
      />
      <Navbar
        collapseOnSelect
        expand="sm"
        className="fixed-top py-3 px-4"
        style={{
          fontFamily: "Roboto,sans-serif",
          zIndex: 10,
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

      
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-3 py-0"
        style={{ height: "100%", overflow:"auto" }}
      >
        {/* <p className="fs-1 fw-bold"> Get Hired Faster </p> */}

        <Typography variant="h2"  style={{fontWeight: 'bold'}}  >
          Get <span className="text-grad"> Hired Faster </span> 
        </Typography>

        <p className="fs-3">
          
          With <span className="text-grad fw-bold">Insider Access</span> to
          Hiring Manager
        </p>

        <div div className="d-flex flex-row flex-wrap justify-content-center ">
          <TextField
            id="outlined-basic"
            label="Search for Jobs"
            variant="outlined"
            className="mx-3 my-3"
            style={{ width: "70vw" }}
          />
          <Button
            variant="contained"
            className="mx-3 my-3"
            style={{ fontSize: "1rem", padding: "13px 23px" }}
          >
            Search
          </Button>
        </div>

        <div className="d-flex flex-row flex-wrap text-center justify-content-evenly " >
          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>
          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>

          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>

          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>

          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>

          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>

          <Button variant="outlined" className="mx-2 my-2">
            Outlined
          </Button>
        </div>
       
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
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap ">
        <div className="mx-auto my-auto text-center">
          <p className="fs-3 fw-bold mt-5">Let Us Work For You</p>
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

  const Skewd = styled("div")(({ theme }) => ({
    padding: theme.spacing(1),
    [theme.breakpoints.down("lg")]: {
      height: "1200px",
    },
    [theme.breakpoints.up("lg")]: {
      height: "600px",
    },
  }));
  const theme2 = createTheme({
    breakpoints: {
      values: {
        break: 1048,
      },
    },
  });
  const Flexed = styled("div")(({ theme2 }) => ({
    padding: theme2.spacing(1),
    [theme2.breakpoints.down("break")]: {
      flexDirection: "row-reverse",
    },
    [theme2.breakpoints.up("break")]: {
      flexDirection: "row",
    },
  }));

  const sec3 = () => (
    <Skewd className="position-relative skewx">
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
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap-reverse mt-5 bubbles">
        <div className="mx-auto my-auto px-5">
          <img
            src={draw1}
            alt={"logo"}
            style={{ zIndex: -1, width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
          />
        </div>

        <div className="mx-auto my-auto text-center">
          <Card style={{ width: "25rem" }} className="mx-3 my-3 card-c">
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
          <Card style={{ width: "25rem" }} className="mx-3 my-3 card-c">
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
          <Card style={{ width: "25rem" }} className="mx-3 my-3 card-c">
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
        </div>
      </div>
    </Skewd>
  );

  const sec4 = () => <div style={{ height: "100vh" }}></div>;

  return (
    <div className="home">
      {navBar()} {cardx()} {sec2()} {sec3()}
    </div>
  );
};

export default Home;

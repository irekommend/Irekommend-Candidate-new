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

const Header = () => {
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

  const headd = () => (
    <div>
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
            <Button variant="contained" className="btn">Contained</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  return <div className="headd">{headd()}</div>;
};

export default Header;

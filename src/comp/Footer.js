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
import { indigo, blue, pink, orange } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import HandshakeIcon from "@mui/icons-material/Handshake";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import PaidIcon from "@mui/icons-material/Paid";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import { styled, createTheme } from "@mui/material/styles";
import "../App.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const footer = () => (
    <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-3 py-0"
        style={{ height: "100%", overflow: "auto" }}
      >
      <Typography variant="h5" style={{ color: "white" }}>
        Subscribe to our newsletter to obtain product updates
      </Typography>

      <div
        className="d-flex flex-row flex-wrap justify-content-center mt-3"
      >
        <TextField
          id="outlined-basic"
          label="Enter your E-mail"
          variant="filled"
          color="primary"
          className="mx-3 my-3 txtfld"
          style={{ width: "65vw", backgroundColor: "white" }}
        />
        <Button
          variant="contained"
          className="mx-3 my-3 btn"
          style={{ fontSize: "1rem", padding: "13px 23px" }}
        >
          Search
        </Button>
      </div>

      <div
        className="d-flex flex-row flex-wrap-reverse justify-content-center alige-items-stretch mt-3"
      >
        <Typography varient="body2" style={{ color: "white" }} className="mt-3">
          Let's get in touch on any of these platforms
        </Typography>
        <div className="d-flex flex-row mx-3 mt-3" >
          <LinkedInIcon
            className="mx-3"
            style={{ fontSize: "30px", color: blue[700] }}
          />
          <FacebookIcon
            className="mx-3"
            style={{ fontSize: "30px", color: indigo[500] }}
          />
          <TwitterIcon
            className="mx-3"
            style={{ fontSize: "30px", color: blue[500] }}
          />
          <InstagramIcon
            className="mx-3"
            style={{ fontSize: "30px", color: pink[500] }}
          />
        </div>
      </div>
         
    </div>
  );

  const bottom = () => (
    <div className="position-absolute bottom-0 start-50 translate-middle-x d-flex flex-column justify-content-center align-items-center text-center">
    <Typography variant="caption" style={{ color: "white" }}>
          iRekommend ©2022 ALL RIGHTS RESERVED
    </Typography>
        
      <div className="d-flex flex-row my-0 py-0">
        <Typography variant="caption" style={{ color: "white" }} className="mx-3">
          Terms of Service
        </Typography>
        <Typography variant="caption" style={{ color: "white" }} className="mx-3">
          Privacy Policy
        </Typography>
        <Typography variant="caption" style={{ color: "white" }} className="mx-3">
          Terms & Conditions
        </Typography>
      </div>
    </div>
  );

  return (
    <div className="footer">
      {footer()} 
    </div>
  );
};

export default Footer;

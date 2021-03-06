import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Button from "@mui/material/Button";
import { blue, indigo, pink } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import "../App.css";

const Footer = () => {
  const footer = () => (
    <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "100%" }}
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
          iRekommend ??2022 ALL RIGHTS RESERVED
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

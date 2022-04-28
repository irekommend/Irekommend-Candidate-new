import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import svg1 from "../img/connecting_teams.svg";
import svg3 from "../img/logistics.svg";

const Org = () => {
  const hero = () => (
    <div className="position-relative vh-100 about-hero ">
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-auto py-0 w-75"
        style={{ height: "100%" }}
      >
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
        iRekommend  helps you with <span className="text-grad"> efficient recruiting </span>
        </Typography>

        <Typography className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          veritatis laborum accusantium corrupti? At necessitatibus non,
          consectetur vel dolorem iste eum doloribus maxime modi sit officiis,
          recusandae tempore? Earum, velit!
        </Typography>

        <div className="d-flex flex-row align-items-center justify-content-center flex-wrap gap-4 mt-4">
          <Button variant="contained" size="large">
            Hire Developers
          </Button>

          <Button variant="outlined" size="large">
            Apply as a Developer
          </Button>
        </div>
      </div>
    </div>
  );

  const second = () => (
    <div
      className="d-flex flex-row flex-wrap align-items-center grey-bg mx-auto"
      style={{ padding: "80px 0" }}
    >
      <div className="d-flex justify-content-evenly align-items-stretch flex-wrap mx-auto py-3">
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Search the network</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Post Job</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Managed Logistics</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div
        className="d-flex flex-column justify-content-center my-4 mx-4 py-0"
        style={{ height: "100%", maxWidth: "30rem" }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: "bold", marginBottom: "20px" }}
        >
          Work with experienced developers.
        </Typography>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          veritatis laborum accusantium corrupti? At necessitatibus non,
          consectetur vel dolorem iste eum doloribus maxime modi sit officiis,
          recusandae tempore? Earum, velit!
        </Typography>

        <div className="d-flex flex-row flex-wrap gap-4 mt-4">
          <Button variant="contained" size="large">
            Hire Developers
          </Button>

          <Button variant="outlined" size="large">
            Apply as a Developer
          </Button>
        </div>
      </div>
    </div>
  );

  const questions = () => (
    <div className="d-flex flex-column justify-content-center align-items-center py-5 px-3 gap-3 text-white text-center" style={{ background: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)", }}>
      <Typography className="mb-3" variant="h4">
        Do you have any question?
      </Typography>
      <div className="d-flex flex-row gap-2">
        <Button variant="outlined" style={{ width: "fit-content", color: "#fff", borderColor: "#fff" }}>
          Call us
        </Button>
        <Button variant="outlined" style={{ width: "fit-content", color: "#fff", borderColor: "#fff" }}>
          Write to us
        </Button>
      </div>
    </div>
  );

  const custview = () => (
    <div>
      <Typography>
        Customers' view on iRekommend :
      </Typography>
    </div>
  );

  return (
    <div className="about">
      {hero()}
      {/* {second()} */}
      {questions()}
    </div>
  );
};

export default Org;

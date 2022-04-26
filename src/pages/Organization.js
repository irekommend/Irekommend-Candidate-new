import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Card } from "react-bootstrap";
import { blue, green, orange, red } from "@mui/material/colors";
import React, { useState } from "react";

// import '../comp/carousal.scss';

import svg1 from "../img/connecting_teams.svg";
import svg2 from "../img/files_sent.svg";
import svg3 from "../img/logistics.svg";
// import svg4 from "../img/circles.svg";

const Org = () => {
  const hero = () => (
    <div className="position-relative vh-100 about-hero ">
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-auto py-0 w-75"
        style={{ height: "100%" }}
      >
        <Typography variant="h3" style={{ fontWeight: "bold" }}>
          Match with experienced developers to get work done quickly.
        </Typography>

        <Typography className="mt-3">
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

  const second = () => (
    <div
      className="d-flex flex-row flex-wrap align-items-center grey-bg mx-auto"
      style={{ padding: "80px 0" }}
    >
      <div className="d-flex justify-content-evenly align-items-stretch flex-wrap mx-auto py-3">
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
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
        className="d-flex flex-column justify-content-center text-left my-4 mx-auto py-0"
        style={{ height: "100%", width: "30rem" }}
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

  const third = () => (
    <div className="d-flex flex-row flex-wrap align-items-center">
        <div className="mx-auto my-auto px-5">
          <img
            src={svg3}
            alt={"vision"}
            style={{ width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
            data-aos="zoom-in"
            data-aos-once="true"
          />
        </div>
      <div className="d-flex flex-column mx-auto" style={{width: "40rem"}}>
        <Typography
          className="flex-grow-1 my-4"
          variant="h3"
          style={{ fontWeight: "bold" }}
        >
          See right away whether candidates are the right fit.
        </Typography>

        <Typography className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          veritatis laborum accusantium corrupti? At necessitatibus non,
          consectetur vel dolorem iste eum doloribus maxime modi sit officiis,
          recusandae tempore? Earum, velit!
        </Typography>
      </div>
    </div>
  );

  const fourth = () => (
    <div className="d-flex flex-column align-items-center gap-3 py-5 px-3 text-center bg-dark bg-gradient text-white">
      <Typography>
        Questions? Schedule a call with one of our membors.
      </Typography>
      <Button variant="outlined" style={{ width: "fit-content" }}>
        Schedule a call
      </Button>
    </div>
  );

  const fifth = () => (
    <div className="m-5">
      <Typography variant="h5">Innovative Teams trust iRekommend</Typography>

      <div className="d-flex justify-content-evenly align-items-stretch flex-wrap mx-1 py-3">
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body
            className="d-flex flex-column"
            style={{ borderTop: "10px solid orange" }}
          >
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis, iste
              minus natus omnis deleniti temporibus ipsam dicta sit labore vel,
              hic voluptatum corrupti commodi!
            </Card.Text>
            <div className="d-flex align-items-center">
              <Card.Title className="flex-grow-1">
                XYZ <br /> Founder of xyz
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body
            className="d-flex flex-column"
            style={{ borderTop: "10px solid orange" }}
          >
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis, iste
              minus natus omnis deleniti temporibus ipsam dicta sit labore vel,
              hic voluptatum corrupti commodi! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Repellat suscipit tempora minus
              quae.
            </Card.Text>
            <div className="d-flex align-items-center">
              <Card.Title className="flex-grow-1">
                XYZ <br /> Founder of xyz
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body
            className="d-flex flex-column"
            style={{ borderTop: "10px solid orange" }}
          >
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis, iste
              minus natus omnis deleniti temporibus ipsam dicta sit labore vel,
              hic voluptatum corrupti commodi!
            </Card.Text>
            <div className="d-flex align-items-center">
              <Card.Title className="flex-grow-1">
                XYZ <br /> Founder of xyz
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "18rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
          <Card.Body
            className="d-flex flex-column"
            style={{ borderTop: "10px solid orange" }}
          >
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto odio molestiae eligendi? Alias sint blanditiis, iste
              minus natus omnis deleniti temporibus ipsam dicta sit labore vel,
              hic voluptatum corrupti commodi!
            </Card.Text>
            <div className="d-flex align-items-center">
              <Card.Title className="flex-grow-1">
                XYZ <br /> Founder of xyz
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="about">
      {hero()} {second()} {third()} {fourth()} {fifth()}
    </div>
  );
};

export default Org;

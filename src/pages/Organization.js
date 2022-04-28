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
          iRekommend helps you with{" "}
          <span className="text-grad"> efficient recruiting </span>
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

  const faster = () => (
    <div className="d-flex flex-column align-items-center grey-bg py-5">
      <Typography variant="h3" className="mb-3 px-4 text-center">
        Hire faster by 86%
      </Typography>
      <div className="d-flex flex-row flex-wrap justify-content-evenly w-100">
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Direct access to Talent</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              With our “Google Search” type interface,{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                you can engage directly with candidates{" "}
              </span>{" "}
              with the required skills and experience.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Decentralized hiring</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              We are continuously sourcing talent across LinkedIn, Job Sites
              along with a network of hundreds of recruiters, and{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                targeted outreach to identify the candidates{" "}
              </span>{" "}
              who are actively looking for change.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Img src={svg1}></Card.Img>
            <Card.Title className="mt-2">Hire Better!</Card.Title>
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Our AI automatically{" "}
              <span style={{ fontWeight: "bold" }}>
                {" "}
                generates English explanations as to why a candidate is fit for
                the role
              </span>
              , making it easy for hiring managers and recruiters.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  const aid = () => (
    <div className="d-flex flex-row align-items-center justify-content-center flex-wrap-reverse">
      <div className="mx-auto my-auto px-5">
          <img
            src={svg1}
            alt={"logo"}
            style={{ width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
          />
        </div>
      <div className="d-flex flex-column justify-content-center mt-5 mx-3" style={{ maxWidth: "700px"}}>
        <Typography variant="h3" className="mb-3 px-2 text-center" >
          Get aid in finding matching candidate for your company.
        </Typography>
        <Typography variant="h5" className="mt-3 px-2 text-center" >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga facere aut exercitationem rerum. Sapiente, dolorem fugit.
        </Typography>
      </div>
    </div>
  );

  const custview = () => (
    <div className="d-flex flex-column align-items-center py-5 grey-bg">
      <Typography variant="h4" className="mb-3 px-4 text-center">
        Customers' view on iRekommend :
      </Typography>
      <div className="d-flex flex-row flex-wrap justify-content-evenly w-100">
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sequi quis rerum ipsum, consequuntur minima possimus architecto
              voluptatem placeat dolore? Qui porro amet autem voluptate neque
              beatae incidunt optio fugiat.
            </Card.Text>
            <div className="d-flex flex-row align-items-center">
              <Card.Title className="flex-grow-1 mt-2">
                ABC <br /> xyz company
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sequi quis rerum ipsum, consequuntur minima possimus architecto
              voluptatem placeat dolore? Qui porro amet autem voluptate neque
              beatae incidunt optio fugiat. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Mollitia similique eveniet, numquam
              beatae temporibus doloremque.
            </Card.Text>
            <div className="d-flex flex-row align-items-center">
              <Card.Title className="flex-grow-1 mt-2">
                ABC <br /> xyz company
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sequi quis rerum ipsum, consequuntur minima possimus architecto
              voluptatem placeat dolore? Qui porro amet autem voluptate neque
              beatae incidunt optio fugiat.
            </Card.Text>
            <div className="d-flex flex-row align-items-center">
              <Card.Title className="flex-grow-1 mt-2">
                ABC <br /> xyz company
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="mx-3 my-3 card-c">
          <Card.Body className="d-flex flex-column">
            <Card.Text className="flex-grow-1" style={{ textAlign: "justify" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              sequi quis rerum ipsum, consequuntur minima possimus architecto
              voluptatem placeat dolore? Qui porro amet autem voluptate neque
              beatae incidunt optio fugiat.
            </Card.Text>
            <div className="d-flex flex-row align-items-center">
              <Card.Title className="flex-grow-1 mt-2">
                ABC <br /> xyz company
              </Card.Title>
              <p>icon</p>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  const questions = () => (
    <div
      className="d-flex flex-column justify-content-center align-items-center py-5 px-3 gap-3 text-white text-center"
      style={{ background: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)" }}
    >
      <Typography className="mb-3" variant="h4">
        Book your demo
      </Typography>
      <div className="d-flex flex-row gap-2">
        <Button
          variant="outlined"
          style={{ width: "fit-content", color: "#fff", borderColor: "#fff" }}
        >
          Call us
        </Button>
        <Button
          variant="outlined"
          style={{ width: "fit-content", color: "#fff", borderColor: "#fff" }}
        >
          Write to us
        </Button>
      </div>
    </div>
  );

  return (
    <div className="about">
      {hero()}
      {faster()}
      {aid()}
      {/* {second()} */}
      {custview()}
      {questions()}
    </div>
  );
};

export default Org;

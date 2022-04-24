import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import HandshakeIcon from "@mui/icons-material/Handshake";
import PaidIcon from "@mui/icons-material/Paid";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import Button from "@mui/material/Button";
import { blue, green, orange, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import CountUp from "react-countup";
import svg1 from "../img/back.svg";
import svg2 from "../img/back2.svg";
import draw from "../img/draw.svg";
import draw1 from "../img/draw1.svg";

const Home = () => {
  const [jobTitle, setJobTitle] = useState("");

  // Custom Button
  const SearchButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(theme.palette.error.main),
    backgroundColor: theme.palette.primary.main,
    border: "1px solid",
    borderColor: theme.palette.primary.main,
    marginBottom: 10,
    fontSize: "1rem",
    padding: "13px 23px",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.getContrastText(theme.palette.primary.main),
      boxShadow: "0 3px 10px #0004",
    },
  }));

  const hero = () => (
    <div className="position-relative vh-100 ">
      <img
        src={svg1}
        alt={"logo"}
        style={{ zIndex: "0", opacity: "0.7" }}
        className="position-absolute top-0 start-0"
      />
      <img
        src={svg2}
        alt={"logo"}
        style={{ zIndex: "0", opacity: "0.7" }}
        className="position-absolute bottom-0 end-0"
      />

      {/* Text and search bar */}
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-3 py-0"
        style={{ height: "100%" }}
      >
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Get <span className="text-grad"> Hired Faster </span>
        </Typography>

        <p className="fs-3">
          With <span className="text-grad fw-bold">Insider Access</span> to
          Hiring Manager
        </p>

        {/* Search Bar */}
        <div div className="d-flex flex-row flex-wrap justify-content-center ">
          <TextField
            id="outlined-basic"
            label="Search for Jobs"
            onChange={(e) => setJobTitle(e.target.value)}
            onKeyDown={ (e) => { if ( e.key === 'Enter') {}}}
            value={jobTitle}
            variant="outlined"
            className="mx-3 my-3"
            style={{ width: "65vw" }}
          />
          <SearchButton href={`/search/${jobTitle}`} className="mx-3 my-3">
            Search
          </SearchButton>
        </div>

        <div className="d-flex flex-row flex-wrap text-center justify-content-evenly ">
          <Button variant="outlined" className="mx-2 my-2" href="/search/react">
            React.js
          </Button>
          <Button variant="outlined" className="mx-2 my-2" href="/search/aws">
            Aws
          </Button>

          <Button variant="outlined" className="mx-2 my-2" href="/search/google">
            Google Cloud
          </Button>

          <Button variant="outlined" className="mx-2 my-2" href="/search/web">
            Web Development
          </Button>

          <Button variant="outlined" className="mx-2 my-2" href="/search/python">
            Python
          </Button>

          <Button variant="outlined" className="mx-2 my-2" href="/search/machine">
            Machine Learning
          </Button>
        </div>
      </div>
    </div>
  );

  const cards = () => (
    <div className="position-relative grey-bg">
      <div className="d-flex justify-content-evenly align-items-stretch flex-wrap mx-5 py-3">
        <Card
          style={{ width: "15rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
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
        <Card
          style={{ width: "15rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-right"
          data-aos-once="true"
        >
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
        <Card
          style={{ width: "15rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-left"
          data-aos-once="true"
        >
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
        <Card
          style={{ width: "15rem" }}
          className="mx-3 my-3 card-c"
          data-aos="fade-left"
          data-aos-once="true"
        >
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
    <div className="position-relative">
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
            data-aos="zoom-in"
            data-aos-once="true"
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

  const skewDiv = () => (
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
        <div className="mx-auto my-auto ">
          <img
            src={draw1}
            alt={"logo"}
            style={{ zIndex: -1, width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
          />
        </div>
        <div className="mx-auto my-auto text-center px-5">
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

  const growing = () => (
    <div className="pb-4">
      <div className="d-flex justify-content-evenly align-items-center pt-5 mt-5">
        <Typography variant="h4" style={{ fontWeight: "bold" }}>
          We are growing
        </Typography>
      </div>
      <div className="d-flex justify-content-around align-items-stretch flex-wrap mx-5 my-5">
        <div className="d-flex align-items-stretch flex-column my-3">
          <Typography
            variant="h4"
            style={{ fontWeight: "bold" }}
            className="text-grad-sm"
          >
            <CountUp end={537} duration={5} />
          </Typography>
          <Typography variant="h6">Technology skills</Typography>
          <Typography variant="body2">
            We track skills, languages, <br /> and platforms to match qualified{" "}
            <br />
            developers with the right companies.
          </Typography>
        </div>
        <div className="d-flex align-items-stretch flex-column my-3">
          <Typography
            variant="h4"
            style={{ fontWeight: "bold" }}
            className="text-grad-sm"
          >
            <CountUp end={8357} duration={5} />
          </Typography>
          <Typography variant="h6">Experienced developers</Typography>
          <Typography variant="body2">
            Thousands of developers have been <br />
            vetted and accepted to join the remote <br />
            community and find work through Moonlight.
          </Typography>
        </div>
        <div className="d-flex align-items-stretch flex-column my-3">
          <Typography
            variant="h4"
            style={{ fontWeight: "bold" }}
            className="text-grad-sm"
          >
            <CountUp end={117} duration={5} />
          </Typography>
          <Typography variant="h6">Technology skills</Typography>
          <Typography variant="body2">
            We track skills, languages, <br /> and platforms to match qualified{" "}
            <br />
            developers with the right companies.
          </Typography>
        </div>
      </div>
    </div>
  );

  return (
    <div className="home white-bg" style={{ zIndex: 1 }}>
      {hero()} {cards()} {sec2()} {skewDiv()} {growing()}
    </div>
  );
};

export default Home;

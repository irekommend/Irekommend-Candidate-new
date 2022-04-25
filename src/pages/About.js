import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { blue } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import svg4 from "../img/mission.svg";
import tcs from "../img/tcs.png";
import svg3 from "../img/vision.svg";

const About = () => {
  const hero = () => (
    <div className="position-relative vh-100 about-hero">
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center mx-3 py-0"
        style={{ height: "100%" }}
      >
        <Typography variant="h2" style={{ fontWeight: "bold" }}>
          Know <span className="text-grad"> iRekommend </span>
        </Typography>

        <Typography variant="body1" className="my-1 w-75">
          We started iRekommend in 2021 to simplify the hiring process and
          create an engagement platform between hiring managers and candidates.
          Our “Augmented Intelligence” platform connects hiring managers with
          candidates directly while supporting candidates to position themselves
          effectively in interview process. We are a team of technology savvy
          professionals who have been struggling with hiring right teams far too
          long. We have noticed the challenges and decided to solve this problem
          once and for all by creating a “Decentralized” platform between hiring
          managers and candidates alike! The “Decentralized” platform endeavors
          to deliver value for all stakeholders - hiring managers, candidates,
          recruiters, enabled via technology.
        </Typography>
      </div>
    </div>
  );

  const vision = () => (
    <div className="position-relative grey-bg">
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap ">
        <div className="mx-auto my-auto text-center w-50">
          <Typography variant="h3" className="fw-bold mt-5">
            Our Vision
          </Typography>
          <Typography variant="body1" className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            nobis facere recusandae cum necessitatibus velit adipisci nihil fuga
            voluptatibus explicabo quisquam magni quia suscipit exercitationem
            ad sed molestiae tenetur vitae?
          </Typography>
        </div>

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
      </div>
    </div>
  );

  const mission = () => (
    <div className="position-relative">
      <div className="d-flex flex-row flex-wrap-reverse justify-content-center align-items-center">
        <div className="mx-auto my-auto px-5">
          <img
            src={svg4}
            alt={"mission"}
            style={{ width: "100%", maxHeight: "500px" }}
            className=" my-5 py-5"
            data-aos="zoom-in"
            data-aos-once="false"
          />
        </div>

        <div
          className="mx-auto my-auto text-center w-50"
          style={{ minWidth: "300px" }}
        >
          <Typography variant="h3" className="fw-bold mt-5">
            Our Mission
          </Typography>
          <Typography variant="body1" className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            nobis facere recusandae cum necessitatibus velit adipisci nihil fuga
            voluptatibus explicabo quisquam magni quia suscipit exercitationem
            ad sed molestiae tenetur vitae?
          </Typography>
        </div>
      </div>
    </div>
  );

  const advisors = () => (
    <div className="position-relative grey-bg pt-5">
      <Typography variant="h3" className="fw-bold" textAlign={"center"}>
        Advisors
      </Typography>

      <div class="mx-5 my-5">
        <div class="d-flex flex-wrap justify-content-evenly align-items-center">
          <div style={{ width: "18rem" }}>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=1027"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Michele Miller</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <div className="social">
                <LinkedInIcon
                  className="mx-3 licon"
                  style={{ fontSize: "40px", color: blue[50] }}
                >
                  <a href=""></a>
                </LinkedInIcon>
              </div>
            </div>
          </div>
          <div style={{ width: "18rem" }}>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=839"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Patricia Knott</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <div className="social">
                <LinkedInIcon
                  className="mx-3 licon"
                  style={{ fontSize: "40px", color: blue[50] }}
                >
                  <a href=""></a>
                </LinkedInIcon>
              </div>
            </div>
          </div>
          <div style={{ width: "18rem" }}>
            <div class="our-team">
              <div class="picture">
                <img
                  class="img-fluid"
                  src="https://picsum.photos/130/130?image=856"
                />
              </div>
              <div class="team-content">
                <h3 class="name">Justin Ramos</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <div className="social">
                <LinkedInIcon
                  className="mx-3 licon"
                  style={{ fontSize: "40px", color: blue[50] }}
                >
                  <a href=""></a>
                </LinkedInIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const clients = () => (
    <div className="position-relative">
      <Typography variant="h3" className="fw-bold mt-5" textAlign={"center"}>
        Clients
      </Typography>

      <div class="mx-5 my-5">
        <div class="d-flex flex-wrap justify-content-evenly align-items-center">
          <img src={tcs} alt={"TCS"} style={{ width: "100px" }} />
          <img src={tcs} alt={"TCS"} style={{ width: "100px" }} />
          <img src={tcs} alt={"TCS"} style={{ width: "100px" }} />
          <img src={tcs} alt={"TCS"} style={{ width: "100px" }} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="about">
      {hero()} {vision()} {mission()} {advisors()} {clients()}
    </div>
  );
};

export default About;

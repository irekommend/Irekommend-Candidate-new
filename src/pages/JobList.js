import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
// import svg1 from "../img/job-bg1.svg";
// import svg2 from "../img/job-bg2.svg";

const JobList = (props) => {
  let search = useParams();
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedJob, setSelectedJob] = useState({});
  const [run, setRun] = useState(false);

  const today = Date();

  const getDays = (d) => {
    return Math.floor(
      (Date.parse(today) - Date.parse(d)) / (1000 * 60 * 60 * 24)
    );
  };

  const cnvrtr = (t) => {
    return `${t}`;
  };

  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);
  console.log(windowDimensions);

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

  useEffect(() => {
    fetch(
      `https://irekommend-ml-utility.ue.r.appspot.com/search-jobs?search_string=${search.jobtitle}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setSelectedJob(data[0]);
      });
  }, [run]);

  const SearchBar = () => (
    <div
      div
      className="d-flex flex-row flex-wrap justify-content-center "
      style={{ marginTop: "70px" }}
    >
      <TextField
        id="outlined-basic"
        label="Search for Jobs"
        onChange={(e) => setJobTitle(e.target.value)}
        value={jobTitle}
        variant="outlined"
        className="mx-3 my-3"
        style={{ width: "65vw" }}
      />
      <SearchButton href={`/search/${jobTitle}`} className="mx-3 my-3">
        Search
      </SearchButton>
    </div>
  );

  const JobCard = (job) => (
    <div
      onClick={() => {
        setSelectedJob(job.job);
      }}
      className="card m-3 p-3 "
      style={{
        cursor: "pointer",
        fontFamily: "Roboto,sans-serif",
        border:
          job.job.Job_ID == selectedJob.Job_ID
            ? "2px solid #0275d8"
            : "1px solid #0004",
        borderRadius: "12px",
        height: "fit-content",

        "&:hover": {
          boxShadow: "0 3px 10px #0004",
        },
      }}
    >
      <h5 style={{ fontWeight: "bold", marginBottom: "3px" }}>
        {job.job.job_role_title}
      </h5>
      <Typography variant="body1">{job.job.Company}</Typography>
      <Typography variant="body1">{job.job.Location}</Typography>
      <p className="text-muted mt-2">--- Some Important Info ---</p>
      <div className="d-flex flex-row">
        <Typography variant="caption" className="flex-grow-1 text-muted">
          Posted {getDays(job.job.Processed_Date)} days ago
        </Typography>
        <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );

  const SelectedJobDisplay = (job) => (
    <div
      className="card m-3 overflow-auto"
      style={{ fontFamily: "Roboto,sans-serif", height: "70vh" }}
    >
      <div
        className="d-flex flex-row"
        style={{ boxShadow: "0 3px 15px #0002" }}
      >
        <div className="flex-grow-1 p-3">
          <h3>{job.job.job_role_title}</h3>
          <p className="h5">{job.job.Company}</p>
          <p className="h5">{job.job.Location}</p>
        </div>
        <div className="p-3 d-flex align-self-end">
          <Button
            className="btn"
            variant="contained"
            href="#"
            size="large"
            style={{ maxWidth: "fit-content", height: "fit-content" }}
          >
            Apply
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div
          className="d-flex mb-3 pb-3"
          style={{ borderBottom: "1px solid #0002" }}
        >
          <Typography className="flex-grow-1">Job Type</Typography>
          <Typography>
            {job.job.FullTime_or_Contractual === "None"
              ? "Not mentioned"
              : job.job.FullTime_or_Contractual}
          </Typography>
        </div>

        <div
          className="d-flex mb-3 pb-3"
          style={{ borderBottom: "1px solid #0002" }}
        >
          <Typography className="flex-grow-1">Posted</Typography>
          <Typography>{getDays(job.job.Processed_Date)} days ago</Typography>
        </div>

        <div>
          <Typography variant="h6">Description</Typography>

          <div
            className="my-3 pb-3"
            style={{ borderBottom: "1px solid #0001" }}
          >
            <Typography className="mb-2">Skills Required :</Typography>
            {job.job.job_skills}
          </div>

          <div className="mt-3">
            <Typography>{cnvrtr(job.job.job_description_text)}</Typography>
          </div>
        </div>
      </div>
    </div>
  );

  const listing1 = () => (
    <div className="col-11 mx-auto position-relative vh-100">
      {/* <img
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
      /> */}

      <div className="row">
        <div className="col-4 overflow-auto" style={{ height: "70vh" }}>
          {jobs.map((j, i) => (
            <JobCard job={j} />
          ))}
        </div>
        <div className="col-8">
          <SelectedJobDisplay job={selectedJob} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="joblist">
      {SearchBar()}
      <hr />
      <div>
        {windowDimensions.width > 800
          ? listing1()
          : jobs.map((j, i) => <JobCard job={j} />)}
        {/* <hr/> {<SelectedJobDisplay job={selectedJob} />} */}
      </div>
    </div>
  );
};

export default JobList;

//https://irekommend-ml-utility.ue.r.appspot.com/search-jobs?search_string=${routeParams.job_title}&${routeParams.location}

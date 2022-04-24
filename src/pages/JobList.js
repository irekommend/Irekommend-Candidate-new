import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import svg1 from "../img/job-bg1.svg";
// import svg2 from "../img/job-bg2.svg";

const JobList = (props) => {
  let search = useParams();
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState("");
  const [selectedJob, setSelectedJob] = useState({});
  const [run, setRun] = useState(false);
  // console.log(selectedJob.Job_ID);

  const today = Date();

  // ! to get x in "Posted x days ago"
  const getDays = (d) => {
    return Math.floor(
      (Date.parse(today) - Date.parse(d)) / (1000 * 60 * 60 * 24)
    );
  };

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

  // ! to get window dimensions ---------
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
  // console.log(windowDimensions);
  // ! -----------------------------------

  useEffect(() => {
    fetch(
      `https://irekommend-ml-utility.ue.r.appspot.com/search-jobs?search_string=${search.jobtitle}`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        // setSelectedJob(data[0]);
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
          job.job.Job_ID === selectedJob.Job_ID
            ? "2px solid #0275d8"
            : "1px solid #0004",
        borderRadius: "12px",
        height: "fit-content",
      }}
    >
      {/* {console.log(selectedJob)} */}
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
        {/* {isShown ? (
          <FavoriteIcon color="error" onMouseLeave={() => setIsShown(false)} />
        ) : (
          <FavoriteBorderOutlinedIcon onMouseEnter={() => setIsShown(true)} />
        )} */}
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
        <div className="p-3 align-self-end">
          <div className="d-flex align-items-center px-3 gap-3">
            <Button
              className="btn"
              variant="contained"
              size="large"
              style={{ maxWidth: "fit-content", height: "fit-content" }}
              // to open a link in new tab
              onClick={() => window.open(job.job.Apply_Link, "_blank")}
            >
              Apply
            </Button>
            <FavoriteBorderOutlinedIcon />
          </div>
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
            <Typography>
              {job.job.job_description_text}
              {/* {job.job.job_description_text
                .split("\n")
                .map(function (item, idx) {
                  return (
                    <span key={idx}>
                      {item}
                      <br />
                    </span>
                  );
                })} */}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );

  const SelectJobDisplay = () => (
    <div
      className="card m-3 overflow-auto"
      style={{ fontFamily: "Roboto,sans-serif", height: "70vh" }}
    >
      <Typography
        variant="h5"
        textAlign={"center"}
        style={{ marginTop: "50px", fontWeight: "bold" }}
      >
        Select the Job
      </Typography>
    </div>
  );

  const listing1 = () => (
    <div className="col-11 mx-auto vh-100">
      <div className="row">
        <div className="col-4 overflow-auto" style={{ height: "70vh" }}>
          {jobs.map((j, i) => (
            <JobCard job={j} />
          ))}
        </div>
        <div className="col-8">
          {selectedJob.Job_ID === undefined ? (
            <SelectJobDisplay />
          ) : (
            <SelectedJobDisplay job={selectedJob} />
          )}
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
      </div>
    </div>
  );
};

export default JobList;


//https://irekommend-ml-utility.ue.r.appspot.com/search-jobs?search_string=${routeParams.job_title}&${routeParams.location}

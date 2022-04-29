import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./comp/Footer";
import Header from "./comp/Header";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Emj from "./pages/emj";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import Learn from "./pages/Learn";
import Org from "./pages/Organization";
import PNF from "./pages/PNF";
import Button from "@mui/material/Button";

const App = () => {
  const [show, setShow] = useState(false);
  // const [used, setUsed] = useState(false);
  // const dis = false;
  
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
      // setUsed(true);
      document.body.style.pointerEvents = "none";
      document.getElementById("modal").style.pointerEvents = "auto";
    }, 5000);
  }, []);
  // setShow(true);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      {show ? (
        <div id="modal">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "#0004",
              zIndex: "10",
            }}
          >
            <Paper
              id="modal-content"
              className="d-flex flex-column align-items-center justify-content-center position-relative p-5 text-center"
              elevation={12}
              style={{
                background: "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
              }}
            >
              <IconButton
                aria-label="delete"
                size="large"
                className="position-absolute top-0 end-0"
                onClick={() => {
                  setShow(false);
                  document.body.style.pointerEvents = "auto";
                  document.getElementById("modal").style.pointerEvents = "none";
                }}
                style={{ color: "#ffff", borderColor: "#ffff" }}
              >
                <CancelOutlinedIcon fontSize="inherit" />
              </IconButton>
              <Typography variant="h4">
                Upload your Resume now, and get your first interview call in{" "}
                <span style={{ fontWeight: "bold", color: "white" }}>
                  14 DAYS
                </span>
                .
              </Typography>
              <Button
                className="mt-5"
                variant="outlined"
                size="large"
                style={{ color: "#ffff", borderColor: "#ffff" }}
              >
                Upload your Resume
              </Button>
            </Paper>
          </div>
        </div>
      ) : null}

      {Header()}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/learn" element={<Learn />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/organization" element={<Org />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/search/:jobtitle" element={<JobList />}></Route>
        <Route path="*" element={<PNF />}></Route>
        <Route path="/emj" element={<Emj />}></Route>
      </Routes>

      <div style={{ height: "500px" }}>{Footer()}</div>
    </div>
  );
};

export default App;

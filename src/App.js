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

import Fab from "@mui/material/Fab";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cookies from "universal-cookie";
import { styled } from "@mui/material/styles";


const App = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("modal") != "true") {
      setTimeout(() => {
        setOpen(true);
        // setUsed(true);
        document.getElementById("modal").style.pointerEvents = "auto";
        cookies.set("modal", "true", { path: "/" });
      }, 5000);
    }
  }, []);

  const Input = styled("input")({
    display: "none",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    width: "20rem",
    boxShadow: 24,
    p: 4,
    backgroundColor: "white",
  };

  const modal = () => (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      id="modal"
    >
      <Box
        className="d-flex flex-column justify-content-center align-items-center text-center"
        sx={style}
      >
        <Typography variant="h5">
          Upload your Resume now, and get your first interview call in{" "}
          <span className="text-grad" style={{ fontWeight: "bold" }}>
            14 DAYS
          </span>
          .
        </Typography>
        <label className="mt-4" htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
          />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
      </Box>
    </Modal>
  );


  const notification = () => (
    <Fab id="fixedbell" color="primary" aria-label="" onClick={handleOpen}>
      <NotificationsActiveIcon />
    </Fab>
  );

  return (
    <div className="new-app">
      {modal()}

      { notification() }

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

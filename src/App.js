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
import Blog1 from "./pages/Blogs/Blog1.js";
import Blog2 from "./pages/Blogs/Blog2.js";
import Blog3 from "./pages/Blogs/Blog3.js";
import Blog4 from "./pages/Blogs/Blog4.js";

import Fab from "@mui/material/Fab";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Cookies from "universal-cookie";
import { styled } from "@mui/material/styles";
import CookieConsent from "react-cookie-consent";
import firebase from "./service/firebase.js";

const App = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user);
    })
  }, [])

  console.log(user);

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
      <CookieConsent
        location="bottom"
        buttonText="I understand"
        cookieName="myAwesomeCookieName2"
        style={{ textAlign: "center", background: "#2B373B", zIndex: "50" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies. See our <a href="#">Privacy Policy</a> for more.
      </CookieConsent>

      {notification()}

      {Header(user)}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/blog/1" element={<Blog1 />}></Route>
        <Route path="/blog/2" element={<Blog2 />}></Route>
        <Route path="/blog/3" element={<Blog3 />}></Route>
        <Route path="/blog/4" element={<Blog4 />}></Route>
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

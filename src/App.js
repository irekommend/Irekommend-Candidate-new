import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Learn from "./pages/Learn";
import Header from "./comp/Header";
import Footer from "./comp/Footer";
import Login from "./comp/Login";
import Signup from "./comp/Signup";

const App = () => {
  useEffect(() => {
    AOS.init(
    );
    AOS.refresh();
  }, []);

  return (
    <div>
      {Header()}
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/learn" element={<Learn />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>

      <div style={{ height: "500px" }}>{Footer()}</div>
    </div>
  );
};

export default App;

import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./comp/Footer";
import Header from "./comp/Header";
import Login from "./comp/Login";
import Signup from "./comp/Signup";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import JobList from "./pages/JobList";
import Learn from "./pages/Learn";
import Org from "./pages/Organization";
import PNF from "./pages/PNF";
import Emj from "./pages/emj";


const App = () => {
  useEffect(() => {
    AOS.init();
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

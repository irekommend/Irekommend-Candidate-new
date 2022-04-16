import Button from "@mui/material/Button";
import React, { useEffect, useRef, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hasWindow = typeof window !== "undefined";

  const [winDim, detectHW] = useState({
    winWidth: hasWindow ? window.innerWidth : null,
    winHeight: hasWindow ? window.innerHeight : null,
  });

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [winDim]);
  console.log(winDim);

  const headd = () => (
    <div>
      <Navbar
        collapseOnSelect
        expand="sm"
        className="fixed-top py-3 px-4"
        style={{
          fontFamily: "Roboto,sans-serif",
          zIndex: 10,
          transition: "1s ease",
          backgroundColor: navBackground ? "white" : "transparent",
        }}
        scrolling
      >
        <Navbar.Brand href="#home">
          <h3>IRekommend</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/" className="fs-6 text-dark mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="fs-6 text-dark mx-3">
              About
            </Nav.Link>
            <Nav.Link href="/blog" className="fs-6 text-dark mx-3">
              Blog
            </Nav.Link>
            <Nav.Link href="/learn" className="fs-6 text-dark mx-3">
              Learn
            </Nav.Link>
          </Nav>
          <Nav>
            <Button variant="contained" className="btn">
              Contained
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );

  return <div className="headd">{headd()}</div>;
};

export default Header;

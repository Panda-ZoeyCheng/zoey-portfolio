import { Navbar, Nav, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-github.svg";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const updateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar
      expand="lg"
      className={scrolled ? "navbar scrolled fixed-top" : "navbar"}
    >
      <Container className="justify-content-between">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#aboutme"
              className={
                activeLink === "aboutme" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("aboutme")}
            >
              About Me
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* icon */}
          <div className="d-flex align-items-center">
            <div className="social-icon d-flex">
              <a href="https://www.linkedin.com/in/ziying-zheng/">
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a href="https://github.com/Panda-ZoeyCheng">
                <img src={navIcon2} alt="GitHub" />
              </a>
            </div>
            <button className="vvd" onClick={() => updateActiveLink("connect")}>
              <span>Let's Connect</span>
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

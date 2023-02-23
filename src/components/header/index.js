import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logo } from "../../assets/images";
import { Image } from "react-bootstrap";
import "font-awesome/css/font-awesome.min.css";
import Order from "../order";
import { BsBarChart } from "react-icons/bs";
export const Header = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };
  const [fix, setFix] = useState(false);

  function setFixed() {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 100) {
        setFix(true);
      } else {
        setFix(false);
      }
    });
  }
  window.addEventListener("scroll", setFixed);

  return (
    <>
      <div>
        <header>
          <Navbar
            variant="primary"
            expand="lg"
            fixed="top"
            className={fix ? "light" : "trans"}
          >
            <Container fluid>
              <Navbar.Brand href="#">
                <Image className="img-size" src={logo} alt="logo2" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav className="ms-auto my-2 my-lg-0  fs-5" navbarScroll>
                  <Nav.Link className="px-4 text-white" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="px-4  text-white">Single</Nav.Link>

                  <Nav.Link className="px-4 text-white">Link</Nav.Link>
                  <Nav.Link className="px-4 text-white">Blog</Nav.Link>
                  <Nav.Link className="px-4 text-white">Vendors</Nav.Link>
                  <Nav.Link className="px-4  text-white">
                    <Button variant="warning" className="px-5">
                      Restaurant
                    </Button>
                  </Nav.Link>
                  <Nav.Link
                    className=" mx-1 "
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <BsBarChart />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
      </div>
      <Order value={show} handleClose={handleClose} />
    </>
  );
};

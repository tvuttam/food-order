import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import { fire, footer } from "../../assets/images/index";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsGoogle,
  BsYoutube,
} from "react-icons/bs";
import {} from "../../assets/images/index";

export const Footer = () => {
  return (
    <div className="bg-2">
      <Container>
        <Row>
          <Col lg="3">
            <Image className="img-fluid footer-size  " src={footer} alt="" />
            <p>
              One is to focus on the quality of your meat. If you can call out
              organic beef, sustainable farming.
            </p>
            <p>
              <strong>Phone :</strong>
              +92300-400-2333
            </p>
            <p>
              <strong>Email :</strong>
              restaurant@gmail.com
            </p>
            <p>
              <span className="ms-3">
                <BsFacebook />
              </span>
              <span className="ms-3">
                <BsTwitter />
              </span>
              <span className="ms-3">
                <BsYoutube />
              </span>
              <span className="ms-3">
                <BsLinkedin />
              </span>
              <span className="ms-3">
                <BsGoogle />
              </span>
            </p>
          </Col>
          <Col lg="3">
            <h3 className="mt-2"> Our Service</h3>
            <ul className="fs-6 list-unstyled mt-3">
              <li className="mt-2">Blog</li>
              <li className="mt-2">Home 1</li>
              <li className="mt-2">Home 2</li>
              <li className="mt-2">Main Home</li>
            </ul>
          </Col>
          <Col lg="3">
            <h3 className="mt-2">Latest News</h3>
            <ul className="d-flex list-unstyled">
              <li>
                <Image className="img-fluid  " width={70} src={fire} alt="" />
              </li>
              <li className="ps-2">
                {" "}
                <h6>Grilled Chicken & Kabab With Tomato Sauce</h6>
                March 19, 2021
              </li>
            </ul>
          </Col>
          <Col lg="3">
            <h3 className="mt-2"> Our Service</h3>
            <ul className="fs-6 list-unstyled mt-3">
              <li className="mt-2">Blog</li>
              <li className="mt-2">Home 1</li>
              <li className="mt-2">Home 2</li>
              <li className="mt-2">Main Home</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

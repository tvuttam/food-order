import React from "react";
import Sidebars from "../components/sidebar";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Container, Row, Col, Image } from "react-bootstrap";
import { BsWatch, BsMapFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import ReactStars from "react-rating-stars-component";

import {
  res1,
  res2,
  res3,
  card1,
  card2,
  card3,
  foodad1,
} from "../assets/images";

export default function Foodshow() {
  const history = useNavigate();
  return (
    <div>
      <section className="d-flex ">
        <ProSidebarProvider>
          <Sidebars />
        </ProSidebarProvider>
        <div className="">
          <Container fluid>
            <Row className="">
              <Image className="img-fluid " src={foodad1} alt="logo2" />
            </Row>
            <Row className="pt-5">
              <h3>3+ Restaurants</h3>
              <Col lg="4" className="mt-3">
                <div
                  className="border "
                  onClick={(e) => history("/restourent")}
                >
                  <div className="position-relative">
                    <Image className="img-fluid  " src={res1} alt="" />
                    <span className="position-absolute start-0 bottom-0 p-3">
                      <ReactStars
                        count={5}
                        size={30}
                        color="#ffff"
                        activeColor="#ffd700"
                      />
                    </span>
                    <span></span>
                  </div>
                  <h3 className="p-3">Organic Arcadian Food</h3>
                  <div className=" p-3 d-flex justify-content-between">
                    <span className=""> Shakes </span>
                    <span className="">Steaks</span>
                    <span className="">Sea Food</span>
                    <span className="">Chicken</span>
                    <span className="">Appetizers</span>
                  </div>
                  <ul className="d-flex list-unstyled px-3 pt-4 border-top">
                    <li>
                      <Image className="img-fluid  " src={card1} alt="" />
                    </li>
                    <li className="fs-5 ps-3 text-danger ">
                      {" "}
                      <BsWatch /> 12:01 am - 11:59 pm
                      <div className="text-secondary">
                        {" "}
                        <BsMapFill /> Main Boulevard, Lahore
                      </div>{" "}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="4" className="mt-3">
                <div className="border">
                  <div className="position-relative">
                    <Image className="img-fluid  " src={res2} alt="" />
                    <span className="position-absolute start-0 bottom-0 p-3">
                      <ReactStars
                        count={5}
                        size={30}
                        color="#ffff"
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
                  <h3 className="p-3">Organic Arcadian Food</h3>
                  <div className=" p-3 d-flex justify-content-between">
                    <span className=""> Shakes </span>
                    <span className="">Steaks</span>
                    <span className="">Sea Food</span>
                    <span className="">Chicken</span>
                    <span className="">Appetizers</span>
                  </div>
                  <ul className="d-flex list-unstyled px-3 pt-4 border-top">
                    <li>
                      <Image className="img-fluid  " src={card2} alt="" />
                    </li>
                    <li className="fs-5 ps-3 text-danger ">
                      {" "}
                      <BsWatch /> 12:01 am - 11:59 pm
                      <div className="text-secondary">
                        {" "}
                        <BsMapFill /> Main Boulevard, Lahore
                      </div>{" "}
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg="4" className="mt-3">
                <div className="border">
                  <div className="position-relative">
                    <Image className="img-fluid  " src={res3} alt="" />
                    <span className="position-absolute start-0 bottom-0 p-3">
                      <ReactStars
                        count={5}
                        size={30}
                        color="#ffff"
                        activeColor="#ffd700"
                      />
                    </span>
                  </div>
                  <h3 className="p-3">Organic Arcadian Food</h3>
                  <div className=" p-3 d-flex justify-content-between">
                    <span className=""> Shakes </span>
                    <span className="">Steaks</span>
                    <span className="">Sea Food</span>
                    <span className="">Chicken</span>
                    <span className="">Appetizers</span>
                  </div>
                  <ul className="d-flex list-unstyled px-3 pt-4 border-top">
                    <li>
                      <Image className="img-fluid  " src={card3} alt="" />
                    </li>
                    <li className="fs-5 ps-3 text-danger ">
                      {" "}
                      <BsWatch /> 12:01 am - 11:59 pm
                      <div className="text-secondary">
                        {" "}
                        <BsMapFill /> Main Boulevard, Lahore
                      </div>{" "}
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </div>
  );
}

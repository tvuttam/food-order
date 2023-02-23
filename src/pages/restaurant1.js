import React from "react";

import { addvart, burgerwill } from "../assets/images/index";

import { Image, Row, Col, Container, Tab, Nav, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";
import {
  BsAlignStart,
  BsMenuButton,
  BsPinMap,
  BsViewList,
} from "react-icons/bs";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

import Categories1 from "./categories1";

export default function Restaurant1() {
  return (
    <div>
      <div className="restorents1-bg"></div>

      <div>
        <Container>
          <Row>
            <Col lg="8">
              <div className="d-flex position-relative">
                <div className=" rest-size  ">
                  <Image
                    className="img-fluid rest-size1  "
                    src={burgerwill}
                    alt="logo2"
                  />
                </div>
                <div className=" position-relative pt-3 ">
                  <ReactStars
                    classNames=""
                    count={5}
                    size={15}
                    color="#ddd"
                    activeColor="#ffd700"
                  />
                  <h2>Burgervil Food Processer</h2>
                  <p>
                    <BsPinMap />
                    <span className="opacity-75 ">
                      Block A Suite#7, Sydney, Australia
                    </span>
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <Dropdown className="p-5">
                <Dropdown.Toggle
                  className="px-5 "
                  variant="warning"
                  id="dropdown-basic"
                >
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="d-flex">
                    <span className="text-warning ">
                      <strong>Today</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span className=" ">
                      <strong>Monday</strong>
                    </span>
                    <span className=" ms-5 opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Tuesday</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Wednesday</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Thursday</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Friday</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Saturday</strong>
                    </span>
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="d-flex">
                    <span>
                      <strong>Sunday</strong>
                    </span>{" "}
                    <span className=" ms-auto opacity-75">
                      12:01 AM - 11:59 PM
                    </span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>

          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className="my-5">
              <Col lg="3">
                <Card bg="light" text="dark" className="mb-2 border-0">
                  <Card.Header as="h2">
                    All Details
                    <p className="text-warning">----</p>{" "}
                  </Card.Header>
                  <Card.Body>
                    <Nav className="flex-column " style={{ maxWidth: "350px" }}>
                      <Nav.Item as="h5" className="detail-hover">
                        <Nav.Link eventKey="first">
                          {" "}
                          <BsMenuButton /> Menu
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="h5" className="detail-hover">
                        <Nav.Link eventKey="second">
                          <BsViewList /> Review
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="h5" className="detail-hover">
                        <Nav.Link eventKey="third">
                          <BsAlignStart />
                          Restorents info
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Card.Body>
                </Card>
                <Card text="dark" className="mb-2 border">
                  <Card.Header as="h2" className="border-0">
                    Advertisement
                  </Card.Header>
                  <Card.Body>
                    <Image
                      className="img-fluid border-1"
                      src={addvart}
                      alt="logo2"
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={5}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Categories1 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Card>
                      <Card.Header as="h5">Write A Review</Card.Header>
                      <Card.Body>
                        <InputGroup>
                          <Form.Control
                            as="textarea"
                            aria-label="With textarea"
                          />
                        </InputGroup>

                        <Button
                          className="mt-2 rounded-pill"
                          variant="secondary"
                        >
                          Add Your Review
                        </Button>
                      </Card.Body>
                    </Card>
                    <Card className="mt-5">
                      <Card.Header as="h5">Reviews</Card.Header>
                      <Card.Body>No user has reviewed this store</Card.Body>
                    </Card>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Card bg="light" text="dark" className="mb-2 border-0">
                      <Card.Header as="h2">
                        Restaurant Info
                        <p className="text-warning">----</p>{" "}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text className="my-4 fs-4">
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt. Neque porro quisquam est, qui dolorem
                          ipsum quia dolor sit amet, consectetur, adipisci
                          velit, sed quia non numquam eius modi tempora incidunt
                          ut labore et dolore magnam aliquam quaerat voluptatem.
                          Ut enim ad minima veniam, quis nostrum exercitationem
                          ullam corporis suscipit laboriosam, nisi ut aliquid ex
                          ea commodi consequatur? Quis autem vel eum iure
                          reprehenderit qui in ea voluptate velit esse quam
                          nihil molestiae consequatur, vel illum qui dolorem eum
                          fugiat quo voluptas nulla pariatur.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card bg="light" text="dark" className="mb-2 border-0">
                      <Card.Header as="h2">
                        Current Location
                        <p className="text-warning">----</p>{" "}
                      </Card.Header>
                      <Card.Body>
                        <Card.Text className="my-4 fs-4">
                          <h1>Location</h1>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col lg={3} className="ms-auto">
                {/* <Slider>
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Advertisement
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={rest1}
                        alt="logo2"
                      />
                    </Card.Body>
                  </Card>
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Advertisement
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={rest1}
                        alt="logo2"
                      />
                    </Card.Body>
                  </Card>
                </Slider> */}
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
}

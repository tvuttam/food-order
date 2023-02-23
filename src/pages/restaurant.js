import React from "react";
import { addvart, ice1, ice4, rest1 } from "../assets/images/index";

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
import Categories from "./categories";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Header } from "../components";

export default function Restaurant() {
  return (
    <div>
    <Header/>

      <div className="restorents-bg"></div>

      <div>
        <Container>
          <Row>
            <Col lg="8">
              <div className="d-flex position-relative">
                <div className=" rest-size  ">
                  <Image
                    className="img-fluid rest-size1  "
                    src={rest1}
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
                  <h2>Organic Arcadian Food</h2>
                  <p>
                    <BsPinMap />
                    <span className="opacity-75 ">
                      Main Boulevard, Lahore, Punjab Pakistan - 5400
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
                    <Categories />
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
                        <Card.Text className="my-4 fs-4">location</Card.Text>
                      </Card.Body>
                    </Card>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
              <Col lg={3} className="mx-auto">
              
                <Slider>
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Best Selling Products
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={ice4}
                        alt="logo2"
                      />
                      <ReactStars
                        classNames=""
                        count={5}
                        size={15}
                        color="#ddd"
                        activeColor="#ffd700"
                      />
                      <h3>Oreo Milk Shake</h3>
                      <p className="text-danger ">$290</p>
                      <p className="border-bottom">
                        <span className="opacity-75 ">
                          Main Boulevard, Lahore, Punjab Pakistan - 5400
                        </span>
                      </p>

                      <Button variant="warning px-5 ">Order Now</Button>
                    </Card.Body>
                  </Card>
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Best Selling Products
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={ice1}
                        alt="logo2"
                      />
                      <ReactStars
                        classNames=""
                        count={5}
                        size={15}
                        color="#ddd"
                        activeColor="#ffd700"
                      />
                      <h3>Oreo Milk Shake</h3>
                      <p className="text-danger">$290</p>
                      <p className="border-bottom">
                        <span className="opacity-75 ">
                          Main Boulevard, Lahore, Punjab Pakistan - 5400
                        </span>
                      </p>
                      <Button variant="warning px-5 ">Order Now</Button>
                    </Card.Body>
                  </Card>
                </Slider>
                <Slider className="my-5">
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Sale Products
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={ice4}
                        alt="logo2"
                      />
                      <ReactStars
                        classNames=""
                        count={5}
                        size={15}
                        color="#ddd"
                        activeColor="#ffd700"
                      />
                      <h3>Oreo Milk Shake</h3>
                      <p className="text-danger ">$290</p>
                      <p className="border-bottom">
                        <span className="opacity-75 ">
                          Main Boulevard, Lahore, Punjab Pakistan - 5400
                        </span>
                      </p>

                      <Button variant="warning px-5 ">Order Now</Button>
                    </Card.Body>
                  </Card>
                  <Card text="dark" className="mb-2 border">
                    <Card.Header as="h2" className="border-0">
                      Best Selling Products
                    </Card.Header>
                    <Card.Body>
                      <Image
                        className="img-fluid rest-size1  "
                        src={ice1}
                        alt="logo2"
                      />
                      <ReactStars
                        classNames=""
                        count={5}
                        size={15}
                        color="#ddd"
                        activeColor="#ffd700"
                      />
                      <h3>Oreo Milk Shake</h3>
                      <p className="text-danger">$290</p>
                      <p className="border-bottom">
                        <span className="opacity-75 ">
                          Main Boulevard, Lahore, Punjab Pakistan - 5400
                        </span>
                      </p>
                      <Button variant="warning px-5 ">Order Now</Button>
                    </Card.Body>
                  </Card>
                </Slider>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
}

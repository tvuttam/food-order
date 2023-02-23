import React, { useState } from "react";
import { ice1, ice3, ice4, ice5, rolls1, garlic } from "../assets/images/index";
import { Image, Row, Col, Nav, Form, TabContainer, Tab } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import OrderButton from "./orderbutton";
import { Header } from "../components";
export default function Categories1() {
  const [readmore, setReadmore] = useState(true);
  const toggleReadMore = () => {
    setReadmore(!readmore);
  };
  return (
    <div>
      <Header />
      <TabContainer defaultActiveKey="first">
        <Card bg="light" text="dark" className="mb-2 border-0">
          <Card.Header as="h2">
            Categories
            <p className="text-warning">----</p>
          </Card.Header>
          <Card.Body>
            <Row className="text-center">
              <Col lg="4">
                <Nav
                  className="flex-column border-0"
                  style={{ maxWidth: "250px" }}
                ></Nav>
                <Nav.Item as="h4" className="detail-hover">
                  <Nav.Link eventKey="first">Sauces</Nav.Link>
                </Nav.Item>
              </Col>
              <Col lg="4">
                <Nav
                  className="flex-column"
                  style={{ maxWidth: "250px" }}
                ></Nav>
                <Nav.Item as="h4" className="detail-hover">
                  <Nav.Link eventKey="second">Nuggets</Nav.Link>
                </Nav.Item>
              </Col>
              <Col lg="4">
                <Nav
                  className="flex-column"
                  style={{ maxWidth: "250px" }}
                ></Nav>
                <Nav.Item as="h4" className="detail-hover">
                  <Nav.Link eventKey="third">Pizza</Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card text="dark" className="mb-2 border-0">
          <Card.Header as="h2">
            Sauces (4)
            <p className="text-warning">----</p>
          </Card.Header>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={garlic} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4 id="one">Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <OrderButton />
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={garlic} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={garlic} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Garlic Mayo Sauce</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        £110.00
                        <strong> £100.00</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice4} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice5} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={rolls1} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4 id="one">Mozzarella Sticks</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore
                    </p> ? (
                      <p className="text-danger">
                        <strong> £745.00</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="third">
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice1} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4 id="one">Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice1} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice3} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice4} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
              <div className="d-flex">
                <Col lg="3">
                  <Image className="img-fluid   " src={ice5} alt="logo2" />
                </Col>
                <Col lg="5" className="my-auto">
                  <h4>Oreo Milk Shake</h4>
                  {readmore ? (
                    <p onClick={toggleReadMore}>
                      {" "}
                      Oreo Milkshake Recipe -...readmore{" "}
                    </p> ? (
                      <p className="text-danger">
                        <strong> $290</strong>{" "}
                      </p>
                    ) : (
                      ""
                    )
                  ) : (
                    <p>
                      Oreo Milkshake Recipe - A super easy milkshake made with
                      vanilla ice cream, milk, and Oreo cookies! This sweet
                      treat is a hit with the whole family on a hot ?{" "}
                      <p className="readless" onClick={toggleReadMore}>
                        {" "}
                        Readless
                      </p>
                    </p>
                  )}
                </Col>
                <Col lg="4">
                  <div>
                    <InputGroup className="myquantity  my-5   border-0">
                      <Form.Control
                        className="rounded-1 p-1 "
                        id="quantity"
                        type="number"
                        step="1"
                        min="1"
                        max="500"
                        defaultValue={1}
                        name="quantity"
                      />
                      <Button
                        className="rounded-5 ms-3 "
                        variant="warning"
                        id="button-addon1"
                      >
                        order now
                      </Button>
                    </InputGroup>
                  </div>
                </Col>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Card>
      </TabContainer>
    </div>
  );
}

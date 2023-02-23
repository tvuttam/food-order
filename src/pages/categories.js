import React, { useEffect, useState } from "react";
import { ice1, ice3, ice4, ice5, rolls1 } from "../assets/images/index";
import axios from "axios";
import {
  Image,
  Row,
  Col,
  Nav,
  Form,
  TabContainer,
  Tab,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Order from "../components/order";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import OrderButton from "./orderbutton";
import { getProductOrder } from "../redux/action/productaction";
import { addtocart } from "../redux/action/cartaction";
import { useDispatch, useSelector } from "react-redux";
import { Header, Toast } from "../components";
import { ToastContainer } from "react-toastify";
import ReactStars from "react-rating-stars-component";
import { config } from "../redux/header";

export default function Categories() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };
  const history = useNavigate();
  const dispatch = useDispatch();
  const [readmore, setReadmore] = useState(true);
  const toggleReadMore = () => {
    setReadmore(!readmore);
  };
  let product = useSelector((state) => state.productData.getProduct);
  console.log("Result1212121", product);

  useEffect(() => {
    dispatch(getProductOrder());
  }, []);

  const getOrder = (product) => {
    product = {
      product_id: product._id,
      product_name: product.product_name,
      product_pic: product.product_pic,
      product_price: product.product_price,
      product_discript: product.product_discript,
      qty: product.product_qty,
    };
    return dispatch(addtocart(product));
  };

  const handleImage = async (item) => {
    console.log("item--->", item);
    const productimg = await axios.get(
      `${process.env.REACT_APP_API_URL}/get/${item}`,
      config
    );
    return productimg;
  };

  return (
    <div>
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
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
                  <Nav.Link eventKey="first">Appetizerts</Nav.Link>
                </Nav.Item>
              </Col>
              <Col lg="4">
                <Nav
                  className="flex-column"
                  style={{ maxWidth: "250px" }}
                ></Nav>
                <Nav.Item as="h4" className="detail-hover">
                  <Nav.Link eventKey="second">Rolls</Nav.Link>
                </Nav.Item>
              </Col>
              <Col lg="4">
                <Nav
                  className="flex-column"
                  style={{ maxWidth: "250px" }}
                ></Nav>
                <Nav.Item as="h4" className="detail-hover">
                  <Nav.Link eventKey="third">Shackes</Nav.Link>
                </Nav.Item>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card text="dark" className="mb-2 border-0">
          <Card.Header as="h2">
            Categories Shakes (10)
            <p className="text-warning">----</p>
          </Card.Header>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {product &&
                product.map((item, index) => {
                  return (
                    <div className="d-flex py-3 border-bottom" key={index}>
                      <Col lg="3">
                        <Image
                          className="img-fluid"
                          src={handleImage(item.product_pic)}
                          alt=""
                        />
                      </Col>
                      <Col lg="5" className="my-auto">
                        <h4 id="one">{item.product_name}</h4>
                        <p className="text-danger">
                          <strong> ${item.product_price}</strong>
                        </p>
                        <ReactStars
                          count={5}
                          size={30}
                          color="#4A4A4A"
                          activeColor="#ffd700"
                          value={item.rating}
                          edit={false}
                        />
                      </Col>
                      <Col lg="4">
                        <div className="">
                          <Button
                            className="px-5 my-4 "
                            variant="warning"
                            id="button-addon1"
                            onClick={() => {
                              Toast("Order added successfully!", "success");
                              setTimeout(() => {
                                getOrder(item);
                                setShow(!show);
                              }, 2000);
                            }}
                          >
                            Order now
                          </Button>
                        </div>
                      </Col>
                    </div>
                  );
                })}
              <Order value={show} handleClose={handleClose} />
            </Tab.Pane>
          </Tab.Content>
          <Tab.Content>
            <Tab.Pane eventKey="second">
              {product &&
                product.map((item, index) => {
                  return (
                    <div className="d-flex py-3 border-bottom " key={index}>
                      <Col lg="3">
                        <Image
                          className="img-fluid w-full   "
                          src={item.product_pic}
                          alt=""
                        />
                      </Col>
                      <Col lg="5" className="my-auto">
                        <h4 id="one">{item.product_name}</h4>
                        <p className="text-danger">
                          <strong> ${item.product_price}</strong>
                        </p>
                        <ReactStars
                          count={5}
                          size={30}
                          color="#4A4A4A"
                          activeColor="#ffd700"
                          value={item.rating}
                          edit={false}
                        />
                      </Col>
                      <Col lg="4">
                        <div className="">
                          <Button
                            className="px-5  my-4  "
                            variant="warning"
                            id="button-addon1"
                            onClick={() => {
                              Toast("Order added successfully!", "success");
                              setTimeout(() => {
                                getOrder(item);
                                setShow(!show);
                              }, 5000);
                            }}
                          >
                            Order now
                          </Button>
                        </div>
                      </Col>
                    </div>
                  );
                })}
              <Order value={show} handleClose={handleClose} />
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
                      treat is a hit with the whole family on a hot ?
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
                        <strong> $290</strong>
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
                      <OrderButton />
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
                      <OrderButton />
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
                      <OrderButton />
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

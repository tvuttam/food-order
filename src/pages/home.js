import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import ReactStars from "react-rating-stars-component";
import { Image, Row, Col } from "react-bootstrap";
import { BsWatch, BsMapFill } from "react-icons/bs";
import {} from "../assets/images/index";
import { Search } from "react-bootstrap-icons";
import "font-awesome/css/font-awesome.min.css";
import {
  qwl,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  wave,
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  res1,
  res2,
  res3,
  res4,
  res5,
  res6,
  res7,
  res8,
  res9,
  card1,
  card2,
  card3,
  card4,
  card6,
  card7,
  card8,
} from "../assets/images";
import { useNavigate } from "react-router";
import { Header } from "../components";
export default function Home() {
  const history = useNavigate();

  return (
    <>
    <Header/>

      <div className="bg-1">
        <Container className="p-5 ">
          <Row className=" ms-auto mt-5 ">
            <Col className="text-white  " lg="4" md="4">
              <Image className="my-3 img-fluid" src={qwl} alt="logo2" />
              <h1 className="text-size my-3 text-white ">
                Order Healthy And Fresh Food Any Time
              </h1>
              <span className="">
                Italian food makes people think of big family dinners. So you
                may want to position your restaurant as a place to bring the
                whole family.
              </span>
              <Form className="d-flex my-3 position-relative ">
                <Form.Control
                  className="py-2"
                  type="search"
                  placeholder="Recipe Name Here !"
                  aria-label="Disabled input example"
                />
                <Search className="text-primary position-absolute end-0  fs-3  m-2 " />
              </Form>

              <div className="all-logo text-white fs-3 my-3">
                Popular Restaurant
                <div className="my-3">
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo1}
                      alt="logo2"
                    />
                  </span>
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo2}
                      alt="logo2"
                    />
                  </span>
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo3}
                      alt="logo2"
                    />
                  </span>
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo4}
                      alt="logo2"
                    />
                  </span>
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo5}
                      alt="logo2"
                    />
                  </span>
                  <span>
                    <Image
                      className="img-logosize p-1 ms-1"
                      src={logo6}
                      alt="logo2"
                    />
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Image className="wave-img" src={wave} alt="logo2" />
      </div>
      <section className="mb-5">
        <Container>
          <Row className=" text-center">
            <div className="my-5">
              <h4 className="text-center my-3 text-warning">TOP FOODS</h4>
              <h1 className="text-center my-1">Our Categories</h1>
              <h1 className=" text-warning">-----</h1>
            </div>
            <Col lg="3 my-4">
              <div onClick={() => history("/foodshow")}>
                <Image className="img-fluid food-img" src={food1} alt="logo2" />
                <div>
                  <h2 className="my-3">Pizza</h2>
                  <span className="text-center">14 restornts products</span>
                </div>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img" src={food2} alt="logo2" />
              <div>
                <h2 className="my-3">Brost</h2>
                <span className="text-center">4 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img" src={food3} alt="logo2" />
              <div>
                <h2 className="my-3">Chicken</h2>
                <span className="text-center">5 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img  " src={food4} alt="logo2" />
              <div>
                <h2 className="my-3">Burgers</h2>
                <span className="text-center">19 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img" src={food5} alt="logo2" />
              <div>
                <h2 className="my-3">Pizza</h2>
                <span className="text-center">22 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img" src={food6} alt="logo2" />
              <div>
                <h2 className="my-3">Brost</h2>
                <span className="text-center">4 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img" src={food7} alt="logo2" />
              <div>
                <h2 className="my-3">Chicken</h2>
                <span className="text-center">10 restornts products</span>
              </div>
            </Col>
            <Col lg="3 my-4">
              <Image className="img-fluid food-img  " src={food3} alt="logo2" />
              <div>
                <h2 className="my-3">Burgers</h2>
                <span className="text-center">18 restornts products</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-2 mb-5">
        <Container>
          <Row className=" ">
            <div className="my-5">
              <h4 className="text-center my-3 text-warning">TOP RESTAURANTS</h4>
              <h1 className="text-center my-1">Papular Restaurant</h1>
              <h1 className="text-center text-warning">-----</h1>
            </div>
            <Col lg="4" className="mt-3">
              <div className="border " onClick={(e) => history("/restourent")}>
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
              <div className="border" onClick={(e) => history("/restourent1")}>
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

            <Col lg="4" className="mt-3">
              <div className="border ">
                <div className="position-relative">
                  <Image className="img-fluid  " src={res4} alt="" />
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
                    <Image className="img-fluid  " src={card4} alt="" />
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
                  <Image className="img-fluid  " src={res5} alt="" />
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
                    <Image className="img-fluid  " src={card6} alt="" />
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
                  <Image className="img-fluid  " src={res6} alt="" />
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
                    <Image className="img-fluid  " src={card7} alt="" />
                  </li>
                  <li className="fs-5 ps-3 text-danger ">
                    <BsWatch /> 12:01 am - 11:59 pm
                    <div className="text-secondary">
                      <BsMapFill /> Main Boulevard, Lahore
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4" className="mt-3">
              <div className="border">
                <div className="position-relative">
                  <Image className="img-fluid  " src={res7} alt="" />
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
                    <BsWatch /> 12:01 am - 11:59 pm
                    <div className="text-secondary">
                      <BsMapFill /> Main Boulevard, Lahore
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
            <Col lg="4" className="mt-3">
              <div className="border">
                <div className="position-relative">
                  <Image className="img-fluid  " src={res8} alt="" />
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
                    <Image className="img-fluid  " src={card4} alt="" />
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
                  <Image className="img-fluid  " src={res9} alt="" />
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
                    <Image className="img-fluid  " src={card8} alt="" />
                  </li>
                  <li className="fs-5 ps-3 text-danger ">
                    <BsWatch /> 12:01 am - 11:59 pm
                    <div className="text-secondary">
                      <BsMapFill /> Main Boulevard, Lahore
                    </div>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

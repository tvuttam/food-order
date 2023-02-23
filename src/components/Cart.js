import React from "react";
import Form from "react-bootstrap/Form";
import { Container, FormControl, InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { addtocart, removeItem } from "../redux/action/productaction";
import { Header } from "./header";

export const Cart = (props) => {
  const dispatch = useDispatch();
  let orderDetails = useSelector((state) => state.productData.cardItems);
  console.log("orderDetails.length", orderDetails.length);
  let amount =
    orderDetails.length &&
    orderDetails
      .map((item) => item.product_price * item.product_qty - 0)
      .reduce((Prev, Next) => Prev + Next);
  console.log("amount", amount);
  return (
    <div>
      <Container className="border-5 p-3 my-3">
        {orderDetails &&
          orderDetails.map((item, index) => {
            return (
              <>
                {" "}
                <div className="my-4 border-bottom">
                  <div className="d-flex justify-content-between">
                    <h2>{item.product_name}</h2>
                    <h4 className="text-primary px-5 ">{item.product_qty} </h4>
                  </div>
                  <h2 className="text-danger">{item.product_price}</h2>
                  <div></div>
                </div>
                <div className="ms-5">{item.qty}</div>
              </>
            );
          })}
        <InputGroup className="mt-5">
          <Form.Control
            placeholder="coupon code"
            aria-label="coupon code"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2" className="text-warning">
            <Button variant="warning">Apply coupon</Button>
          </InputGroup.Text>
        </InputGroup>
        <div className="my-5">
          <h3>Cart totals</h3>
          <div className="d-flex mt-5 border-bottom">
            <h4>Subtotal</h4>
            <h4 className="ms-auto px-3 ">£{amount}</h4>
          </div>
          
        </div>
        <h3 className="text-center my-5">
          <strong>Total :£ {amount}</strong>
        </h3>
        <Button variant="warning" className="my-5 px-5 ">
          Confirm Order
        </Button>
      </Container>
    </div>
  );
};
export default Cart;

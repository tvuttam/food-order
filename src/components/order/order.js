import React from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useSelector, useDispatch } from "react-redux";
import { BsCloud } from "react-icons/bs";
import { removeCart } from "../../redux/action/cartaction";

import { Delete, Plus, Minus } from "react-feather";

function Order({ value, handleClose }) {
  const dispatch = useDispatch();
  let orderDetails = useSelector((state) => state.cartData.cardItems);
  console.log("amouorderDetailsnt", orderDetails.data);

  let amount =
    orderDetails.data &&
    orderDetails.data
      .map((item) => item.product_price * item.qty - 0)
      .reduce((Prev, Next) => Prev + Next);
  console.log("amount", amount);

  const handeleDelate = (item) => {
    item = {
      _id: item._id,
      isInCart: 1,
    };
    return dispatch(removeCart(item));
  };

  return (
    <>
      <Offcanvas show={value}>
        <Offcanvas.Header closeButton onClick={() => handleClose()}>
          <Offcanvas.Title as="h1">Your Order</Offcanvas.Title>
        </Offcanvas.Header>
        <span className="text-warning fs-3 text-center">
          ------------------------------------
        </span>
        <Offcanvas.Body>
          {orderDetails.data ? (
            orderDetails.data.map((item, index) => {
              return (
                <>
                  {" "}
                  <div className="d-flex justify-content-between py-3">
                    <div className="">
                      <h2>{item.product_name}</h2>
                      <div>
                        {" "}
                        <h5 className="text-danger">
                          {item.product_price}{" "}
                        </h5>{" "}
                        {/* <BsThermometer
                            onClick={() => {
                              dispatch(removeItem(item._id));
                            }}
                          /> */}
                      </div>
                    </div>
                    <div className="ms-auto text-warning d-flex ">
                      {" "}
                      <p >
                        <Plus className="border border-danger rounded-5 bg-danger" 
                          // onClick={handleIncere}
                        />
                      </p>{" "}
                      <p className="mx-1">
                        <Minus className="border border-secondary bg-secondary rounded-5 " />
                      </p>{" "}
                    </div>
                    <h3 className="my-auto ms-auto">{item.qty}</h3>
                    <div className="my-auto text-danger px-2">
                      {" "}
                      <Delete onClick={() => handeleDelate(item)} />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="d-flex justify-content-between py-3">
              <div className="">
                <h2>------</h2>
                <div>
                  {" "}
                  <h5 className="text-danger">----</h5>
                </div>
              </div>
              <h4 className="my-auto">-------</h4>
            </div>
          )}

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
          <div className="py-5">
            <h3>Cart totals</h3>
            <div className="d-flex mt-5 border-bottom">
              <h4>Subtotal:</h4>
              <h4 className="ms-auto">£{amount} </h4>
            </div>
            <h3 className="text-center ">
              <strong>Total :£{amount} </strong>
            </h3>
            <div className="d-flex justify-content-end">---</div>
          </div>
          <Button variant="warning" className="my-5 px-5 ">
            Confirm Order
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Order;

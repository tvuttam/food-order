import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Order from "../components/order";
export default function Orderbutton(  ) {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(!show);
  };
  return (
    <div>
      <Button
        className="rounded-5 ms-3 "
        variant="warning"
        id="button-addon1"
        onClick={() => {
          setShow(!show);
        }}
      >
        order now
      </Button>
      <Order value={show} handleClose={handleClose} />
    </div>
  );
}

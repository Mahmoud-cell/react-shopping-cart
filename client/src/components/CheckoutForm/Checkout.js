import React from "react";
import "../../css/CheckoutForm/Checkout.css";

// import { Bounce } from "react-awesome-reveal";
import Input from "../Input/Input";
import { words } from "../../words";

export default function Checkout(props) {
  return (
    <>
      {props.showForm && (
        <div className="checkout-form">
          <span
            className="close-icon"
            onClick={() => {
              props.setShowForm(false);
            }}
          >
            &times;
          </span>
          {/* <Bounce> */}
            <form onSubmit={props.submitOrder}>
              <Input
                label={words.name }
                type="text"
                name="name"
                onChange={props.handleChange}
              />

              <Input
                label="Email"
                type="email"
                name="email"
                onChange={props.handleChange}
              />

              <div>
                <button type="submit"> {words.Checkout} </button>
              </div>
            </form>
          {/* </Bounce> */}
        </div>
      )}
    </>
  );
}

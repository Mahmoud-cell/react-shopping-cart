import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import { Bounce } from "react-awesome-reveal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

export default function Cart(props) {
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState("");
  const submitOrder = (e) => {
    e.preventDefault();

    const order = {
      name: value.name,
      email: value.email,
    };
  };

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ? (
          "Empty Cart"
        ) : (
          <p>There is/are {props.cartItems.length} products in cart</p>
        )}
      </div>
      <Bounce bottom cascade>
        <div className="cart-items">
          {props.cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.imageUrl} alt="" />
              <div className="cart-info">
                <div>
                  <p>title: {item.title}</p>
                  <p> qty: {item.qty}</p>
                  <p>price: {item.price} $</p>
                </div>
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </Bounce>
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total:{" "}
            {props.cartItems.reduce((acc, p) => {
              return (acc += p.price);
            }, 0)}
            $
          </div>
          <button onClick={() => setShowForm(true)}>select products</button>
        </div>
      )}

      <CheckoutForm
        showForm={showForm}
        submitOrder={submitOrder}
        setShowForm={setShowForm}
        handleChange={handleChange}
      />
    </div>
  );
}

import React, { useState } from "react";
import "../../css/Cart/Cart.css";
// import { Bounce } from "react-awesome-reveal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";
import OrderModal from "./OrderModal";

const Cart = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [order, setOrder] = useState(false);
  const [value, setValue] = useState("");

  const submitOrder = (e) => {
    e.preventDefault();
    const order = {
      name: value.name,
      email: value.email,
    };
    setOrder(order);
  };
  const closeModal = () => {
    setOrder(false);
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
      {/* <Bounce bottom cascade> */}
      {/* MOADL */}

      <OrderModal
        order={order}
        closeModal={closeModal}
        cartItems={props.cartItems}
      ></OrderModal>
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
              <button onClick={() => props.removeCart(item)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      {/* </Bounce> */}
      {props.cartItems.length !== 0 && (
        <div className="cart-footer">
          <div className="total">
            Total:
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
};

export default connect(
  (state) => {
    return {
      cartItems: state.cart.cartItems,
    };
  },
  { removeCart }
)(Cart);

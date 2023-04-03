import React, { useState } from "react";
import "../../css/Cart/Cart.css";
// import { Bounce } from "react-awesome-reveal";
import Modal from "react-modal";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { connect } from "react-redux";
import { removeCart } from "../../store/actions/cart";

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
  const closeMoal = () => {
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
      <Modal isOpen={order} onRequestClose={closeMoal}>
        <div className="order-info">
          <span className="close-icon" onClick={closeMoal}>&times;</span>
          <p className="alert-success"> Order done successfully </p>
          <table>
            <tr>
              <td> Name: </td>
              <td> {order.name} </td>
            </tr>
            <tr>
              <td> Email: </td>
              <td> {order.email} </td>
            </tr>
            <tr>
              <td> Total: </td>
              <td>
                {props.cartItems.reduce((a, p) => {
                  return a + p.price;
                }, 0)}
              </td>
            </tr>
            <tr>
              <td>Selected Items:</td>
              <td>
                {" "}
                {props.cartItems.map((p) => (
                  <div className="cart-data">
                    <p> Number of these products is: {p.qty}</p>
                    <p> Title of these products is: {p.title}</p>
                  </div>
                ))}{" "}
              </td>
              <td> {/* {order.email} */} </td>
            </tr>
          </table>
        </div>
      </Modal>
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

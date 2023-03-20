import React from "react";
import "../../css/Cart/Cart.css";
export default function Cart(props) {
  return (
    <div className="cart-wrapper">
      <div className="cart-title">
        {props.cartItems.length === 0 ?
         "Empty Cart" : 
      <p>There is/are {props.cartItems.length} products in cart</p>}
      </div>
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
                <button onClick={() => props.removeFromCart(item)} >Remove</button>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

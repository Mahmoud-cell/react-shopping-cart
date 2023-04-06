import { CLEAR_CART, CRETE_ORDER, CLEAR_ORDER } from "./types";

export const createOrder = (order) => {
  //order table => name & email
  return (dispatch) => {
    fetch("api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: CRETE_ORDER,
          data: {
            order: data,
          },
        });
      });
      localStorage.clear('cartItems');
      dispatch({type: CLEAR_CART})
  };
};

export const clearOrder =()=> {
  return (dispatch) =>{
    dispatch({
      type: CLEAR_ORDER,
    })
  }
}
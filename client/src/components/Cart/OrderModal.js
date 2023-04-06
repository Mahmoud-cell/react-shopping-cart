import React from "react";
import Modal from "react-modal";

export default function OrderModal(props) {
  const { order, closeModal, cartItems } = props;
  return (
    <>
      {order && (
        <Modal isOpen={order} onRequestClose={closeModal}>
          <div className="order-info">
            <span className="close-icon" onClick={closeModal}>
              &times;
            </span>
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
                  {cartItems.reduce((a, p) => {
                    return a + p.price;
                  }, 0)}
                </td>
              </tr>
              <tr>
                <td>Selected Items:</td>
                <td>
                  {" "}
                  {cartItems.map((p) => (
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
      )}
    </>
  );
}

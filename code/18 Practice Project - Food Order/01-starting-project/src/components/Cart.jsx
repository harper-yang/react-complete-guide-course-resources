import {Modal} from "./UI/Modal.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import {Button} from "./UI/Button.jsx";
import {UserProgressContext} from "../context/UserProgressContext.jsx";

export const Cart = () => {

  const {items} = useContext(CartContext);

  const {progress, hideModal, showCheckout} = useContext(UserProgressContext);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return <Modal className="modal" open={progress === "cart"}>
    <h2>Your cart</h2>
    <ul>
      {items.map(item => (
          <li key={item.id}>{item.name} - {item.quantity}</li>
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={() => hideModal()}>Close</Button>
      <Button onClick={() => showCheckout()}>Go to checkout</Button>
    </p>
  </Modal>
}

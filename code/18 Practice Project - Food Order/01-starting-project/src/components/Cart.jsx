import {Modal} from "./UI/Modal.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import {Button} from "./UI/Button.jsx";
import {UserProgressContext} from "../context/UserProgressContext.jsx";
import {CartItem} from "./CartItem.jsx";

export const Cart = () => {

  const {items, addItem, deleteItem} = useContext(CartContext);

  const {progress, hideModal, showCheckout} = useContext(UserProgressContext);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return <Modal className="modal" open={progress === "cart"} onClose={progress === "cart" ? hideModal : null}>
    <h2>Your cart</h2>
    <ul>
      {items.map(item => (
          <CartItem key={item.id}
                    price={item.price}
                    quantity={item.quantity}
                    name={item.name}
                    onIncrease={() => addItem(item)}
                    onDecrease={() => deleteItem(item.id)}/>
      ))}
    </ul>
    <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
    <p className="modal-actions">
      <Button textOnly onClick={hideModal}>Close</Button>
      {items.length > 0 && <Button onClick={showCheckout}>Go to checkout</Button>}
    </p>
  </Modal>
}

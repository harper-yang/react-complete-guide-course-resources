import {Modal} from "./UI/Modal.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import {Input} from "./UI/Input.jsx";
import {Button} from "./UI/Button.jsx";
import {UserProgressContext} from "../context/UserProgressContext.jsx";
import {useHttp} from "../hooks/useHttp.js";
import {Error} from "./UI/Error.jsx";

const httpConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
}

export const Checkout = () => {

  const {items, clearCart} = useContext(CartContext);

  const {progress, hideCheckout} = useContext(UserProgressContext);

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const {data, isLoading, error, sendRequest, clearData} = useHttp("http://localhost:3000/orders", httpConfig);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    sendRequest(JSON.stringify({
          order: {
            items,
            customer: customerData
          }
        })
    )
  }

  const handleFinish = () => {
    hideCheckout();
    clearCart();
    clearData();
  }

  let action;
  if (isLoading) {
    action = <span>Order is submitting...</span>
  } else {
    action = <Button>Submit Order</Button>
  }

  if (data && !error) {
    return <Modal className="modal" open={progress === "checkout"}
                  onClose={handleFinish}>
      <h2>Success!</h2>
      <p>Your order is submitted successfully</p>
      <p className="modal-actions">
        <Button onClick={handleFinish}>Okay</Button>
      </p>
    </Modal>
  }

  return (
      <Modal className="modal" open={progress === "checkout"} onClose={progress === "checkout" ? hideCheckout : null}>
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total amount: {currencyFormatter.format(totalPrice)}</p>

          <Input label="Full Name" id="name" type="text"/>
          <Input label="Email Adress" id="email" type="email"/>
          <Input label="Street" id="street" type="text"/>
          <div className="control-row">
            <Input label="Post Code" id="postal-code" type="text"/>
            <Input label="City" id="city" type="text"/>
          </div>

          {error && <Error title="Submit Order is failed" error={error}/>}

          <p className="modal-actions">
            <Button type="button" textOnly onClick={hideCheckout}>Close</Button>
            {action}
          </p>
        </form>
      </Modal>
  );
}

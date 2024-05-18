import {uiActions} from "./ui-slice";

export const sendCart = (cart) => {
  return async (dispatch) => {
    dispatch(uiActions.showNotification({
      status: "pending",
      title: "Pending...",
      message: "The request is pending"
    }))

    const saveCart = async () => {
      const response = await fetch("https://my-react-course-database-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json", {
        method: "PUT",
        body: JSON.stringify(cart),
      })

      if (!response.ok) {
        throw new Error("save cart failed..");
      }
    }

    try {
      await saveCart();

      dispatch(uiActions.showNotification({
        status: "success",
        title: "success!",
        message: "The request is successfully"
      }))
    } catch (e) {

      dispatch(uiActions.showNotification({
        status: "error",
        title: "error...",
        message: "The request has error"
      }))
    }
  }
}

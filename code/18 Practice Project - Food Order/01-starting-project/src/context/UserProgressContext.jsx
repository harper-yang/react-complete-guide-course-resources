import {createContext, useState} from "react";

export const UserProgressContext = createContext({
  progress: "", // Value can be cart or checkout
  showModal: () => {
  },
  hideModal: () => {

  },
  showCheckout: () => {
  },
  hideCheckout: () => {
  },
})

export const UserProgressContextProvider = ({children}) => {
  const [userProgress, setUserProgress] = useState("");

  const showModal = () => setUserProgress("cart");
  const hideModal = () => setUserProgress("");
  const showCheckout = () => setUserProgress("checkout");
  const hideCheckout = () => setUserProgress("");

  const userProgressCtx = {
    progress: userProgress,
    showModal,
    hideModal,
    showCheckout,
    hideCheckout
  }
  
  return <UserProgressContext.Provider value={userProgressCtx}>
    {children}
  </UserProgressContext.Provider>
}

import {createContext, useReducer} from "react";

export const CartContext = createContext({
  items: [],
  addItem: () => {
  },
  deleteItem: () => {
  },
  clearCart: () => {
  }
})

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => action.item.id === item.id);
    const updatedItems = [...state.items];
    if (existingCartItemIndex !== -1) {
      const existingItem = state.items[existingCartItemIndex];
      updatedItems[existingCartItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
    } else {
      updatedItems.push({
        ...action.item,
        quantity: 1,
      })
    }
    return {
      ...state,
      items: updatedItems,
    }
  }

  if (action.type === "DELETE_ITEM") {
    const existingCartItemIndex = state.items.findIndex((item) => action.id === item.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];
    if (existingItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      updatedItems[existingCartItemIndex] = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
    }
    return {
      ...state,
      items: updatedItems,
    }
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      items: [],
    }
  }
}

export const CartContextProvider = ({children}) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

  const addItem = (item) => {
    dispatchCartAction({type: "ADD_ITEM", item: item});
  }

  const deleteItem = (id) => {
    dispatchCartAction({type: "DELETE_ITEM", id: id});
  }

  const clearCart = () => {
    dispatchCartAction({type: "CLEAR_CART"})
  }

  const cartContext = {
    items: cart.items,
    addItem,
    deleteItem,
    clearCart
  }

  return <CartContext.Provider value={cartContext}>
    {children}
  </CartContext.Provider>
}

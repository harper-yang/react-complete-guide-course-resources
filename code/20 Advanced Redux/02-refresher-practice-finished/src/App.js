import {useDispatch, useSelector} from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useEffect} from "react";
import Notification from "./components/UI/Notification";

import {sendCart} from "./store/cart-slice-fn";

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);
  console.log(notification)
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sendCart(cart))

  }, [cart, dispatch]);
  return (
      <>
        {notification && <Notification {...notification}/>}
        <Layout>
          {showCart && <Cart/>}
          <Products/>
        </Layout>
      </>

  );
}

export default App;

import logoImg from "../assets/logo.jpg"
import {Button} from "./UI/Button.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";
import {UserProgressContext} from "../context/UserProgressContext.jsx";

export const Header = () => {

  const {items} = useContext(CartContext);

  const {showModal} = useContext(UserProgressContext);

  const handleClick = () => showModal();

  const totalCartItems = items.reduce((totalCount, item) => {
    return totalCount + item.quantity
  }, 0);

  return <header id="main-header">
    <div id="title">
      <img src={logoImg} alt="restaurant"/>
      <h1>React food</h1>
    </div>
    <nav>
      <Button textOnly onClick={handleClick}>Cart ({totalCartItems})</Button>
    </nav>
  </header>
}

import {currencyFormatter} from "../util/formatting.js";
import {Button} from "./UI/Button.jsx";
import {useContext} from "react";
import {CartContext} from "../context/CartContext.jsx";

export const MealItem = ({meal}) => {

  const {addItem} = useContext(CartContext)

  const handleClick = () => {
    addItem(meal);
  }

  return <li className="meal-item">
    <article>
      <img src={`http://localhost:3000/${meal.image}`} alt={meal.image}/>
      <div>
        <h3>{meal.name}</h3>
        <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
        <p className="meal-item-description">{meal.description}</p>
      </div>
      <p className="meal-item-actions">
        <Button onClick={handleClick}>Add to cart</Button>
      </p>
    </article>
  </li>;
}

import {useEffect, useState} from "react";
import {MealItem} from "./MealItem.jsx";

export const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:3000/meals");
      if (!response.ok) {
        // TODO
      }
      const meals = await response.json();
      setLoadedMeals(meals);
    })();
  }, []);

  return (
      <ul id="meals">
        {loadedMeals.map((meal) => {
          return <MealItem meal={meal} key={meal.id}/>
        })}
      </ul>

  )
}

import {MealItem} from "./MealItem.jsx";
import {useHttp} from "../hooks/useHttp.js";
import {Error} from "./UI/Error.jsx";

const mealsHttpConfig = {};
export const Meals = () => {
  const {data: loadedMeals, isLoading, error} = useHttp("http://localhost:3000/meals", mealsHttpConfig, [])

  if (isLoading) {
    return <p className="center">data is loading....</p>
  }

  if (error) {
    return <Error title="Failed to fetch the meals" error={error}/>
  }

  return (
      <ul id="meals">
        {loadedMeals.map((meal) => {
          return <MealItem meal={meal} key={meal.id}/>
        })}
      </ul>

  );
}

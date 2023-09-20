import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";

const MealsByCategory = () => {
  const mealsByCategory = useLoaderData();
  const { meals } = mealsByCategory;
  console.log(meals);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-20 text-center">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </>
  );
};

export default MealsByCategory;

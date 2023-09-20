import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { idMeal, strMeal, strMealThumb } = meal;
  const navigate = useNavigate();
  const handleMealDetail = () => navigate(`/:${idMeal}`);
  return (
    <div onClick={handleMealDetail}>
      <img className="rounded-lg" src={strMealThumb} alt={strMeal} />
      <p className="mt-3">{strMeal}</p>
    </div>
  );
};

export default Meal;

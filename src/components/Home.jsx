import { Outlet, useLoaderData } from "react-router-dom";
import CategoriesBtn from "./CategoriesBtn";

const Home = () => {
  const mealCategories = useLoaderData();
  
  return (
    <div>
      <div id="category" className="flex gap-6 text-lg font-medium flex-wrap justify-center">
        {mealCategories.categories.map((category) => (
          <CategoriesBtn key={category.idCategory} category={category} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Home;

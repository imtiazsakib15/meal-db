import { NavLink } from "react-router-dom";

const CategoriesBtn = ({ category }) => {
  const { strCategory } = category;

  return (
    <>
      <NavLink
        className="bg-orange-500 px-4 py-2 rounded-sm"
        to={`/${strCategory}`}
      >
        {strCategory}
      </NavLink>
    </>
  );
};

export default CategoriesBtn;

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#23180d] navbar">
      <div className="container mx-auto flex justify-between items-center px-16 py-6">
        <Link
          className="text-5xl text-amber-400 font-extrabold font-serif italic"
          to="/"
        >
          Meal Db
        </Link>
        <div className="text-white text-xl font-semibold space-x-7">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/orders">Orders</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

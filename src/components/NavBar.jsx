import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg-[#23180d] text-white navbar">
      <div className="container mx-auto flex justify-between items-center px-16 py-6">
        <Link
          className="text-5xl text-[#FF9827] font-extrabold font-serif italic"
          to="/"
        >
          Meal Db
        </Link>
        <div className="flex items-center divide-x-2">
          <input
            type="text"
            placeholder="Search for a Meal…"
            className="py-2 px-4 rounded-l-md"
          />
          <button className="bg-white text-black py-2 px-3 rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        <div className="text-lg space-x-4">
          <NavLink className="p-2 rounded" to="/">
            Home
          </NavLink>
          <NavLink className="p-2 rounded" to="/orders">
            Orders
          </NavLink>
          <NavLink className="p-2 rounded" to="/about">
            About
          </NavLink>
          <NavLink className="p-2 rounded" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navBtns = ["Home", "Favorites", "Login"];

  return (
    <div className="max-w-[1440px] mx-auto shadow-lg pb-4">
      <nav className=" pt-3 mx-auto flex justify-between w-[80%]">
        <h1 className="font-bold text-3xl text-white">Phone Shop</h1>

        <ul className="flex justify-center items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-medium text-xl ${
                isActive
                  ? " text-yellow-500 border-b-2 border-white"
                  : "text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `font-medium text-xl ${
                isActive
                  ? " text-yellow-500 border-b-2 border-white"
                  : "text-white"
              }`
            }
          >
            Favorites
          </NavLink>

          <NavLink
            to="/login"
            className={({ isActive }) =>
              `font-medium text-xl ${
                isActive
                  ? " text-yellow-500 border-b-2 border-white"
                  : "text-white"
              }`
            }
          >
            Login
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

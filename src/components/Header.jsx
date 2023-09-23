import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navBtns = ["Home", "Favorites", "Login"];

  return (
    <div className="max-w-[1440px] mx-auto">
      <nav className="pt-3 mx-auto flex justify-between w-[80%]">
        <h1 className="font-bold text-3xl">Phone Shop</h1>

        <ul className="flex justify-center items-center gap-8">
          {navBtns.map((btn) => (
            <NavLink className="font-medium text-xl" key={btn}>
              {btn}
            </NavLink>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;

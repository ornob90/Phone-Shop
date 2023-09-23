import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="text-black">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;

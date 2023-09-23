import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="text-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;

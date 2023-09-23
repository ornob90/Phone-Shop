import React, { useEffect, useState } from "react";
import Header from "../components/Navbar";
import Banner from "../components/Banner";
import PhoneCollection from "../components/PhoneCollection";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Banner />
      <PhoneCollection />
    </div>
  );
};

export default Home;

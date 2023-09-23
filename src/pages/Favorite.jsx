import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFavFromLS } from "../utilities/localStorage";
import Phone from "../components/Phone";

const Favorite = () => {
  const [favPhones, setFavPhones] = useState([]);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("phone.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  useEffect(() => {
    console.log(phones);
    const favPhonesID = getFavFromLS();
    const favPhones = phones.filter((phone) => favPhonesID.includes(phone.id));
    setFavPhones(favPhones);
  }, [phones]);

  return (
    <div className="max-w-[1440px] mx-auto w-[90%] grid grid-cols-4">
      {favPhones.map((phone) => (
        <Phone key={phone.id} phone={phone} pageName="favorite" />
      ))}
    </div>
  );
};

export default Favorite;

import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getFavFromLS, deleteFavFromLS } from "../utilities/localStorage";
import Phone from "../components/Phone";

const Favorite = () => {
  const [favPhones, setFavPhones] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("phone.json")
      .then((res) => res.json())
      .then((data) => setPhones(data));
  }, []);

  //   const phones = useLoaderData();

  useEffect(() => {
    const favPhonesID = getFavFromLS();
    const favPhones = phones.filter((phone) => favPhonesID.includes(phone.id));
    setFavPhones(favPhones);
    console.log(phones);
  }, [phones]);

  const handleRemoveFromFav = (id) => {
    deleteFavFromLS(id);
    // Update the favPhones state to trigger a re-render
    setFavPhones((prevFavPhones) =>
      prevFavPhones.filter((phone) => phone.id !== id)
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto w-[90%] ">
      <div className="flex justify-center">
        <h1 className="w-max text-3xl pt-10 mb-5 border-b-orange-700 border-b-2 text-white font-bold text-center">
          5000$
        </h1>
      </div>

      <div className="grid grid-cols-4">
        {favPhones.map((phone) => (
          <Phone
            key={phone.id}
            phone={phone}
            pageName="favorite"
            handleRemoveFromFav={handleRemoveFromFav}
          />
        ))}
      </div>
    </div>
  );
};

export default Favorite;

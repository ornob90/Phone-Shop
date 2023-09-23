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

  // const phones = useLoaderData();

  useEffect(() => {
    const favPhonesID = getFavFromLS();
    const favPhones = phones.filter((phone) => favPhonesID.includes(phone.id));
    handleTotalPrice(favPhones);
    setFavPhones(favPhones);
  }, [phones]);

  const handleTotalPrice = (favPhones) => {
    if (favPhones.length > 0) {
      const total = favPhones.reduce((acc, cur) => acc + cur.price, 0);
      setTotalPrice(total);
    } else {
      setTotalPrice(0);
    }
  };

  const handleRemoveFromFav = (id) => {
    deleteFavFromLS(id);
    // Update the favPhones state to trigger a re-render
    setFavPhones((prevFavPhones) => {
      const newFav = prevFavPhones.filter((phone) => phone.id !== id);
      handleTotalPrice(newFav);
      return newFav;
    });
  };

  return (
    <div className="max-w-[1440px] mx-auto w-[90%] ">
      <div className="flex justify-center">
        <h1 className="pt-10 mb-5 text-3xl font-bold text-center text-white border-b-2 w-max border-b-orange-700">
          {totalPrice}$
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

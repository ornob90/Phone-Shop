import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { addFavInLS } from "../utilities/localStorage";
const PhoneDetails = () => {
  const { id } = useParams();
  const phones = useLoaderData();

  const phone = phones.find((phone) => phone.id === id);

  const handleAddFavorite = () => {
    addFavInLS(id);
  };

  return (
    <div className="flex max-w-[1440px] mx-auto w-[90%] justify-between items-center">
      <div className="w-[40%] h-[70vh] pt-10">
        <img src={phone.image} alt="" />
      </div>
      <div className="w-[60%] pl-20 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">{phone.brand_name}</h1>
        <p className="text-2xl font-medium text-gray-500">{phone.phone_name}</p>
        <div>
          <button
            onClick={handleAddFavorite}
            className=" text-orange-400 btn btn-outline"
          >
            ADD TO FAVORITES
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;

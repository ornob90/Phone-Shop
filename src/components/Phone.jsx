import React from "react";
import { NavLink } from "react-router-dom";
import { deleteFavFromLS } from "../utilities/localStorage";

const Phone = ({ phone, pageName, handleRemoveFromFav }) => {
  const { id, image, phone_name, brand_name, price, rating } = phone;

  return (
    <div className="text-white font-bold text-md grid grid-cols-1 p-5 rounded-lg">
      <div className="h-[300px] w-full">
        <img
          src={image}
          alt={`${phone_name} Img`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3 pt-3">
        <p>{brand_name}</p>
        <div className="flex justify-between">
          <p>{phone_name}</p>
          <p>
            $<span>{price}</span>
          </p>
        </div>
        {pageName !== "favorite" ? (
          <NavLink to={`phone/${id}`}>
            <button className="btn btn-primary">See Details</button>
          </NavLink>
        ) : (
          <button
            onClick={() => handleRemoveFromFav(id)}
            className="btn btn-primary"
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Phone;

import React from "react";
import { NavLink } from "react-router-dom";
// {
//     "id": "1",
//     "image": "https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg",
//     "phone_name": "iPhone 14 Pro Max",
//     "brand_name": "Apple",
//     "price": 799.99,
//     "rating": 4.7
//   },
const PhoneDetails = () => {
  return (
    <div className="flex max-w-[1440px] mx-auto w-[90%] justify-between items-center">
      <div className="w-[40%] h-[70vh] pt-10">
        <img
          src="https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg"
          alt=""
        />
      </div>
      <div className="w-[60%] pl-20 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-white">Apple</h1>
        <p className="text-2xl font-medium text-gray-500">Iphone 12</p>
        <div>
          <button className=" text-orange-400 btn btn-outline">
            ADD TO FAVORITES
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;

import React from "react";

// {
//     "id": "1",
//     "image": "https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg",
//     "phone_name": "iPhone 14 Pro Max",
//     "brand_name": "Apple",
//     "price": 799.99,
//     "rating": 4.7
//   },

const Phone = () => {
  return (
    <div className="text-white font-bold text-md grid grid-cols-1 p-5 rounded-lg">
      <div className="h-[300px] w-full">
        <img
          src="https://static-01.daraz.com.bd/p/b802b8ebb0a784ec791caa75e2d4de66.jpg"
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-3 pt-3">
        <p>Apple</p>
        <div className="flex justify-between">
          <p>iphone 12 pro max</p>
          <p>
            $<span>699.99</span>
          </p>
        </div>
        <button className="btn btn-primary">See Details</button>
      </div>
    </div>
  );
};

export default Phone;

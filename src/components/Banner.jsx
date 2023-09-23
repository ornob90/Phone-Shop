import React from "react";

const Banner = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-banner min-h-[300px] h-[80vh] flex justify-center items-center w-full">
      <div className="flex justify-center gap-2 w-full">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered max-w-xs"
        />
        <button className="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default Banner;

import React, { useEffect, useState } from "react";
import Phone from "./Phone";

const PhoneCollection = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch("phone.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPhones(data);
      });
  }, []);
  return (
    <div className="mx-auto max-w-[1440px] grid grid-cols-4 gap-4 w-[95%]">
      {phones.map((phone) => (
        <Phone key={phone.id} phone={phone} />
      ))}
    </div>
  );
};

export default PhoneCollection;

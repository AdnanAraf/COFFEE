import React from "react";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div>
      <div className="flex   card card-side bg-[#F5F4F1] shadow-xl m-[50px] w-[648px] h-[300px]">
        <div>
          <figure>
            <img src={photo} alt="Movie" />
          </figure>
        </div>
        <div className="ml-[60px] my-[30px] ">
          <h2 className="mt-[20px]">
            {" "}
            <span className="font-semibold  text-[20px]">Name:</span> {name}
          </h2>
          <p className="mt-[20px]">
            {" "}
            <span className="font-semibold  text-[20px]">Title:</span>
            {category}
          </p>
          <p className="mt-[20px]">
            {" "}
            <span className="font-semibold  text-[20px]">Quantity:</span>
            {quantity}
          </p>
          <div>
            <button className="bg-[#efba1c] mt-[50px] h-[50px] w-[150px] rounded-lg font-rancho font-bold text-[20px]">
              ViewDetails
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

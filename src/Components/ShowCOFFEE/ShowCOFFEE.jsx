import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../CoffeeCard/CoffeeCard";
import Card from "../Card/Card";

const ShowCOFFEE = () => {
  const coffees = useLoaderData();
  console.log(coffees);

  return (
    <div>
      <div className="mx-[735px] mt-[635px] ">
        <h1 className="font-rancho text-[#331A15] font-bold text-[30px] w-[200px]">
          Our Popular Product
        </h1>
        <Link to="addcoffee">
          <button className=" h-[30px] w-[100px] font-rancho bg-[#e5c25a] font-bold mx-[50px]">
            Add to Coffee
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-2 ">
        {coffees.map((item) => {
          return <CoffeeCard coffee={item} />;
        })}
      </div>
    </div>
  );
};

export default ShowCOFFEE;

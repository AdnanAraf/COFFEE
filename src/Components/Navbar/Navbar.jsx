import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <img className="relative " src="./public/Rectangle 1.png"></img>
          <img
            className="absolute top-0 left-[131px]"
            src="./public/logo1 1.png"
          ></img>
          <h1 className="absolute top-0 text-white left-[231px] font-rancho text-[40px] p-[15px]">
            Espresso Emporium
          </h1>
        </div>
        <div className="left-[1000px] absolute flex m-[25px] gap-12">
          <Link className="text-white m-[15px] " to="/home">
            Home
          </Link>
          <Link className="text-white  m-[15px]" to="/About">
            About
          </Link>
          <Link className="text-white" to="/login">
            <button className="btn btn-accent">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

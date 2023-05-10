import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const NavbarandFooter = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  );
};

export default NavbarandFooter;

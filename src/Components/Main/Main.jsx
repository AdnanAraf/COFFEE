import React from "react";
import UpdateCoffee from "../Update/UpdateCoffee";
import { Outlet } from "react-router-dom";
import AddCoffeeForm from "../AddCoffeeForm/AddCoffeeForm";

const Main = () => {
  return (
    <div>
      <UpdateCoffee />
      <AddCoffeeForm />
    </div>
  );
};

export default Main;

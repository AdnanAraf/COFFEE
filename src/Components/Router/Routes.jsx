import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Main from "../Main/Main";
import NavbarandFooter from "../NavbarandFooter/NavbarandFooter";
import AddCoffeeForm from "../AddCoffeeForm/AddCoffeeForm";
import ShowCOFFEE from "../ShowCOFFEE/ShowCOFFEE";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <NavbarandFooter />,
    children: [
      {
        path: "/",
        element: <ShowCOFFEE />,
        loader: () => fetch("http://localhost:5000/COFFE"),
      },
      {
        path: "addcoffee",
        element: <AddCoffeeForm />,
      },
    ],
  },
]);

export default Routes;

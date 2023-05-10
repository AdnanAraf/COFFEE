import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import Main from "../Main/Main";
import NavbarandFooter from "../NavbarandFooter/NavbarandFooter";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <NavbarandFooter />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
    ],
  },
]);

export default Routes;

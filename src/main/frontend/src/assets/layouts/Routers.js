import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "./MainLayout";
import { HomePage } from "../pages";

const context = "/changepPassphrase";
const Routers = () => {
  const routing = useRoutes([
    {
      path: context,
      element: <MainLayout />,
      children: [
        {
          path: `${context}/`,
          element: <HomePage />,
        },
      ],
    },
  ]);
  return routing;
};

export default Routers;

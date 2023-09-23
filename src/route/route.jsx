import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import Favorite from "../pages/Favorite";
import Login from "../pages/Login";
import PhoneDetails from "../pages/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("phone.json"),
      },
      {
        path: "/favorite",
        element: <Favorite />,
        loader: () => fetch("phone.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/phone/:id",
        element: <PhoneDetails />,
        loader: () => fetch("phone.json"),
      },
    ],
  },
]);

export default router;

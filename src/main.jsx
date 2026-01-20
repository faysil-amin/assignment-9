import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomeLayout from "./Layout/HomeLayout";
import Home from "./Component/Home";
import ErroPage from "./Component/ErrorPage/ErroPage";
import Profile from "./Component/Profile/Profile";
import About from "./Component/About/About";
import Auth from "./Layout/Auth";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Read from "./Component/Read/Read";
import AuthProvider from "./Component/AuthContainer/AuthProvider";
import PrivetRoute from "./Component/PrivetRoute/PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../game.json"),
      },
    ],
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/about",
    Component: About,
  },
  {
    path: "*",
    Component: ErroPage,
  },
  {
    path: "/read/:id",
    loader: () => fetch("../game.json"),
    element: (
      <PrivetRoute>
        <Read></Read>
      </PrivetRoute>
    ),
  },
  {
    path: "/auth",
    Component: Auth,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
);

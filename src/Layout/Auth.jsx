import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";

const Auth = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Auth;

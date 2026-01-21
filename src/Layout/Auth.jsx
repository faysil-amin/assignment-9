import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer";

const Auth = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Auth;

import React from "react";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";

const HomeLayout = () => {
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

export default HomeLayout;

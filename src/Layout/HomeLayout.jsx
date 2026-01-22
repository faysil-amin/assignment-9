import React from "react";
import Footer from "../Component/Footer";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import NewsLetter from "../Component/NewsLetter/NewsLetter";
import Search from "../Component/Search/Search";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
        <NewsLetter></NewsLetter>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;

import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import Container from "../Container";
import logo from "../../assets/gaming-black-logo-template-hd-png-701751694705830g7fpxbx1af-removebg-preview.png";
import "./Navbar.css";
import { AuthContext } from "../AuthContainer/AuthContext";
const Navbar = () => {
  const { user, singOut } = useContext(AuthContext);
  const link = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/profile"}>Profile</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </>
  );
  const logOut = () => {
    singOut()
      .then(() => {})
      .catch((error) => {});
  };
  return (
    <Container>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <img src={logo} className="h-20 w-20 " alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button onClick={logOut} className="btn">
              SingOut
            </button>
          ) : (
            <Link to={"/auth/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;

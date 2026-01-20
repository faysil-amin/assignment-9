import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";
import Container from "../Container";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser } = useContext(AuthContext);
  const [show, SetShow] = useState(false);
  const handleFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        navigate(location.state);
      })
      .catch(() => {});
  };
  const handleShow = () => {
    if (show) {
      SetShow(false);
    } else {
      SetShow(true);
    }
  };
  return (
    <Container>
      <form onSubmit={handleFrom}>
        <div className="flex items-center justify-center h-screen">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl ">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <div
                    onClick={handleShow}
                    className="absolute right-8 top-3.5"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <p>
                  I am new{" "}
                  <Link
                    to={"/auth/register"}
                    className="text-blue-500 hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </fieldset>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Login;

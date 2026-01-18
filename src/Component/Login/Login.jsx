import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <form>
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
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
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
  );
};

export default Login;

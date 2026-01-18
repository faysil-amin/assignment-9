import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <form>
      <div className="flex items-center justify-center h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              {/* name */}
              <label className="label">Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="full name"
              />
              {/* url */}
              <label className="label">Image URL</label>
              <input
                name="url"
                type="text"
                className="input"
                placeholder="image url"
              />
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
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p>
                I have already a accout{" "}
                <Link
                  to={"/auth/login"}
                  className="text-blue-500  hover:underline"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;

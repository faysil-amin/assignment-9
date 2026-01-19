import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";

const Register = () => {
  const { creatUser, setUser } = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    const [error, setError] = useState("");
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordLengthCheck = /^.{6,}$/;
    const letterCheck = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    const specilCheck = /^(?=.*[@$!%*?&]).+$/;

    if (!passwordLengthCheck.test(password)) {
      setError("password lenght must be 6");
      return;
    } else if (!letterCheck.test(password)) {
      setError("one Upper & Lower case");
      return;
    } else if (specilCheck.test(password)) {
      setError("Password must include (e.g., @$!%*?&).");
    }
    creatUser(email, password)
      .then((res) => {
        setUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleForm}>
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
                required
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
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

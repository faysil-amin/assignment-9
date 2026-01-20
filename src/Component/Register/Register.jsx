import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../Container";

const Register = () => {
  const navigate = useNavigate();
  const { creatUser, setUser, userProfile } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [show, SetShow] = useState(false);
  const handleShow = () => {
    if (show) {
      SetShow(false);
    } else {
      SetShow(true);
    }
  };
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const url = e.target.url.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordLengthCheck = /^.{6,}$/;
    const letterCheck = /^(?=.*[A-Z])(?=.*[a-z]).+$/;
    const specilCheck = /^(?=.*[@$!%*?&]).+$/;

    if (!passwordLengthCheck.test(password)) {
      return setError("password lenght must be 6");
    } else if (!letterCheck.test(password)) {
      return setError("one Upper & Lower case");
    } else if (!specilCheck.test(password)) {
      return setError("Password must include (e.g., @$!%*?&).");
    }
    setError("");
    setSuccess("");
    creatUser(email, password)
      .then((res) => {
        userProfile({
          displayName: name,
          photoURL: url,
        })
          .then(() => {
            setUser({ ...res, displayName: name, photoURL: url });
            navigate("/");
          })
          .catch(() => {});

        setSuccess("Form submit successful");
      })
      .catch((error) => {
        console.log(error);
        alert("email already exist");
      });
  };
  return <Container>
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
              <div className="relative">
                <input
                  name="password"
                  type={show ? "text" : "password"}
                  className="input"
                  placeholder="Password"
                  required
                />
                <div onClick={handleShow} className="absolute right-8 top-3.5">
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
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
              {success && <p className="text-green-500">{success}</p>}
            </fieldset>
          </div>
        </div>
      </div>
    </form>
  </Container>;
};

export default Register;

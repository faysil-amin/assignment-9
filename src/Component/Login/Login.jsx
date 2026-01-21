import React, { useContext, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";
import Container from "../Container";

const Login = () => {
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const { signInUser, signWithGoogle, passwordRecover } =
    useContext(AuthContext);
  const [show, SetShow] = useState(false);
  const handleFrom = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then(() => {
        navigate(location.state);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const handleShow = () => {
    if (show) {
      SetShow(false);
    } else {
      SetShow(true);
    }
  };
  const handleGoogleForm = (e) => {
    e.preventDefault();
    signWithGoogle()
      .then(() => {
        navigate("/");
      })
      .catch();
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    passwordRecover(email).then(() => {
      alert("check your current email");
    });
  };
  return (
    <Container>
      <form onSubmit={handleFrom}>
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  ref={emailRef}
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
                  <a onClick={handleForgetPassword} className="link link-hover">
                    Forgot password?
                  </a>
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
          <div>
            <p className="text-center my-4 font-bold">or</p>
            <button
              onClick={handleGoogleForm}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default Login;

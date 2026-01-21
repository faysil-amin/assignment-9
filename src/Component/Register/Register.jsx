import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../AuthContainer/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Container from "../Container";

const Register = () => {
  const navigate = useNavigate();
  const { creatUser, setUser, userProfile, signWithGoogle, emailVer } =
    useContext(AuthContext);
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
        emailVer(res.user).then(() => {
          alert("cheack you email");
        });
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
        e.target.reset();
      })
      .catch((error) => {
        // console.log(error);
        alert("email already exist");
      });
  };
  const handleGoogleForm = (e) => {
    e.preventDefault();
    signWithGoogle()
      .then((res) => {
        emailVer(res.user).then(() => {
          alert("cheack you email");
        });
        navigate("/");
      })
      .catch();
  };
  return (
    <Container>
      <form onSubmit={handleForm}>
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-sm">
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
                  <div
                    onClick={handleShow}
                    className="absolute right-8 top-3.5"
                  >
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
          {/* Google */}
          <div>
            <p className="text-center my-8 font-bold">or</p>
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

export default Register;

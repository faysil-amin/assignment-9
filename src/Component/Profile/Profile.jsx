import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthContainer/AuthContext";
import Container from "../Container";
import logo from "../../assets/user.png";
import { Link } from "react-router";
import Navbar from "../Navbar/Navbar";
const Profile = () => {
  const [updateProfile, setUpdateProfile] = useState(false);

  const { user, setUser, userProfile } = useContext(AuthContext);
  console.log(user);
  const handlefrom = () => {
    if (updateProfile) {
      setUpdateProfile(false);
    } else {
      setUpdateProfile(true);
    }
  };
  const handleSubmit = (e) => {
    const name = e.target.name.value;
    const url = e.target.url.value;
    userProfile({ displayName: name, photoURL: url })
      .then(() => {
        setUser({ displayName, photoURL });
      })
      .catch(() => {});
    e.target.reset();
  };
  // const { displayName, photoURL, email, emailVerified } = user;
  return (
    <Container>
      <Navbar></Navbar>
      <div className=" flex items-center justify-center flex-col gap-4 h-screen">
        <div>
          {user && user ? (
            <img
              className="w-20 h-20 border-3 border-orange-500 p-1 rounded-[50%]"
              src={user.photoURL}
              alt=""
            />
          ) : (
            <img
              className="w-20 h-20  border-3 border-orange-500 p-1 rounded-[50%]"
              src={logo}
            ></img>
          )}
        </div>
        <div>
          {user && user ? (
            <p className="text-xl font-bold text-center">
              Name: {user.displayName}{" "}
            </p>
          ) : (
            <p className="text-xl font-bold text-center">Name: User </p>
          )}
        </div>
        {user ? (
          <button className="btn" onClick={handlefrom}>
            Profile Update
          </button>
        ) : (
          <Link className="btn" to={"/auth/login"}>
            LogIn
          </Link>
        )}
        {updateProfile && (
          <form onSubmit={handleSubmit}>
            <div className="card bg-base-100 shrink-0 shadow-2xl">
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
                  <button type="text" className="btn btn-neutral mt-4">
                    Update Profile
                  </button>
                </fieldset>
              </div>
            </div>
          </form>
        )}
      </div>
    </Container>
  );
};

export default Profile;

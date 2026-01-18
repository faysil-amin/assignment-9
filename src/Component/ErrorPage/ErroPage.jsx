import React from "react";
import { Link } from "react-router";

const ErroPage = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col gap-4">
      <h1 className="font-bold text-8xl">404</h1>
      <p>page not found</p>
      <Link to={"/"}>
        <button className="btn btn-soft btn-primary">Back Home</button>
      </Link>
    </div>
  );
};

export default ErroPage;

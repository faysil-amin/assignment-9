import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import Container from "../Container";
import { FaArrowLeft } from "react-icons/fa";

const Read = () => {
  const [store, setStore] = useState({});
  const {
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = store;
  const { id } = useParams();
  const conbertId = id;
  const data = useLoaderData();
  useEffect(() => {
    const finlterData = data.find((res) => res.id === conbertId);
    setStore(finlterData);
  }, [data, conbertId]);
  return (
    <div className="my-8">
      <Container>
        <div className="grid mt-8 md:mt-0 md:grid-cols-2 gap-8">
          <div className="border">
            <img
              className="h-[500px] w-full bg-contain "
              src={coverPhoto}
              alt=""
            />
          </div>
          <div className="">
            <div className="flex justify-end">
              <button className="btn btn-primary">
                <a href={downloadLink}>Downlode</a>
              </button>
            </div>
            <div className="mt-6 ">
              <h1 className="font-bold text-2xl">{title}</h1>
              <p className="mt-4">{description}</p>
              <p className="mt-2">
                <span className="text-2xl font-bold">Ratings: {ratings}</span>
              </p>
              <h1 className="mt-8">Developer:{developer}</h1>
              <Link
                to={"/"}
                className="flex items-center text-pink-700 gap-4 mt-20"
              >
                <FaArrowLeft></FaArrowLeft> Back
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Read;

import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Card = ({ res }) => {
  const {
    id,
    title,
    coverPhoto,
    category,
    downloadLink,
    description,
    ratings,
    developer,
  } = res;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm h-full">
        <figure>
          <img className="h-80 w-70 bg-cover" src={coverPhoto} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p className="line-clamp-2">{description}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/read/${id}`}
              className="flex items-center gap-3 text-red-500"
            >
              Read More
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

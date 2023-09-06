import React from "react";
import { imageBaseURL } from "../Requests";
import { FaHeart } from "react-icons/fa";

const MovieCard = ({ title, image, id }) => {
  return (
    <article
      className="relative inline-block p-2 cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
    >
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {title}
        </p>
      </div>
      <img
        className="w-full h-auto block"
        src={`${imageBaseURL}/${image}`}
        alt={title}
      />
      <p onClick={() => deleteMovie(id)}>
        <FaHeart className="absolute top-4 left-4 text-red-600" />
      </p>
    </article>
  );
};

export default MovieCard;

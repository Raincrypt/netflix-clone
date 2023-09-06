import React, { useEffect, useState } from "react";
import { requests, imageBaseURL } from "../Requests";
import axios from "axios";

import { movieDescriptionLimit as limit } from "../constants/constants"; 

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    try {
      let response = await axios.get(requests.requestPopular);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    getData();
  }, []);

  // For truncating the Movie description
  const truncateString = (str, num) => {
    if(str?.length > num){
      return str.slice(0, num) + "..."
    }
    else{
      return str;
    }
  }

  return (
    <section className="text-white w-full h-[600px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className="object-cover w-full h-full"
          src={`${imageBaseURL}/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h2 className="mb-4 text-3xl md:text-5xl font-bold">{movie?.title}</h2>
          <div>
            <button className="border bg-gray-300 text-black border-grey-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-grey-300 py-2 px-5 ml-4">
              Watch Later
            </button>
          </div>
          <p className="mt-4 text-gray-400 text-sm">Released: {movie?.release_date}</p>
          <p className="w-full text-gray-200 md:max-w-[50%] xl:max-w-[35%]">{truncateString(movie?.overview, limit)}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

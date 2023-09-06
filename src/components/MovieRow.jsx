import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const MovieRow = ({ title, url, id }) => {
  const [movies, setMovies] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [url]);

  const slideLeft = () => {
    let slider = document.querySelector(`#slider-${id}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  }
  const slideRight = () => {
    let slider = document.querySelector(`#slider-${id}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  }

  return (
    <section>
      <h2 className="text-white font-bold p-4 md:text-xl">{title}</h2>
      <div className="flex items-center group">
        <AiOutlineArrowLeft className="absolute left-1 bg-white text-red-600 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideLeft}/>
        <div
          id={`slider-${id}`}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie?.id}
                id={movie?.id}
                title={movie?.title}
                image={movie?.poster_path}
              />
            );
          })}
        </div>
        <AiOutlineArrowRight className="absolute right-1 bg-white text-red-600 rounded-full opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block" onClick={slideRight}/>
      </div>
    </section>
  );
};

export default MovieRow;

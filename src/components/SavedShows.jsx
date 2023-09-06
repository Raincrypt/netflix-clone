import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { db } from "../firebase";
import { onSnapshot, doc, updateDoc } from "firebase/firestore";
import MovieCardFav from "./MovieCardFav";
import { imageBaseURL } from "../Requests";
import { FaHeart } from "react-icons/fa";

const SavedShows = () => {
  const { user } = useContext(AuthContext);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setMovies(doc.data()?.savedShows);
    });
  }, [user?.email]);

  const movieRef = doc(db, "users", `${user?.email}`);

  const deleteMovie = async (passedId) => {
    try {
      const favMovies = movies.filter((item) => item.id !== passedId);
      await updateDoc(movieRef, {
        savedShows: favMovies,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="p-4 md:p-8">
      <h1 className="font-bold text-3xl mb-6 md:text-5xl">Favourites</h1>

      <div>
        <div className="flex items-center flex-wrap">
          {movies.map((movie) => {
            return (
              <article
                key={movie.id}
                className="relative inline-block p-2 cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]"
              >
                <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {movie.title}
                  </p>
                </div>
                <img
                  className="w-full h-auto block"
                  src={`${imageBaseURL}/${movie.image}`}
                  alt={movie.title}
                />
                <p onClick={() => deleteMovie(movie.id)}>
                  <FaHeart className="absolute top-4 left-4 text-red-600" />
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SavedShows;

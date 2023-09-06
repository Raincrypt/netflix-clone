import React from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";

import { movieSections } from "../constants/constants";

const Home = () => {
  return (
    <>
      <Hero />
      {
        movieSections.map((section, rowID) => {
          return <MovieRow key={section.title} id={rowID + 1} title={section.title} url={section.fetchURL}/>
        })
      }
    </>
  );
};

export default Home;

import React, { useContext, useState } from "react";
import { imageBaseURL } from "../Requests";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import AuthContext from '../context/AuthContext'
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const MovieCard = ({ title, image, id }) => {
  const [like, setLike] = useState(false)
  const [saved, setSaved] = useState()
  const {user} = useContext(AuthContext)

  const movieID = doc(db, 'users', `${user?.email}`)

  const saveMovies = async () => {
    if(user?.email){
      setLike(!like)
      setSaved(true)
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id,
          title,
          image
        })
      })
    }
    else{
      alert('Please Log In to Save Movie')
    }
  }

  return (
    <article className="relative inline-block p-2 cursor-pointer w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px]">
      <div className="absolute w-full h-full top-0 left-0 hover:bg-black/80 opacity-0 hover:opacity-100 text-white group">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {title}
        </p>
      </div>
      <img
        className="w-full h-auto block"
        src={`${imageBaseURL}/${image}`}
        alt={title}
      />
      <p onClick={saveMovies}>
        {like ? (
          <FaHeart className="absolute top-4 left-4 text-red-600" />
        ) : (
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p>
    </article>
  );
};

export default MovieCard;

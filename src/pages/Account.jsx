import React from "react";
import SavedShows from "../components/SavedShows";
import { signUpBgImage } from "../constants/constants";


const Account = () => {
  return (
    <main className="w-full text-white">
      <img
        className="w-full h-[400px] object-cover"
        src={signUpBgImage}
        alt="Sign up Netflix Image"
      />
      <div className="bg-black/60 fixed top-0 left-0 h-[550px] w-full"></div>
      <SavedShows />
    </main>
  );
};

export default Account;

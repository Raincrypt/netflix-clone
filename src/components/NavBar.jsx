import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./Button";
import AuthContext from "../context/AuthContext";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut = async() => {
    try {
      const logOutData = await logOut()
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="flex justify-between items-center p-4 z-[100] absolute w-full">
      <Link to="/">
        <h1 className="text-red-600 text-4xl cursor-pointer font-bold">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer text-center">
              Account
            </button>
          </Link>
          <Link to={"/signup"}>
            <Button onClick={handleLogOut} label="Log Out" />
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer text-center">
              Sign In
            </button>
          </Link>
          <Link to={"/signup"}>
            <Button label="Sign Up" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
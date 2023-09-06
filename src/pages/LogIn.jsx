import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signUpBgImage, helpLink } from "../constants/constants";
import AuthContext from "../context/AuthContext";

import Button from "../components/Button";

const LogIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { user, logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      const userDataLogin = await logIn(input.email, input.password);
      navigate('/')
    } catch (error) {
      console.log(error)
      const errorMsg = error.message
      setError(errorMsg)
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <main className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover -z-10"
          src={signUpBgImage}
          alt="Sign up Netflix Image"
        />

        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen -z-9"></div>

        {/* form */}
        <section className="fixed w-full px-4 py-24">
          <div className="text-white py-16 max-w-[450px] h-[600px] bg-black/75 mx-auto px-14">
            <div className="min-h-[560px] min-w-[250px]">
              <h1 className="text-3xl font-bold mb-5">Sign In</h1>
              {
                error && <p className="text-red-600">{error}</p>
              }
              <form
                className="w-full flex flex-col gap-4 py-4"
                onSubmit={handleSubmit}
              >
                <input
                  onChange={handleChange}
                  className="w-full p-3 my-2 h-10 rounded bg-[#333]"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={handleChange}
                  className="w-full p-3 my-2 h-10 mb-6 rounded bg-[#333]"
                  name="password"
                  type="password"
                  placeholder="Password"
                  autoComplete="current_password"
                />
                <Button label="Sign In" />
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" name="" id="" />
                    Remember Me
                  </p>
                  <a href={helpLink} target='_blank'>Need Help?</a>
                </div>
                <p className="py-4 text-gray-600">
                  New to Netflix?
                  <span className="text-bold text-red-600">
                    <Link to={"/signup"}>Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LogIn;

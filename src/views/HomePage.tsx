import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-main bg-no-repeat bg-cover  bg-center bg-fixed w-screen h-screen">
      <div className="bg-white bg-opacity-20 backdrop-blur-md rounded drop-shadow-lg w-screen h-screen flex items-start justify-center px-3 ">
        <div className="flex items-start  flex-col  gap-2  mx-auto my-auto">
          <img
            className="block mx-auto"
            src={Logo}
            alt="logo"
            width="300"
            height="300"
          />
          <h2 className="uppercase text-4xl font-bold text-amber-100 mt-10 drop-shadow-md ">
            your app
          </h2>
          <h2 className="uppercase text-4xl font-bold text-amber-100 ml-5 drop-shadow-md">
            your life
          </h2>
          <h2 className="uppercase text-4xl font-bold text-amber-100 ml-10 drop-shadow-md">
            your fitness
          </h2>
          <Link
            to="/train"
            className="block mx-auto rounded-md px-[50px] py-1 bg-amber-100 text-[30px] font-bold text-gray-700 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-amber-300 mt-10"
          >
            start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

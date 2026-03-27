import React from "react";
import HeroImage from "../assets/sandhya.PNG";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  text-white m-100">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-4xl font-bold text-white ">I’m a Front-End Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            I love creating web applications with React, Tailwind, GraphQL, and Django, turning ideas into functional and beautiful software.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">

                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>

          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/100 md:w-[50%] transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:-translate-y-2 hover:rounded-full hover:animate-wild"
          />        </div>
      </div>
    </div>
  );
};

export default Home;

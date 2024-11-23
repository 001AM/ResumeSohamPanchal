import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Centered Name */}
      <div className="mb-8">
        <div className="flex flex-col">
          <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-800">
            SOHAM PANCHAL
          </div>
          <div className="text-md sm:text-md md:text-2xl lg:text-4xl font-extrabold text-gray-800">
            sohampanchal1469@gmail.com
          </div>
          <div className="text-md sm:text-md md:text-2xl lg:text-4xl font-extrabold text-gray-800">
            Computer Engineer
          </div>
        </div>
      </div>

      {/* Bottom Right Navigation */}
      <ul className="absolute bottom-4 right-4 p-4 text-right font-bold space-y-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <li className="group m-0">
          ABOUT ME
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group m-0">
          <Link to="/ResumeSohamPanchal/tech-skills/">TECH STACK</Link>
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group m-0">
           <Link to="https://www.linkedin.com/in/soham-panchal-430956255/">EXPERIENCE</Link>
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group m-0">
           <Link to="https://github.com/001AM">PROJECT</Link>
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group m-0">
          <Link to="https://medium.com/@sohampanchal1469">MEDIUM STORIES</Link>
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group">
          <Link to="https://music.apple.com/profile/soham_panchal?ls">
            MY PLAYLIST
          </Link>
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;

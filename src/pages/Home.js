import React from "react";

const Home = () => {
  return (
    <div className="Home bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Centered Name */}
      <div className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-gray-800">
        SOHAM PANCHAL
      </div>

      {/* Bottom Right Navigation */}
      <ul className="absolute bottom-4 right-4 p-4 text-right font-bold space-y-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
        <li className="group">
          ABOUT ME
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group">
          TECH STACK
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group">
          PROJECT
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group">
          MEDIUM STORIES
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
        <li className="group">
          MY PLAYLIST
          <span className="hidden group-hover:inline-block ml-2">&lt;|</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;

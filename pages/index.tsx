import React from "react";

const HomePage: React.FC = () => {
  const headerOption =
    "pr-10 font-semibold text-lg cursor-pointer text-gray-800";

  return (
    <div>
      <div className="flex flex-row abg-red-50">
        <h1 className="p-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-400">
          Danny Geisz
        </h1>
        <div className="flex flex-grow justify-end items-center pr-3">
          <div className={headerOption}>About</div>
          <div className={headerOption}>Projects</div>
          <div className={headerOption}>Blog</div>
        </div>
      </div>
      <div className="backdrop-filter backdrop-blur-lg p-10">
        <div className="bg-green-100 w-96 h-96 filter blur-xl shadow-2xl rounded transform skew-x-12 -skew-y-12 transform -rotate-12 transform translate-x-96" />
      </div>
    </div>
  );
};

export default HomePage;

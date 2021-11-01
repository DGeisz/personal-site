import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="backdrop-filter backdrop-blur-sm p-10 z-0 bg-gray-100 overflow-hidden">
      <div className="flex flex-col justify-end items-end">
        <div className="flex object-right bg-pink-200 w-96 h-96 shadow-2xl rounded transform skew-x-12 -skew-y-12 -rotate-12 translate-y-12 z-0 " />
        <div className="flex object-none object-right bg-green-100 w-96 h-96 shadow-2xl rounded transform skew-x-12 -skew-y-12 transform -rotate-45" />
      </div>
    </div>
  );
};

export default HomePage;

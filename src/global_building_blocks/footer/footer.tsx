import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className="w-auto h-20 bg-white p-4 z-50">
      <div className="container mx-auto flex">
        <h4 className="flex flex-grow font-semibold text-gray-400">
          © Copyright 2021
        </h4>
        <a
          href="https://www.linkedin.com/in/daniel-geisz-91a170192/"
          target="_blank"
        >
          <BsLinkedin size={20} className="text-gray-400 mr-2 cursor-pointer" />
        </a>
        <a href="https://github.com/DGeisz" target="_blank">
          <BsGithub size={20} className="text-gray-400 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;

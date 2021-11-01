import React, { useEffect, useRef, useState } from "react";
import { MenuIcon } from "@heroicons/react/solid";
import { Divide } from "hamburger-react";
import { createClass } from "../../global_utils/tailwind_util";
import styles from "./header.module.scss";
import { motion, useAnimation } from "framer-motion";

const bigHeaderOption = `pr-10 font-medium text-lg cursor-pointer text-transparent
   bg-clip-text bg-gradient-to-br from-red-500 to-pink-400`;

const dropDownOption = `pb-2 font-medium text-lg cursor-pointer text-transparent
   bg-clip-text bg-gradient-to-br from-red-500 to-pink-400 select-none`;

const duration = 0.6;

const Header: React.FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const controls = useAnimation();

  useEffect(() => {
    if (dropDownOpen) {
      controls.start({
        maxHeight: 140,
        borderTopWidth: 1,
        transition: {
          type: "spring",
          duration,
        },
      });
    } else {
      controls
        .start({
          maxHeight: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          transition: {
            type: "spring",
            duration,
          },
        })
        .then();
    }
  }, [dropDownOpen]);

  return (
    <div className="sm:fixed sm:inset-x-0 z-10 bg-white bg-opacity-95">
      <div className="flex flex-row">
        <h1 className="p-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-300">
          Danny Geisz
        </h1>
        <div className="hidden sm:flex sm:flex-grow justify-end items-center pr-3">
          <h3 className={bigHeaderOption}>About</h3>
          <h3 className={bigHeaderOption}>Projects</h3>
          <h3 className={bigHeaderOption}>Blog</h3>
        </div>
        <div className="flex sm:hidden flex-grow justify-end items-center p-3">
          <Divide
            color="#F87171"
            size={25}
            toggle={() => setDropDownOpen(!dropDownOpen)}
            toggled={dropDownOpen}
          />
        </div>
      </div>
      <motion.div
        initial={{ maxHeight: 0 }}
        animate={controls}
        className={createClass(`flex sm:hidden flex-col mx-4 overflow-hidden`)}
      >
        <h3 className={createClass(dropDownOption, "pt-2")}>About</h3>
        <h3 className={dropDownOption}>Projects</h3>
        <h3 className={dropDownOption}>Blog</h3>
      </motion.div>
    </div>
  );
};

export default Header;

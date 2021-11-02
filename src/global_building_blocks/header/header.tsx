import React, { useEffect, useState } from "react";
import { Divide } from "hamburger-react";
import { createClass } from "../../global_utils/tailwind_util";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const bigHeaderOption = `pr-10 font-medium text-lg cursor-pointer text-transparent
   bg-clip-text bg-gradient-to-br from-red-500 to-pink-400`;

const dropDownOption = `pb-2 font-medium text-lg cursor-pointer text-transparent
   bg-clip-text bg-gradient-to-br from-red-500 to-pink-400 select-none`;

const duration = 0.8;

const Header: React.FC = () => {
  const [dropDownOpen, setDropDownOpen] = useState<boolean>(false);

  const controls = useAnimation();

  useEffect(() => {
    if (dropDownOpen) {
      controls.start({
        maxHeight: 140,
        transition: {
          type: "spring",
          duration,
        },
      });
    } else {
      controls
        .start({
          maxHeight: 0,
          transition: {
            type: "spring",
            duration,
          },
        })
        .then();
    }
  }, [dropDownOpen]);

  const closeMenu = () => dropDownOpen && setDropDownOpen(false);

  return (
    <>
      <div className="absolute sm:fixed inset-x-0 z-10 bg-white bg-opacity-95 z-50">
        <div className="flex flex-row">
          <Link href="/">
            <a>
              <h1 className="p-4 text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-300">
                Danny Geisz
              </h1>
            </a>
          </Link>
          <div className="hidden sm:flex sm:flex-grow justify-end items-center pr-3">
            <Link href="/about">
              <a onClick={closeMenu}>
                <h3 className={bigHeaderOption}>About</h3>
              </a>
            </Link>
            <h3 className={bigHeaderOption}>Projects</h3>
            <a href="https://exfizzassist.com" target="_blank">
              <h3 className={bigHeaderOption}>Blog</h3>
            </a>
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
          className={createClass(
            `flex sm:hidden flex-col mx-4 overflow-hidden`,
            dropDownOpen ? "border-t border-gray-200" : ""
          )}
        >
          <Link href="/about">
            <a onClick={closeMenu}>
              <h3 className={createClass(dropDownOption, "pt-2")}>About</h3>
            </a>
          </Link>
          <h3 className={dropDownOption}>Projects</h3>
          <a href="https://exfizzassist.com" target="_blank">
            <h3 className={dropDownOption}>Blog</h3>
          </a>
        </motion.div>
      </div>
      <div className="h-4" />
    </>
  );
};

export default Header;

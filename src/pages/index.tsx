import React, { useEffect, useState } from "react";
import styles from "./landing_styles.module.scss";
import { landingPageMessages } from "../tree_content/landing_page_messages";
import Image from "next/image";

const HomePage: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState<number>(-1);
  const [completedLength, setCompletedLength] = useState<number>(0);

  /* Indicated whether we're creating or deleting the message */
  const [creatingMessage, setCreatingMessage] = useState<boolean>(false);

  useEffect(() => {
    /* First we need to see if we're creating or deleting a message*/
    if (creatingMessage) {
      /* Now check if we're finished writing the message */
      if (completedLength === landingPageMessages[messageIndex].length) {
        /* If so, we'll wait like 2 seconds for the audience to read
         * before we start deleting the message */
        setTimeout(() => {
          setCreatingMessage(false);
          setCompletedLength((completedLength) => completedLength - 1);
        }, 2000);
      } else {
        /* Otherwise, we're still creating the message,
         * so wait a random amount of time to give the
         * effect of typing */
        setTimeout(() => {
          setCompletedLength((completedLength) => completedLength + 1);
        }, Math.max(40 + 100 * (Math.random() - 0.5), 10));
      }
    } else {
      /* Ok, so now we know we're deleting the message,
       * but now we need to figure out if we actually deleted the message */
      if (completedLength <= 0) {
        /* In this case, we finished deleting the message,
         * so move onto the next message and begin writing */
        setTimeout(() => {
          setMessageIndex((messageIndex + 1) % landingPageMessages.length);
          setCreatingMessage(true);
          setCompletedLength(1);
        }, 1000);
      } else {
        /* Otherwise, we simply wait a slightly variable amount
         * of time to delete a character*/
        setTimeout(() => {
          setCompletedLength((completedLength) => completedLength - 1);
        }, 30);
      }
    }
  }, [completedLength]);

  return (
    <div className="backdrop-filter backdrop-blur-sm p-10 z-0 bg-gray-100 overflow-hidden">
      <div className="flex flex-row flex-wrap">
        <div className="flex flex-grow flex-col">
          <div
            className={`relative h-80 flex justify-center items-center
           bg-pink-200 transform rotate-12 translate-y-20 
           -translate-x-10 sm:translate-x-0
           shadow-2xl rounded z-30`}
          >
            <div className="flex sm:flex-grow w-80 sm:items-center p-4 m-6 rounded shadow-md bg-black transform -rotate-12">
              <span className="text-xl font-semibold text-white break-words ">
                ${" "}
                {!!landingPageMessages[messageIndex] &&
                  landingPageMessages[messageIndex]
                    .slice(0, completedLength)
                    .trim()}
                <span className={styles.blinkingCursor}>|</span>
              </span>
            </div>
          </div>
          <div
            className={`relative sm:h-96 w-96 flex justify-center filter blur-lg 
          items-center bg-gradient-to-bl from-green-200 to-blue-200 transform -rotate-12 shadow-2xl rounded z-10`}
          />
        </div>
        <div className="flex flex-grow justify-center bg-gradient-to-tl from-purple-200 to-red-50 m-4 rounded-lg z-20">
          <div
            className={`relative flex-grow flex-col max-h-96  flex p-4 justify-center text-wrap items-center 
           bg-gradient-to-br from-green-200 to-blue-200 transform -rotate-12 translate-y-10 shadow-2xl rounded-lg z-50`}
          >
            <Image
              src="/danny.JPG"
              height={300}
              width={300}
              className="transform rotate-12 rounded-lg"
            />
            <div className="my-2 font-bold text-lg text-green-800">
              Unsurprisingly, this is me
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

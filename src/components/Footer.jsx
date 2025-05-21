import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { harsha } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 flex flex-col ml-3 items-center md:flex-row md:items-start`}
    >
      <div className={`${layout.sectionInfo} text-center md:text-left`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4 justify-center md:justify-start">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 justify-items-center md:justify-items-start">
          <a href={resumeLink} target="_blank">
            <Button styles="mt-10 inline-flex items-center justify-center" text="Resume" icon={AiFillGithub} />
          </a>
          <a href={repoLink} target="_blank">
            <Button
              styles="mt-10 inline-flex items-center justify-center"
              text="Star"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>

      <div className="mr-8 mt-10 md:mt-0 md:ml-auto">
        <img
          src={harsha}
          alt="Harsha Pragallapati"
          className="w-[175px] h-[175px] md:w-[200px] md:h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>
    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4">
      <p>Made with ♥️ by Harsha Pragallapati</p>
    </div>
  </footer>
);

export default Footer;
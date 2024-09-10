import React from "react";
import { startApps } from "../../constanst/data.js";
import {
  searchIcon,
  chevronRightIcon,
  powerIcon,
} from "../../constanst/icons.js";

const StartMenu = () => {
  return (
    <div className="w-full h-full flex items-end">
      <div className="z-[999] w-[40rem]  flex flex-col mb-3 h-[90%] mx-auto bg-startMenu  border border-gray-700 rounded-xl select-none">
        <div className="flex flex-col h-full backdrop-blur-xl bg-opacity-50 md:p-8 rounded-t-xl">
          <div className="flex items-center gap-2 px-3 bg-thirdDarkColor text-white  border border-gray-700 rounded-2xl  py-1 lg:mb-9 sm:mb-4 md:mx-0 my-3 mx-3">
            <span className="w-4">{searchIcon}</span>
            <input
              className="outline-none border-none bg-transparent w-full text-sm placeholder:text-placeholderColor placeholder:font-medium"
              type="text"
              placeholder="Type here the search"
            />
          </div>
          <div className="flex flex-col justify-between h-full text-white">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between cursor-default px-6">
                <span className="text-sm font-medium">Pinned</span>
                <span className="flex gap-3 items-center bg-[#ffffff0f] text-xs py-1 px-2 rounded-sm">
                  All apps
                  <span className="w-2">{chevronRightIcon}</span>
                </span>
              </div>
              <ul className="flex flex-wrap">
                {startApps
                  .filter((folder) => folder.filter === "1")
                  .map((folder) => (
                    <li
                      key={folder.id}
                      className="flex rounded-md gap-2 flex-col  items-center hover:bg-paleWhite p-2 text-xs w-[5.96rem] max-h-22"
                    >
                      <div className="w-9 h-9">{folder.icon}</div>
                      <span className="text-center">{folder.text}</span>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between cursor-default px-6">
                <span className="text-sm font-medium">Recommended</span>
                <span className="flex gap-3 items-center bg-[#ffffff0f] text-xs py-1 px-2 rounded-sm">
                  More
                  <span className="w-2">{chevronRightIcon}</span>
                </span>
              </div>
              <ul className="grid grid-rows-3 max-h-44 grid-flow-col gap-x-6 px-4 pr-1">
                {startApps
                  .filter((folder) => folder.filter === "2")
                  .slice(0, 6)
                  .map((folder, index) => (
                    <li
                      key={folder.id}
                      className={`flex rounded-md gap-2 hover:bg-paleWhite p-2 text-xs max-h-22 ${
                        index % 2 === 0 ? "col-start-1" : "col-start-2"
                      }`}
                    >
                      <div className="w-9 h-9">{folder.icon}</div>
                      <div className="flex flex-col">
                        <span>{folder.text}</span>
                        <span className="text-placeholderColor">
                          {folder.date}
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center h-16 backdrop-blur-3xl bg-[#2e2e2e26] rounded-b-xl md:px-12 sm:px-4">
          <div className="flex gap-3 items-center hover:bg-paleWhite px-3 py-0.5 rounded-md">
            <img
              width="35"
              height="35"
              src={`${process.env.PUBLIC_URL}/img/baby.jpg`}
              className="rounded-full"
              alt="user-male-circle--v1"
            />
            <span className="text-white text-xs">WuSeLeWu</span>
          </div>
          <div className="hover:bg-paleWhite text-white p-3 rounded-md">
            <span className="w-4 h-4 block">{powerIcon}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartMenu;

import React from "react";
import { Rnd } from "react-rnd";
import {
  chromeVectorIcon,
  xIcon,
  squareIcon,
  dashIcon,
  plusIcon,
  chevronDownIcon,
  rightShortArrowIcon,
  leftShortArrowIcon,
  refleshIcon,
  googleIcon,
  starIcon,
  threeDotsIcon,
  extensionIcon,
  babyYoda,
  gridIcon,
  googleLogoIcon,
  searchIcon,
  micColoredIcon,
  cameraIcon,
  penIcon,
} from "../../constanst/ico-img-source";
const ChromeWindow = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 20,
        y: 50,
        width: 1000,
        height: 520,
      }}
      minWidth={322}
      minHeight={190}
      bounds="window"
      enableResizing={{
        top: true,
        right: true,
        bottom: true,
        left: true,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
      dragHandleClassName="window-header"
      className="notepad-mw absolute top-24 left-24 z-[60] border border-gray-600 rounded-md flex flex-col overflow-hidden"
    >
      <div className="window-header h-22 bg-chromeSecondaryColor">
        <div className="h-10 flex">
          <div className="w-full flex items-end">
            <div className="p-2 mx-1.5 mb-1.5 text-white rounded-[0.60rem] bg-chromePrimaryColor flex justify-center items-center">
              <span className="w-2.5 h-2.5 block ">{chevronDownIcon}</span>
            </div>
            <div className="w-[27%] min-w-[7.5rem] select-none py-2 rounded-tl-lg font-thin rounded-tr-lg px-2 text-chromeTextColor text-xs  flex bg-chromePrimaryColor">
              <span className="w-4 h-4 mr-2 block">{chromeVectorIcon}</span>
              <span>New Tab</span>
              <span
                onClick={onClose}
                className="w-[1.1rem] h-[1.1rem] p-1 rounded-full ml-auto hover:bg-paleWhite  hover:cursor-pointer"
              >
                {xIcon}
              </span>
            </div>
            <div className="text-gray-400 rounded-full mb-1  mx-1.5 py-2 px-2 hover:bg-paleWhite">
              <span className="w-3 h-3 block">{plusIcon}</span>
            </div>
          </div>
          <div className="flex h-full ml-auto">
            <button className="text-white py-2 px-4 hover:bg-chromePrimaryColor">
              <span className="w-3.5 h-2.5 block">{dashIcon}</span>
            </button>
            <button className="text-white py-2 px-4 hover:bg-chromePrimaryColor">
              <span className="w-[0.65rem] h-[0.65rem] block">
                {squareIcon}
              </span>
            </button>
            <button
              onClick={onClose}
              className="text-white py-2 px-4 hover:bg-red-600"
            >
              <span className="w-3.5 h-3.5 block">{xIcon}</span>
            </button>
          </div>
        </div>
        <div className="w-full h-11 flex gap-3 bg-chromePrimaryColor p-1.5 border-b border-[#5a4b57]">
          <div className="w-7 h-7 flex justify-center items-center rounded-full text-chromeText2Color ">
            <span className="w-6 h-6">{leftShortArrowIcon}</span>
          </div>
          <div className="w-7 h-7 flex justify-center items-center rounded-full text-chromeText2Color ">
            <span className="w-6 h-6">{rightShortArrowIcon}</span>
          </div>
          <div className="w-10 h-8 flex justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
            <span className="w-3.5 h-3.5">{refleshIcon}</span>
          </div>
          <div className="flex gap-2 w-full h-full p-1 justify-between items-center bg-chromeSecondaryColor rounded-2xl">
            <div className="w-7 h-6 flex justify-center items-center rounded-full text-white bg-paleWhite">
              <span className="w-5 h-5">{googleIcon}</span>
            </div>
            <input
              type="text"
              placeholder="Search on Google or type a URL"
              className="w-full bg-transparent border-0 placeholder:text-white text-sm text-white outline-none font-thin"
            />
            <div className="w-7 h-6 flex justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
              <span className="w-3.5 h-3.5">{starIcon}</span>
            </div>
          </div>
          <div className="w-10 h-8 flex justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
            <span className="w-3.5 h-3.5">{extensionIcon}</span>
          </div>
          <div className="w-10 h-8 flex justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
            <img
              src={babyYoda}
              alt="chrome-pp"
              className="w-5 h-5 rounded-full"
            />
          </div>
          <div className="w-10 h-8 flex justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
            <span className="w-3.5 h-3.5">{threeDotsIcon}</span>
          </div>
        </div>
      </div>
      <div className=" w-full h-full border-0  text-xs p-3 resize-none outline-none text-white bg-chromePrimaryColor">
        <div className="w-full gap-3 flex justify-end items-center">
          <div className="text-xs text-white cursor-pointer hover:underline">
            Gmail
          </div>
          <div className="text-xs text-white cursor-pointer hover:underline">
            Images
          </div>
          <div className="w-10 h-10 flex justify-center items-center hover:bg-paleWhite rounded-full cursor-pointer">
            <span className="w-5 h-5 block">{gridIcon}</span>
          </div>
        </div>
        <div className="text-white w-full z-50">
          <div className="mx-auto mt-10 w-72 h-40">{googleLogoIcon}</div>
          <div className="flex z-20 relative  gap-2 w-[44rem] h-12 mx-auto p-2 justify-between items-center bg-white rounded-3xl">
            <div className="w-7 h-6 flex justify-center items-center rounded-full text-gray-500 bg-paleWhite">
              <span className="w-4 h-4">{searchIcon}</span>
            </div>
            <input
              type="text"
              placeholder="Search on Google or type a URL"
              className="w-full bg-transparent border-0 placeholder:text-gray-500 text-base text-gray-900 outline-none "
            />
            <div className="w-8 h-6 flex cursor-pointer justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
              <span className="w-5 h-5">{micColoredIcon}</span>
            </div>
            <div className="w-8 h-6 flex cursor-pointer justify-center items-center rounded-full text-chromeTextColor hover:bg-paleWhite">
              <span className="w-5 h-5">{cameraIcon}</span>
            </div>
          </div>
        </div>
        <div className="absolute cursor-pointer flex items-center gap-2 px-3 py-2  z-10 bottom-6 right-6 text-white bg-[#000f3a] rounded-2xl h-8">
          <div className="w-3 h-3">{penIcon}</div>
        </div>
      </div>
    </Rnd>
  );
};

export default ChromeWindow;

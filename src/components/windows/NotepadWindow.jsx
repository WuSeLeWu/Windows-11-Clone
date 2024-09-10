import React from "react";
import { Rnd } from "react-rnd";
import {
  notepadIcon,
  xIcon,
  gearIcon,
  squareIcon,
  dashIcon,
  plusIcon,
} from "../../constanst/ico-img-source";

const NotepadWindow = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 20,
        y: 50,
        width: 700,
        height: 320,
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
      className="bg-defaultDarkColor notepad-mw absolute top-24 left-24 z-[60] border border-gray-600 rounded-md flex flex-col overflow-hidden"
    >
      <div className="window-header bg-thirdDarkColor">
        <div className="h-10 flex">
          <div className="w-full flex items-end">
            <div className="my-1.5 px-3">
              <span className="w-5 h-5 block">{notepadIcon}</span>
            </div>
            <div className="w-[25%] min-w-[100px] select-none py-1.5 rounded-tl-lg rounded-tr-lg px-3 text-white text-xs font-medium flex bg-secondaryDarkColor">
              <span>Untitle</span>
              <span
                onClick={onClose}
                className="w-3 h-3 ml-auto hover:cursor-pointer mt-[2px]"
              >
                {xIcon}
              </span>
            </div>
            <div className="text-white rounded-md  mx-2 py-2 px-2 hover:bg-paleWhite">
              <span className="w-3 h-3 block">{plusIcon}</span>
            </div>
          </div>
          <div className="flex justify-end items-start ml-auto">
            <button className="text-white py-2 px-4 hover:bg-paleWhite">
              <span className="w-3 h-3 block">{dashIcon}</span>
            </button>
            <button className="text-white py-2 px-4 hover:bg-paleWhite">
              <span className="w-3 h-3 block">{squareIcon}</span>
            </button>
            <button
              onClick={onClose}
              className="text-white py-2 px-4 hover:bg-red-600"
            >
              <span className="w-3 h-3 block">{xIcon}</span>
            </button>
          </div>
        </div>
        <div className="w-full h-8 bg-secondaryDarkColor px-1">
          <div className="flex gap-1 items-center text-white text-sm">
            <span className="hover:bg-paleWhite  py-1  px-3 rounded-md select-none">
              Folder
            </span>
            <span className="hover:bg-paleWhite  py-1 px-3 rounded-md select-none">
              Edit
            </span>
            <span className="hover:bg-paleWhite  py-1 px-3 rounded-md select-none">
              View
            </span>
            <button className="ml-auto hover:bg-paleWhite  py-1 px-2 rounded-md select-none flex">
              <span className="w-4 h-4 block">{gearIcon}</span>
            </button>
          </div>
        </div>
      </div>
      <textarea
        style={{ height: "calc(100% - 110px)" }}
        className="notepad-textarea w-full notepad-textarea border-0 flex-1 text-xs p-3 resize-none outline-none text-white bg-defaultDarkColor"
      />
      <div className="w-full px-4 sm:px-0 flex items-center text-nowrap h-8 bg-secondaryDarkColor text-gray-300 text-xs select-none">
        <span className="w-[14%] min-w-[4.375rem] px-2 bg-secondaryDarkColor">
          Ln 1, Col 1
        </span>
        <span className="w-[34%] px-2 bg-secondaryDarkColor">Characters 0</span>
        <span className="w-[10%] min-w-14 px-2 bg-secondaryDarkColor">
          %100
        </span>
        <span className="w-[25%] px-2 bg-secondaryDarkColor">
          Windows (CRLF)
        </span>
        <span className="w-auto min-w-16 px-2 bg-secondaryDarkColor">
          UTF-8
        </span>
      </div>
    </Rnd>
  );
};

export default NotepadWindow;

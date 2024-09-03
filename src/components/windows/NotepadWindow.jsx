import React from "react";
import { Rnd } from "react-rnd";

const NotepadWindow = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 100,
        y: 100,
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
      className="bg-defaultDarkColor absolute top-24 left-24 z-[60] border border-gray-600 rounded-md flex flex-col overflow-hidden"
    >
      <div className="window-header bg-thirdDarkColor">
        <div className="h-10 flex">
          <div className="w-full flex items-end">
            <div className="my-1.5 px-3">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/fluency/48/notepad.png"
                alt="notepad"
                className="min-w-5 min-h-5"
              />
            </div>
            <div className="w-[25%] min-w-[100px] select-none py-1.5 rounded-tl-lg rounded-tr-lg px-3 text-white text-xs font-medium flex bg-secondaryDarkColor">
              <span>Untitle</span>
              <svg
                onClick={onClose}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-x-lg ml-auto hover:cursor-pointer mt-[2px]"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
            <div className="text-white rounded-md  mx-2 py-2 px-2 hover:bg-paleWhite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-end items-start ml-auto">
            <button className="text-white py-2 px-4 hover:bg-paleWhite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-dash-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"
                />
              </svg>
            </button>
            <button className="text-white py-2 px-4 hover:bg-paleWhite">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                class="bi bi-square"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="text-white py-2 px-4 hover:bg-red-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
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
            <span className="ml-auto hover:bg-paleWhite  py-1 px-2 rounded-md select-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-gear"
                viewBox="0 0 16 16"
              >
                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
              </svg>
            </span>
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

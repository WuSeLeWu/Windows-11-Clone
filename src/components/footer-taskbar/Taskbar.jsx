import React from "react";
import { centerTaskbarApps, rightTaskbarApps } from "../../constanst/data";
import {
  windowsIcon,
  chevronUpIcon,
  notificationIcon,
} from "../../constanst/ico-img-source";

const Taskbar = ({ onStartButtonClick }) => {
  return (
    <div className="z-[999] flex justify-between px-4 absolute bottom-0 left-0 w-full h-12 backdrop-blur-lg bg-black bg-opacity-50 border-t border-white border-opacity-20 ">
      <div className="w-48 mr-2"></div>
      <nav className="flex h-full items-center gap-1.5">
        <div
          className="pale-bg hover:bg-paleWhite"
          onClick={onStartButtonClick}
        >
          <span className="w-8 h-8">{windowsIcon}</span>
        </div>
        {centerTaskbarApps.map((apps, i) => (
          <div key={i} className="pale-bg hover:bg-paleWhite ">
            <span className="w-8 h-8">{apps}</span>
          </div>
        ))}
      </nav>
      <div className="flex items-center">
        <div className="pale-bg hover:bg-paleWhite text-white">
          <span className="w-4 h-4">{chevronUpIcon}</span>
        </div>
        <ul className="pale-bg gap-2 hover:bg-paleWhite text-white">
          {rightTaskbarApps.map((apps, i) => (
            <li key={i} className="w-5 h-5">
              {apps}
            </li>
          ))}
        </ul>
        <div className="pale-bg gap-1 text-white">
          <div className="flex flex-col text-end mx-1">
            <div className="text-xs">
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
            <div className="text-xs">
              {new Date().toLocaleDateString([], {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </div>
          </div>
          <span className="w-4 h-4">{notificationIcon}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;

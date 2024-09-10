import React, { useState } from "react";
import "./App.css";
import Taskbar from "./components/footer-taskbar/Taskbar";
import DraggableFolder from "./components/helper-components/DraggableFolder";
import SelectionBox from "./components/helper-components/SelectionBox";
import StartMenu from "./components/footer-taskbar/StartMenu";
import { windowApps } from "./constanst/data.js";
import { w11BgDark } from "./constanst/ico-img-source.js";

function App() {
  const [folders, setFolders] = useState(windowApps);
  const handleMove = (id, newPosition) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) =>
        folder.id === id ? { ...folder, ...newPosition } : folder
      )
    );
  };

  const handleEndMove = (id, position) => {};

  const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuVisible((prev) => !prev);
  };
  return (
    <>
      <div
        className="w-full h-screen relative"
        style={{
          background: `url(${w11BgDark}) center center / cover`,
        }}
      >
        <div
          className="content-area relative max-w-full w-full"
          style={{ height: "calc(100vh - 48px)" }}
        >
          {isStartMenuVisible && <StartMenu />}
          {folders.map((folder) => (
            <DraggableFolder
              className="w-8"
              key={folder.id}
              id={folder.id}
              icon={folder.icon}
              name={folder.name}
              initialX={folder.initialX}
              initialY={folder.initialY}
              style={folder.style}
              onMove={handleMove}
              onEndMove={handleEndMove}
            />
          ))}
          <SelectionBox />
        </div>
        <Taskbar onStartButtonClick={toggleStartMenu} />
      </div>
    </>
  );
}

export default App;

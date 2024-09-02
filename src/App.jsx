import React, { useState } from "react";
import "./App.css";
import Taskbar from "./components/footer-taskbar/Taskbar";
import DraggableFolder from "./components/helper-components/DraggableFolder";
import SelectionBox from "./components/helper-components/SelectionBox";

function App() {
  const [folders, setFolders] = useState([
    {
      id: 1,
      icon: (
        <img
          width="42"
          height="38"
          src="https://img.icons8.com/fluency/48/monitor--v1.png"
          alt="monitor--v1"
        />
      ),
      name: "This PC",
      initialX: 15,
      initialY: 15,
    },
    {
      id: 2,
      icon: (
        <img
          width="38"
          height="38"
          src="https://img.icons8.com/fluency/48/windows-explorer.png"
          alt="windows-explorer"
        />
      ),
      name: "File Explorer",
      initialX: 15,
      initialY: 90,
    },
    {
      id: 3,
      icon: (
        <img
          width="45"
          height="38"
          src="https://img.icons8.com/fluency/48/notepad.png"
          alt="notepad"
        />
      ),
      name: "Notepad",
      initialX: 15,
      initialY: 180,
    },
    {
      id: 4,
      icon: (
        <img
          width="42"
          height="38"
          src="https://img.icons8.com/fluency/48/bin-windows.png"
          alt="bin-windows"
        />
      ),
      name: "Recycle Bin",
      initialX: 15,
      initialY: 260,
    },
  ]);

  const handleMove = (id, newPosition) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) =>
        folder.id === id ? { ...folder, ...newPosition } : folder
      )
    );
  };

  const handleEndMove = (id, position) => {};

  return (
    <>
      <div
        className="w-full h-screen relative"
        style={{
          background: "url(/img/win11-bg-dark.jpg) center center / cover",
        }}
      >
        <div
          className="relative max-w-full w-full"
          style={{ height: "calc(100vh - 48px)" }}
        >
          {folders.map((folder) => (
            <DraggableFolder
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
        <Taskbar />
      </div>
    </>
  );
}

export default App;

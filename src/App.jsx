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
  const [openWindows, setOpenWindows] = useState([]); // Açılan pencereleri tutan state
  const handleMove = (id, newPosition) => {
    setFolders((prevFolders) =>
      prevFolders.map((folder) =>
        folder.id === id ? { ...folder, ...newPosition } : folder
      )
    );
  };

  const handleEndMove = (id, position) => {
    console.log(
      `Move ended for folder with ID: ${id}, final position:`,
      position
    );
  };

  const [isStartMenuVisible, setIsStartMenuVisible] = useState(false);

  const toggleStartMenu = () => {
    setIsStartMenuVisible((prev) => !prev);
  };

  // Pencere açıldığında görev çubuğuna ekle
  const handleOpenWindow = (name, icon) => {
    setOpenWindows((prev) => {
      // Eğer zaten açıksa, tekrar ekleme
      if (prev.some((window) => window.name === name)) return prev;
      return [...prev, { name, icon }];
    });
  };

  // Pencere kapandığında görev çubuğundan çıkar
  const handleCloseWindow = (name) => {
    setOpenWindows((prev) => prev.filter((window) => window.name !== name));
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
          style={{ height: "calc(100svh - 48px)" }}
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
              onOpenWindow={handleOpenWindow} // Pencere açıldığında görev çubuğuna ekler
              onCloseWindow={handleCloseWindow} // Pencere kapandığında görev çubuğundan çıkarır
            />
          ))}
          <SelectionBox />
        </div>
        <Taskbar
          onStartButtonClick={toggleStartMenu}
          openWindows={openWindows} // Görev çubuğuna açık pencereleri gönder
        />
      </div>
    </>
  );
}

export default App;

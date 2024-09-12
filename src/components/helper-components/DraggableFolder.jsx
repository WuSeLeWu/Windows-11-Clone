import React, { useState, useRef, useCallback, useEffect } from "react";
import NotepadWindow from "../windows/NotepadWindow";
import ChromeWindow from "../windows/ChromeWindow";

const useDraggable = (initialX, initialY, onMove, onEndMove) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isDragging) return;

      const folderWidth = ref.current.offsetWidth;
      const folderHeight = ref.current.offsetHeight;
      const container = ref.current.parentElement;
      const containerRect = container.getBoundingClientRect();

      let newX = e.clientX - folderWidth / 2 - containerRect.left;
      let newY = e.clientY - folderHeight / 2 - containerRect.top;
      newX = Math.max(0, Math.min(newX, containerRect.width - folderWidth));
      newY = Math.max(
        0,
        Math.min(newY, containerRect.height - folderHeight - 48)
      );

      setPosition({ x: newX, y: newY });
      onMove && onMove(ref.current.id, { x: newX, y: newY });
    },
    [isDragging, onMove]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    onEndMove && onEndMove(ref.current.id, position);
  }, [onEndMove, position]);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return { ref, position, handleMouseDown };
};

const DraggableFolder = ({
  id,
  icon,
  name,
  initialX,
  initialY,
  onMove,
  onEndMove,
  onOpenWindow, // Pencere açıldığında çağırılacak fonksiyon
  onCloseWindow, // Pencere kapandığında çağırılacak fonksiyon
  onMinimizeWindow, // Pencereyi minimize etmek için
  minimized, // Pencere minimize edilmiş mi
}) => {
  const { ref, position, handleMouseDown } = useDraggable(
    initialX,
    initialY,
    onMove,
    onEndMove
  );

  const [openWindow, setOpenWindow] = useState(null);

  const handleDoubleClick = () => {
    setOpenWindow(name);
    onOpenWindow(name, icon); // Pencere açıldığında görev çubuğuna ekle
  };

  const handleMinimize = () => {
    onMinimizeWindow(name); // Pencere minimize edildiğinde durumu bildir
  };

  const renderWindow = () => {
    if (minimized) return null; // Minimize edilirse pencereyi gizle
    switch (openWindow) {
      case "Notepad":
        return (
          <NotepadWindow
            onClose={() => {
              setOpenWindow(null);
              onCloseWindow(name); // Pencere kapandığında görev çubuğundan çıkar
            }}
            onMinimize={handleMinimize} // Minimize işlevi eklendi
          />
        );
      case "Chrome":
        return (
          <ChromeWindow
            onClose={() => {
              setOpenWindow(null);
              onCloseWindow(name); // Pencere kapandığında görev çubuğundan çıkar
            }}
            onMinimize={handleMinimize} // Minimize işlevi eklendi
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <div
        className="pale-bg w-[60px] flex-col absolute select-none text-center hover:bg-paleWhite text-3xl z-50"
        ref={ref}
        id={id}
        style={{
          left: position.x,
          top: position.y,
          zIndex: 50,
        }}
        onMouseDown={handleMouseDown}
        onDoubleClick={handleDoubleClick}
      >
        <span className="w-10">{icon}</span>
        <div className="text-white text-xs">{name}</div>
      </div>

      {renderWindow()}
    </>
  );
};

export default DraggableFolder;

import React, { useState, useEffect, useCallback } from "react";

function SelectionBox() {
  const [selectionBox, setSelectionBox] = useState(null);
  const [isSelecting, setIsSelecting] = useState(false);

  const handleMouseDown = (e) => {
    setIsSelecting(true);
    setSelectionBox({
      startX: e.clientX,
      startY: e.clientY,
      currentX: e.clientX,
      currentY: e.clientY,
    });
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!isSelecting) return;
      setSelectionBox((prevBox) => ({
        ...prevBox,
        currentX: e.clientX,
        currentY: e.clientY,
      }));
    },
    [isSelecting]
  );

  const handleMouseUp = () => {
    setIsSelecting(false);
    setSelectionBox(null);
  };

  useEffect(() => {
    if (isSelecting) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isSelecting, handleMouseMove]);
  return (
    <div
      onMouseDown={handleMouseDown}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        top: 0,
        left: 0,
        pointerEvents: "auto",
      }}
    >
      {selectionBox && (
        <div
          style={{
            position: "absolute",
            left: Math.min(selectionBox.startX, selectionBox.currentX),
            top: Math.min(selectionBox.startY, selectionBox.currentY),
            width: Math.abs(selectionBox.startX - selectionBox.currentX),
            height: Math.abs(selectionBox.startY - selectionBox.currentY),
            backgroundColor: "rgba(0, 120, 215, 0.3)",
            border: "1px solid rgba(0, 120, 215, 0.7)",
          }}
        />
      )}
    </div>
  );
}

export default SelectionBox;

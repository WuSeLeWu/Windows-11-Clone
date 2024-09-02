import React, { useState, useRef, useCallback, useEffect } from "react";

const DraggableFolder = ({
  icon,
  name,
  initialX,
  initialY,
  onMove,
  onEndMove,
}) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const ref = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        const folderWidth = ref.current.offsetWidth;
        const folderHeight = ref.current.offsetHeight;

        // Get the container element's dimensions
        const container = ref.current.parentElement;
        const containerRect = container.getBoundingClientRect();

        // Yeni konum hesapla
        let newX = e.clientX - folderWidth / 2 - containerRect.left;
        let newY = e.clientY - folderHeight / 2 - containerRect.top;

        // Sınırları kontrol et
        newX = Math.max(0, Math.min(newX, containerRect.width - folderWidth));
        newY = Math.max(0, Math.min(newY, containerRect.height - folderHeight));

        setPosition({ x: newX, y: newY });

        // Move eventini tetikle
        onMove && onMove(ref.current.id, { x: newX, y: newY });
      }
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

  return (
    <div
      className="pale-bg w-[60px] overflow-hidden flex-col absolute select-none text-center hover:bg-paleWhite text-3xl z-50"
      ref={ref}
      id={position.id}
      style={{
        left: position.x,
        top: position.y,
        zIndex: 50,
      }}
      onMouseDown={handleMouseDown}
    >
      {icon}
      <div className="text-white text-xs">{name}</div>
    </div>
  );
};

export default DraggableFolder;

import React, { useCallback, useRef, useState } from "react";
import './DragDrop.scss';

const DragAndDrop = (): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fieldId = useRef<number>(0);

  // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const handleDragIn = useCallback((e: DragEvent):void {
    e.preventDefault();
    e.stopPropagation();
  }, [])

  return (
    <div className="DragDrop">
      <input
        type="file"
        id="fileUpload"
        style={{ display: "none" }}
        multiple={true}
      />

      <label
        className={isDragging ? "DragDrop-File-Dragging" : "DragDrop-File"}
        htmlFor="fileUpload"
        ref={dragRef}
      >
        <div>파일 첨부</div>
      </label>
    </div>
  );
};

export default DragAndDrop;

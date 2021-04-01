import React, { ChangeEvent, useCallback, useEffect, useRef, useState } from "react";
import './DragDrop.scss';

interface IFileTypes {
  id: number;
  object: File;
}

const DragAndDrop = (): JSX.Element => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [files, setFiles] = useState<IFileTypes[]>([]);
  const fileId = useRef<number>(0);

  // 드래그 이벤트를 감지하는 ref 참조변수 (label 태그에 들어갈 예정)
  const dragRef = useRef<HTMLLabelElement | null>(null);

  const onChangeFiles = useCallback((e: ChangeEvent<HTMLLabelElement> | any ):void => {
    let selectFiles: File[] = [];
    let tempFiles: IFileTypes[] = files;
  
    if(e.type === "drop") {
      selectFiles = e.dataTransfer.files;
    } else {
      selectFiles = e.target.files;
    }
  
    for (const file of selectFiles) {
      tempFiles = [
        ...tempFiles,
        {
          id: fileId.current++,
          object: file
        }
      ];
    }
    setFiles(tempFiles);
  }, [files])

  const handleDragIn = useCallback((e: DragEvent):void => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDragging(false);
  }, [])

  const handleDragOver = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    if(e.dataTransfer ! .files) {
      setIsDragging(true);
    }
  }, [])


  const handleDrop = useCallback((e: DragEvent): void => {
    e.preventDefault();
    e.stopPropagation();

    onChangeFiles(e);
    setIsDragging(false);
  }, [onChangeFiles])


  const initDragEvents = useCallback((): void => {
    if(dragRef.current !== null) {
      dragRef.current.addEventListener("dragenter", handleDragIn);
      dragRef.current.addEventListener("dragleave", handleDragOut);
      dragRef.current.addEventListener("dragover", handleDragOver);
      dragRef.current.addEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);

  const resetDragEvents = useCallback((): void => {
  //언마운트 될 때 이벤트 리스터 삭제
    
    if (dragRef.current !== null) {
      dragRef.current.removeEventListener("dragenter", handleDragIn);
      dragRef.current.removeEventListener("dragleave", handleDragOut);
      dragRef.current.removeEventListener("dragover", handleDragOver);
      dragRef.current.removeEventListener("drop", handleDrop);
    }
  }, [handleDragIn, handleDragOut, handleDragOver, handleDrop]);


  useEffect(() => {
    initDragEvents();

    return () => resetDragEvents();
  }, [initDragEvents, resetDragEvents])
  

  return (
    <>
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

    <div className="DragDrop-Files">
      {files.length > 0 && files.map((file: IFileTypes) => {
        const {
          id,
          object: { name }
        } = file;

        return (
          <div key={id}>
            <div>{name}</div>
            <div className="DragDrop-Files-Filter">x</div>
          </div>
        )
      })}
    </div>
    </>
  );
};

export default DragAndDrop;

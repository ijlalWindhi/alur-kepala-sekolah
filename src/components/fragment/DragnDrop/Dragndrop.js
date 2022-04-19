import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const onDrop = (drop) => {
    console.log(drop, file);
  };
  return <FileUploader handleChange={handleChange} onDrop={onDrop} name="file" types={fileTypes} />;
}

export default DragDrop;

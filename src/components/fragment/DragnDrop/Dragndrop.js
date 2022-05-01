import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({onChange}) {
  const [blogImage, setBlogimage] = useState(null);
  const handleChange = (file) => {
    console.log(file)
    setBlogimage(file);
    onChange(file)
    console.log(blogImage)
  };
  const onDrop = (drop) => {
    console.log(drop);
    setBlogimage(drop);
    onChange(drop)
  };
  return <FileUploader handleChange={handleChange} onDrop={onDrop} name="file" types={fileTypes} />;
}

export default DragDrop;

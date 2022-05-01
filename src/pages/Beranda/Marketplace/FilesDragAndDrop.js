import React from "react";
import PropTypes from "prop-types";
import Image from "../../../assets/icon-foto.svg";

export default function FilesDragAndDrop({ onUpload }) {
  const drop = React.useRef(null);

  FilesDragAndDrop.propTypes = {
    onUpload: PropTypes.func.isRequired,
  };

  React.useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);

    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
    };
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    if (files && files.length) {
      onUpload(files);
    }
  };

  return (
    <div ref={drop} className="bg-gray-100 py-10 rounded-xl text-center">
      <img src={Image} className="m-auto w-20" />
      <h6 className="mt-3">
        Drag and drop an <span className="text-red-500">image</span>
      </h6>
    </div>
  );
}

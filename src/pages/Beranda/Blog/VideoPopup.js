import React, { useState } from "react";

export default function VideoPopup({ VideoUrl }) {
  const [modalVideo, setModal] = useState(false);

  return (
    <>
      <div
        style={{
          width: "180px",
        }}
      >
        <div
          style={{
            height: "180px",
            width: "180px",
            position: "absolute",
          }}
          onClick={() => setModal(!modalVideo)}
        ></div>
        <iframe width="100%" height="180" src={`${VideoUrl}?wmode=opaque`} frameborder="0" allowfullscreen="allowfullscreen"></iframe>
      </div>
      {modalVideo ? (
        <>
          <div onClick={() => setModal(!modalVideo)} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <iframe width="560" height="315" src={VideoUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
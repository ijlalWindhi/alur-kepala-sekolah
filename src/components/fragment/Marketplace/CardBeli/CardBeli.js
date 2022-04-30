// inisasi library default
import React from "react";
// inisiasi component
import Item from "../../../../assets/item.svg";
// import Message from "../../../../assets/message-circle.svg";
// import HorizontalIcon from "../../../../assets/icon-horizontal.svg";

export default function CardBeli() {
  return (
    <div class="p-6 card bg-white rounded-3xl">
      <div className="grid grid-cols-5 gap-4">
        <div className="">
          <img className="" src={Item}></img>
        </div>
        <div className="col-span-3 flex justify-center flex-col">
          <h5 className="text-base font-medium ">Intel Core i7 10th Gen</h5>
          <h6 className="font-semibold text-md text-grey-700 mt-2">
            Rp4.599.000,00
          </h6>
        </div>
        <div className="flex justify-center flex-col justify-center">
          <div className="flex flex-row">
            <button
              style={{
                background: "#58ADFC",
                borderRadius: "8px",
              }}
              data-modal-toggle="popup-delete"
              class="p-2 text-white dark:text-white  inline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
            <button
              data-modal-toggle="edit-modal"
              class="p-2 ml-2 text-white dark:text-white  inline"
              style={{
                background: "#E7008A",
                borderRadius: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center">
            <img className="" src={Item}></img>
        </div>
        <h5 className="mb-2 text-base font-medium mt-10">Intel Core</h5>
        <p className="font-normal text-sm text-red-600">Kota Malang</p>
        <h6 className="font-normal text-sm text-grey-700 mt-2">Rp.8797192379</h6>
        <button className="btn btn-md bg-red-600 py-2 px-6 rounded-full text-white mt-6">Beli</button> */}
    </div>
  );
}

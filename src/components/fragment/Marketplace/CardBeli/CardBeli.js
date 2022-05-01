// inisasi library default
import React from "react";
// inisiasi component
import Item from "../../../../assets/item.svg";
// import { Dragndrop } from "../../../../components/fragment/DragnDrop";

export default function CardBeli() {
  const [Modal, setModal] = React.useState(false);

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
              onClick={() => setModal(true)}
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
      {Modal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-gray-500/50 focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto flex flex-col">
                          {/* <img src={ImageKonfrimasi} className="w-3/4 m-auto"/> */}
                          <h1 className="m-auto text-2xl font-bold">Konfirmasi Pembelian?</h1>
                          <p className="m-auto text-lg mt-5">Apakah anda yakin akan konfirmasi pembelian barang ini?</p>
                      </div>
                      <div className="flex items-center justify-center p-6">
                          <button
                              className="text-yellow-400 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-yellow-400"
                              type="button"
                              onClick={() => setModal(false)}
                          >
                              Batal
                          </button>
                          <button
                              className="bg-yellow-400 text-white text-sm px-6 py-3 rounded-full border-none"
                              type="submit"
                              onClick={() => setModal(false)}
                          >
                              Konfirmasi
                          </button>
                      </div>
                  </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

// inisasi library default
import React from "react";
// inisiasi component
import Item from "../../../../assets/item.svg";
import HorizontalIcon from "../../../../assets/icon-horizontal.svg";
import ImageKonfrimasi from "../../../../assets/image-konfirmasi.svg"

export default function CardList() {
  const [Modal, setModal] = React.useState(false);

  return (
    <div class="p-6 card bg-white rounded-3xl">
      <div className="grid grid-cols-4 gap-4">
        <div className="" style={{margin:"0 auto"}}>
          <img className="" src={Item}></img>
        </div>
        <div className="col-span-3">
          <div className="flex-row flex justify-between">
            <span className="text-xs font-normal text-gray-400">
              13 Januari 2022
            </span>
            <img src={HorizontalIcon} className="inline mr-3"></img>
          </div>
          <h5 className="text-base font-medium ">
            SMK Telkom Malang - Intel Core i7 10th Gen
          </h5>
          <p className="font-normal text-sm text-red-600">INV/BUY/11928410</p>
          <h5 className="font-semibold mt-4">Rp4.599.000,00 x 1</h5>
          <div className="mt-2">
            <button
              className="btn btn-sm py-2 px-4 rounded-full text-white inline text-sm font-medium"
              style={{ background: "#FFB573" }}
            >
              Detail Transaksi
            </button>
            <button
              className="btn btn-sm py-2 px-4 rounded-full text-white inline text-sm font-medium ml-2"
              style={{ background: "#00DDB5" }}
              onClick={() => setModal(true)}
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
      {Modal ? (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none bg-gray-500/50 focus:outline-none">
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto flex flex-col">
                          <img src={ImageKonfrimasi} className="w-3/4 m-auto"/>
                          <h1 className="m-auto text-2xl font-bold">Konfirmasi Pembelian?</h1>
                          <p className="m-auto text-lg mt-5">Apakah anda yakin akan konfirmasi pembelian barang ini?</p>
                      </div>
                      <div className="flex items-center justify-center p-6">
                          <button
                              className="text-green-300 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-green-300"
                              type="button"
                              onClick={() => setModal(false)}
                          >
                              Batal
                          </button>
                          <button
                              className="bg-green-300 text-white text-sm px-6 py-3 rounded-full border-none"
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

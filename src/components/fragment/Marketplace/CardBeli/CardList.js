// inisasi library default
import React from "react";
// inisiasi component
import Item from "../../../../assets/item.svg";
// import Message from "../../../../assets/message-circle.svg";
import HorizontalIcon from "../../../../assets/icon-horizontal.svg";

export default function CardList() {
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
            >
              Konfirmasi
            </button>
          </div>
        </div>
      </div>
      <div></div>
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

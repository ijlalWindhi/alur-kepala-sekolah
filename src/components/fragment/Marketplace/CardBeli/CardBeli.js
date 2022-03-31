// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component
import Item from "../../../../assets/item.svg"
import Message from "../../../../assets/message-circle.svg"

export default function CardBeli({ handleAction }) {
  return (
    <div class="p-6 card bg-white rounded-3xl">
        <div className="grid grid-cols-5 gap-4">
            <div className="">
                <img className="" src={Item}></img>
            </div>
            <div className="col-span-3">
                <h5 className="text-base font-medium ">Intel Core</h5>
                <span className="text-xs font-normal text-gray-400">INV/BUY/11928410</span>
                <h6 className="font-normal text-sm text-grey-700 mt-2">Rp.8797192379</h6>
                <p className="font-normal text-sm text-red-600">Cyber Mall</p>
            </div>
            <div>
                <h5>12 Maret 2021</h5>
                <div className="mt-4">
                    <img src={Message} className="inline mr-3"></img>
                    <button className="btn btn-sm bg-red-600 py-2 px-4 rounded-full text-white mt-6 inline text-sm font-medium">Detail</button>
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

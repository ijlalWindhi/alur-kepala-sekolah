// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component
import Item from "../../../../assets/item.svg"

export default function ItemCard({ handleAction }) {
  return (
    <div class="p-6 card bg-white rounded-3xl">
        <div className="flex justify-center">
            <img className="" src={Item}></img>
        </div>
        <h5 className="mb-2 text-base font-medium mt-10">Intel Core</h5>
        <p className="font-normal text-sm text-red-600">Kota Malang</p>
        <h6 className="font-normal text-sm text-grey-700 mt-2">Rp.8797192379</h6>
        <button className="btn btn-md bg-red-600 py-2 px-6 rounded-full text-white mt-6">Beli</button>
    </div>
  );
}

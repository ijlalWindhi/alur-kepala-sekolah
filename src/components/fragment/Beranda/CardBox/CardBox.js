// inisasi library default
import React, { useState, useEffect } from "react";
import Userimg from '../../../../assets/user-login.png'
// inisiasi component


export default function CardBox({}) {
  return (
    <div>
      {/* CARD */}
      <div class="card relative w-40 h-60 bg-lime-700 py-6 px-5 rounded-2xl">
        <div className="flex justify-end">
          <img src={Userimg}></img>
        </div>
        <div class="absolute bottom-0 left-0 h-12 w-12 ml-4">
          <h5 class="text-white">Supriyatno</h5>
        </div>
      </div>
    </div>
  );
}

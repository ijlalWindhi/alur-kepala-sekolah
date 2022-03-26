// inisasi library default
import React, { useState, useEffect } from "react";
import Userimg from '../../../../assets/user-login.png'
// inisiasi component


export default function CardBox({}) {
  return (
    <div>
      {/* CARD */}
      <div class="card w-40 h-60 bg-lime-700 py-8 px-5 rounded-lg">
        <img src={Userimg}></img>
        <div class="text-left">
          <h5 class="self-end text-white">Supriyatno</h5>
        </div>
      </div>
    </div>
  );
}

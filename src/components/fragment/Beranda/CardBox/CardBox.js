// inisasi library default
import React, { useState, useEffect } from "react";
import Userimg from '../../../../assets/user-login.png'
import bgCard from '../../../../assets/cardbg.png'
// inisiasi component


export default function CardBox({}) {
  return (
    <div>
      {/* CARD */}
      <div className="card relative w-44 h-64 rounded-2xl">
        <img src={bgCard} className=""/>
        <div className="absolute z-10 top-0 right-0 mt-6 mr-4 w-8">
            <img src={Userimg}></img>
        </div>
        <div class="absolute bottom-0 left-0 h-12 w-12 ml-4">
          <h5 class="text-white">Supriyatno</h5>
        </div>
      </div>
    </div>
  );
}

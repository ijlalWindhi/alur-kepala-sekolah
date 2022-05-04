// inisasi library default
import React from "react";
import Industri from "../../../assets/icon-koper.svg";
import Kerja from "../../../assets/icon-graduet.svg";
import Magang from "../../../assets/icon-building.svg";
import Sertifikasi from "../../../assets/icon-statistic.svg";
// inisiasi component

export default function DataBox() {
  return (
    <div class="flex flex-row justify-around w-1/2 ">
      <div className="flex flex-col justify-center">
        <div className="flex justify-center bg-sky-300 w-24 p-3 rounded-lg mx-auto">
          <img src={Industri} alt=""></img>
        </div>
        <h5 class="my-2 text-3xl font-semibold tracking-tight text-black text-center">200+</h5>
        <p class="font-medium text-base text-gray-800 text-center">Kunjugan Industri</p>
      </div>
      <div className="">
        <div className="flex justify-center bg-gray-800 w-24 p-3 rounded-lg mx-auto">
          <img src={Kerja} alt=""></img>
        </div>
        <h5 class="my-2 text-3xl font-semibold tracking-tight text-black text-center">30k+</h5>
        <p class="font-medium text-base text-gray-800 text-center">Bursa Kerja</p>
      </div>
      <div className="">
        <div className="flex justify-center bg-violet-400 w-24 p-3 rounded-lg mx-auto">
          <img src={Magang} alt=""></img>
        </div>
        <h5 class="my-2 text-3xl font-semibold tracking-tight text-black text-center">60k+</h5>
        <p class="font-medium text-base text-gray-800 text-center">Guru/Siswa Magang</p>
      </div>
      <div className="">
        <div className="flex justify-center bg-yellow-400 w-24 p-3 rounded-lg mx-auto">
          <img src={Sertifikasi} alt=""></img>
        </div>
        <h5 class="my-2 text-3xl font-semibold tracking-tight text-black text-center">1k+</h5>
        <p class="font-medium text-base text-gray-800 text-center">Sertifikasi Online</p>
      </div>
    </div>
  );
}

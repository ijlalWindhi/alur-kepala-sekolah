// inisasi library default
import React from 'react';
import { Briefcase, BarChart, Radio, Smile } from 'react-feather';
// inisiasi component

export default function DataBox() {
  return (
    <div class="flex flex-row justify-center p-6 box-border h-32 w-50 ">
      <div>
        <div className="bg-sky-300 p-3 mx-10 rounded-lg mb-4 text-white">
          <Briefcase></Briefcase>
        </div>
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-black">
          200+
        </h5>
        <p class="font-medium text-base text-gray-800">Kunjugan Industri</p>
      </div>
      <div className="ml-8">
      <div className="bg-zinc-500 p-3 mx-10 rounded-lg mb-4 text-white">
          <Radio></Radio>
        </div>
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-black">
          30k+
        </h5>
        <p class="font-medium text-base text-gray-800">Bursa Kerja</p>
      </div>
      <div className="ml-8">
      <div className="bg-violet-400 p-3 mx-12 rounded-lg mb-4 text-white">
          <Smile></Smile>
        </div>
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-black">
          60k+
        </h5>
        <p class="font-medium text-base text-gray-800">Guru/Siswa Magang</p>
      </div>
      <div className="ml-8">
        <div className="bg-yellow-400 p-3 mx-10 rounded-lg mb-4 text-white">
          <BarChart></BarChart>
        </div>
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-black">
          1k+
        </h5>
        <p class="font-medium text-base text-gray-800">Sirtifikasi Online</p>
      </div>
    </div>
  );
}

// inisasi library default
import React from 'react';
// inisiasi component

export default function DataBox() {
  return (
    <div class="flex flex-row justify-center p-6 box-border h-32 w-50 ">
      <div>
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-red-500">
          200+
        </h5>
        <p class="font-medium text-base text-gray-800">Kunjugan Industri</p>
      </div>
      <div className="ml-8">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-red-500">
          30k+
        </h5>
        <p class="font-medium text-base text-gray-800">Bursa Kerja</p>
      </div>
      <div className="ml-8">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-red-500">
          60k+
        </h5>
        <p class="font-medium text-base text-gray-800">Guru/Siswa Magang</p>
      </div>
      <div className="ml-8">
        <h5 class="mb-2 text-3xl font-semibold tracking-tight text-red-500">
          1k+
        </h5>
        <p class="font-medium text-base text-gray-800">Sirtifikasi Online</p>
      </div>
    </div>
  );
}

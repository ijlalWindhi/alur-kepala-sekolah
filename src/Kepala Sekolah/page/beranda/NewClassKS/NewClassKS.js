// inisiasi library default
import React from "react";
import { Users } from "react-feather";
import Calendar from 'react-calendar'

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebarKS";
import UserLogin from "../../../../assets/user-login.png"
import Class from "../../../../assets/class.svg"

export default class NewClassKS extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8 pb-8">
            <div class="col-span-2 ml-14">
              <h1 className="text-2xl font-semibold">Daftar Kelas</h1>
              <div className="mt-4 text-base font-normal text-gray-400">
                <a href="/berandaKS" className="mr-5">Semua</a>
                <a href="/newclassKS" className="mr-5 text-black">Terbaru</a>
                <a href="/endclassKS" className="mr-5">Selesai</a>
                <a href="/activeclassKS" className="mr-5">Aktif</a>
              </div>
              <div className="mt-5">
                <div className="bg-white p-4 rounded-3xl grid grid-cols-4">
                  <div className="">
                    <img src={Class}></img>
                  </div>
                  <div className="col-span-3 py-2 px-8">
                    <div className="grid grid-cols-4">
                      <h4 className="col-span-3 text-base font-normal text-gray-300">Andre Kurniawan S.Pd</h4>
                      <span className="text-right"><Users className="inline mr-2"/> 39 Orang</span>
                    </div>
                    <h2 className="mb-6 text-lg font-medium">Bahasa Inggris</h2>
                    <div className="grid grid-cols-4">
                      <div className="col-span-2">
                      <span className="p-2 rounded-lg bg-yellow-100 text-yellow-400 text-sm font-medium">Wawasan Umum</span>
                      </div>
                      <div></div>
                      <h3 className="text-red-600">Belum Bergabung</h3>
                    </div>
                    <div className="grid grid-cols-4 mt-6">
                      <div className="col-span-2">
                          <h6 className="text-sm font-medium">12 November 2022 - 20 November 2022</h6>
                      </div>
                      <div></div>
                      <button className="p-2 bg-red-600 rounded-full text-white">Join Course</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div>
              <div className="pl-16 pr-8">
                <h4 className="text-lg mb-4 font-semibold">Calendar</h4>
                <div className="bg-white p-4 rounded-3xl ">
                  <Calendar />
                </div>
              </div>
              <div className="pl-16 mt-12">
                <h4 className="text-lg font-semibold">Aktivitas Terbaru</h4>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Listening Session Talk</h5>
                      <span className="font-normal text-sm text-gray-500">Bahasa Inggris - 2 jam </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Modul 3 Basic Android</h5>
                      <span className="font-normal text-sm text-gray-500">Pemrograman Android - 8 jam </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Reading Session Talk</h5>
                      <span className="font-normal text-sm text-gray-500">Bahasa Inggris - Kemarin </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={Class} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Ulangan Harian 3 Matematika</h5>
                      <span className="font-normal text-sm text-gray-500">Matematika - Kemarin </span>
                    </div>
                  </div>
                </div>
                
              </div>
              <div className="pl-16 mt-12">
                <h4 className="text-lg font-semibold">Pengguna Online</h4>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Kedar Anugerah Nacha Putra</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Nanda Hafiza Yusron</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="grid grid-cols-12">
                    <div className="col-span-2">
                      <img src={UserLogin} className=""/>
                    </div>
                    <div className="col-span-10 ml-2">
                      <h5 className="text-base font-medium">Hafiz Rizky Nurwachid</h5>
                      <span className="font-normal text-sm text-gray-500">Siswa </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </LayoutSidebar>
      </>
    );
  }
}

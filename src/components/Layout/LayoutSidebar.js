// dashboard => utk dasar template biar tampilannya sama semua / layout aja di bagian page content

import React from "react";
import { Link } from "react-router-dom";
import UserLog from '../../assets/user-login.png'
import Logo from '../../assets/logo.png'
import Bell from '../../assets/bell.svg'
import Power from '../../assets/power.svg'
import Search from '../../assets/icon-search.svg'
import Beranda from '../../assets/icon-beranda.svg'
import Blog from '../../assets/icon-blog.svg'
import Marketplace from '../../assets/icon-marketplace.svg'
import Pengajuan from '../../assets/icon-pengajuan.svg'

export default function LayoutSidebar({ children }) {
  const sidebarContent = [
    {
      label: "Dashboard",
      target: "/beranda",
      icon: Beranda,
    },

    {
      label: "Blog/Berita",
      target: "/blog",
      icon: Blog,
    },
    {
      label: "Markerplace",
      target: "/marketplace",
      icon: Marketplace,
    },
    {
      label: "Pengajuan",
      target: "/pengajuan",
      icon: Pengajuan,
    },
    {
      label: "Forum Diskusi",
      target: "/forumDiskusi",
      icon: Beranda,
    },
  ];

  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6 ">
      <section className="sidebar md:col-span-1 ">
        {/* LOGO DISINI */}
        <div className="box-icon border-white text-sm font-semibold justify-center items-center flex flex-col mt-4">
          <div className="mt" width="42">
            <img src={Logo} /> 
          </div>
          <h1 className="font-bold mt-2">PLATFORM SMK TKJ</h1>
          </div>
        <div>
          <ul>
            {/* NAV-LINK */}
            {sidebarContent.map(({ target, label, icon }, i) => (
              <li className="ml-3 pl-6 hover:bg-red-500 hover:text-white hover:rounded-full w-9/12">
                <Link to={target} className="flex items-center p-4 text-base font-normal md:dark:hover:text-white dark:hover:bg-green-700 dark:hover:text-white dark:border-gray-700" aria-current="page">
                <img src={icon} className="mr-3"/> {label}
                </Link>
              </li>
            ))}
            <li className="ml-3 pl-6">
              <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-dark border-red-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">Pengajuan<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                          <Link to="/guruTamu">
                            <span className="font-normal text-base ">Guru Tamu </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/guruMagang">
                            <span className="font-normal text-base ">Magang Guru / Siswa </span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/kunjungan">
                            <span className="font-normal text-base ">Kunjungan</span>
                          </Link>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sertifikasi Online</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Bursa Kerja</a>
                        </li>
                      </ul>
                </div>
            </li>
          <div className="static">
            <li className="absolute bottom-14 left-6 text-lg font-medium"><img src={UserLog} width="42" className="inline pr-2"/>Jhon Doe</li>
          </div>
          </ul>
        </div>
      </section>
      <main class="main md:col-span-5 bg-gray-100">
        <div className="grid grid-cols-4 gap-4 pt-12 ml-14">
          {/* <div className="col-span-3 relative">
            <input type="text" className="rounded-full w-80 h-11 px-8 border-none" placeholder="Search"></input>
            <button type="submit" className="absolute">
              <img src={Search}/>
            </button>
          </div> */}
          <div class="col-span-3 relative">
            <input class="focus:ring-red-500 focus:border-red-500 rounded-full w-80 h-11 px-8 border-none" text-black type="text" name="search" placeholder="Search"></input>
            <button type="submit" class="absolute left-0 top-0 ml-64">
              <img src={Search}/>
            </button>
          </div>
          <div className="mt-2">
            <span className="badge bg-red-300 rounded-full pl-2 pr-4 pt-2 pb-3 cursor-pointer">
              <img src={UserLog} className="inline w-8 mr-2"></img>
              <span className="text-sm font-medium text-red-500">John Doe</span>
            </span>
            <img src={Bell} className="inline w-8 ml-8 mr-8 cursor-pointer"></img>
            <img src={Power} className="inline w-8 cursor-pointer"></img>
          </div>
        </div>
        {/* <!-- Page content--> */}{" "}
        <div className="">
          {children}{" "}
        </div>
      </main>
    </div>
  );
}

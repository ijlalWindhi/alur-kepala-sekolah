// dashboard => utk dasar template biar tampilannya sama semua / layout aja di bagian page content

import React from "react";
import { Link } from "react-router-dom";
import UserLog from '../../assets/user-login.png'
import Logo from '../../assets/logo.png'

export default function LayoutSidebar({ children }) {
  const sidebarContent = [
    {
      label: "Dashboard",
      target: "/beranda",
      // icon: "icon/estate.svg",
    },

    {
      label: "Blog/Berita",
      target: "/blog",
    },
    {
      label: "Markerplace",
      target: "/marketplace",
    },
    {
      label: "Pengajuan",
      target: "/pengajuan",
    },
    {
      label: "Forum Diskusi",
      target: "/forumDiskusi",
    },
  ];

  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6">
      <section className="sidebar bg-green-400 md:col-span-1">
        {/* LOGO DISINI */}
        <div className="box-icon text-sm font-semibold justify-center items-center">
          <img src={Logo}/>PLATFORM SMK TKJ
          </div>
        <div>
          <ul>
            {/* NAV-LINK */}
            {sidebarContent.map(({ target, label }, i) => (
              <li className="pl-6">
                <Link to={target} className="flex items-center p-4 text-base font-normal" aria-current="page">
                  
                  {label}
                </Link>
              </li>
            ))}
            <li className="absolute bottom-14 left-6 text-lg font-medium"><img src={UserLog} width="42" className="inline pr-2"/>Jhon Doe</li>
          </ul>
        </div>
      </section>
      <main class="main bg-gray-300 md:col-span-5">
        Main CONTENT
        {/* <!-- Page content--> */}{" "}
        <div className="bg-blue-200">
          <h4>Selamat Datang, Namamu</h4>
          {children}{" "}
        </div>
      </main>
    </div>
  );
}

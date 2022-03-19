// dashboard => utk dasar template biar tampilannya sama semua / layout aja di bagian page content

import React from "react";
import { Link } from "react-router-dom";

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
    {
      label: "Kembali ke Landing Page",
      target: "/landingPage",
    },
  ];

  return (
    <div className="parent md:h-screen md:grid md:grid-cols-6">
      <section className="sidebar bg-green-400 md:col-span-1">
        {/* LOGO DISINI */}
        <div className="box-icon">PLATFORM SMK TKJ</div>
        <div>
          <ul>
            {/* NAV-LINK */}
            {sidebarContent.map(({ target, label }, i) => (
              <li>
                <Link to={target} className="flex items-center" aria-current="page">
                  icon
                  {label}
                </Link>
              </li>
            ))}
            <li>akun yg login</li>
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

// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../components/Layout/LayoutSidebar";
import CardBox from "../../components/fragment/Beranda/CardBox";
import UserLogin from "../../assets/user-login.png"
import siaran from "../../assets/youtube.svg"
import foto from "../../assets/icon-foto.svg"
import forum from "../../assets/icon-forum.svg"
import postingan from "../../assets/postingan.png"
import newGroup from "../../assets/newGroup.png"
import Horizontal from "../../assets/icon-horizontal.svg"

export default class Beranda extends React.Component {
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
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8">
            <div class="col-span-2 ml-14">
              <div className="grid grid-cols-4">
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
              </div>
              <div className="card rounded-lg bg-white p-6 mt-8">
                <img src={UserLogin} className="inline w-14"/>
                <input type="text" className="focus:ring-red-500 focus:border-red-500  w-4/5 h-12 bg-gray-100 border-none text-gray-500 rounded-full px-6 ml-4" placeholder="Apa yang anda pikirkan sekarang?"></input>
                <div className="grid grid-cols-5 gap-4 mt-4">
                  <div></div>
                  <div className="text-sm font-medium text-gray-500 cursor-pointer"><img className="w-8 mr-2.5 inline" src={siaran}></img> Siaran</div>
                  <div className="text-sm font-medium text-gray-500 cursor-pointer"><img className="mr-2.5 inline" src={foto}></img> Foto/Video</div>
                  <div className="text-sm font-medium text-gray-500 cursor-pointer"><img className="mr-2.5 inline" src={forum}></img> Forum</div>
                </div>
              </div>
              <div className="card rounded-lg bg-white p-6 mt-8">
                <div className="grid grid-cols-9">
                  <div>
                    <img src={UserLogin} className="w-14"/>
                  </div>
                  <div className="col-span-7">
                    <h5 className="text-base font-medium">E10000</h5>
                    <span className="font-normal text-sm text-gray-500">1 Jam yang lalu</span>
                  </div>
                  <div className="col-span-1 mt-2 cursor-pointer">
                    <img src={Horizontal} className="w-6"/>
                  </div>
                </div>
                <div className="font-normal text-sm mt-4">Kasus penularan subvarian BA.2 Omicron dilaporkan terus meningkat. Studi ungkap tanda-tanda keparahan yang disebabkan oleh "Son of Omicron" ini.</div>
                <div className="mt-2">
                  <img className="w-full" src={postingan}></img>
                  <span className="font-normal text-sm mt-2 text-slate-300">Kompasian.com</span>
                  <h4 className="font-medium text-base">Subvarian BA.2 Omicron Meningkat, Studi Ungkap Tanda-tanda Keparahan</h4>  
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32">
                <h4 className="text-lg font-semibold">Kontak</h4>
                <div className="mt-6">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-6">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-6">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
              </div>
              <div className="pl-32 mt-12">
                <h4 className="text-lg font-semibold">Percakapan Grub</h4>
                <div className="mt-6">
                  <a href="#">
                    <img src={newGroup} className="inline mr-4"></img>
                    <span className="font-normal text-base text-gray-500">Buat grup baru</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </LayoutSidebar>
      </>
    );
  }
}

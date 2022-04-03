// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import GrupCard from "../../../components/fragment/Forum/GrupCard";
import SummaryCard from "../../../components/fragment/Marketplace/SummaryCard";
import Notification from "../../../components/fragment/Forum/Notification";
import UserLogin from "../../../assets/user-login.png"
import postingan from "../../../assets/postingan.png"


export default class ForumDiskusi extends React.Component {
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
        <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-10">
            <div class="col-span-2 ml-14">
              <div id="tabContent">
                {/* Tab Content 1 */}
                <div class="hidden py-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h1 className="text-3xl font-semibold">Aktivitas Terbaru</h1>
                  <div className="card rounded-lg bg-white p-6 mt-8 mr-20">
                  <div className="grid grid-cols-9">
                    <div>
                      <img src={UserLogin}/>
                    </div>
                    <div className="col-span-7">
                      <h5 className="text-base font-medium">Forum Programmer Indonesia</h5>
                      <span className="font-normal text-sm text-slate-300">Antonio Purnama</span>
                      <h6 className="font-normal text-sm text-slate-300">Yesterday at 12.30</h6>
                    </div>
                  </div>
                  <div className="font-normal text-sm mt-4">Kasus penularan subvarian BA.2 Omicron dilaporkan terus meningkat. Studi ungkap tanda-tanda keparahan yang disebabkan oleh "Son of Omicron" ini.</div>
                  <div className="mt-2">
                    <img className="w-full" src={postingan}></img>
                    <div className="mt-2 grid grid-cols-4">
                      <div className="col-span-3">
                        <button>Like : 23</button>
                        <button className="mx-4">Comment : 23</button>
                        <button>Share : 23</button>
                      </div>
                    </div>  
                  </div>
                </div>
                </div>
                {/* Tab Content 2 */}
                <div class="hidden p-4" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <h1 className="font-semibold text-2xl">Disarankan Untuk Anda</h1>
                  <h4 className="mb-8 font-semibold text-base text-slate-400">Grup yang mungkin anda minati</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <GrupCard />
                    <GrupCard />
                    <GrupCard />
                  </div>
                  <h1 className="font-semibold text-2xl mt-8">Grup Teman</h1>
                  <h4 className="mb-8 font-semibold text-base text-slate-400">Grub yang teman anda bergabung didalamnya</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <GrupCard />
                    <GrupCard />
                  </div>
                </div>
                {/* Tab Content 3 */}
                <div class="hidden p-4" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <div className="card rounded-lg p-4">
                    <h1 className="font-semibold text-xl mb-8">Lebih Awal</h1>
                    <div className="gap-4">
                      <Notification/>
                      <Notification/>
                      <Notification/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Sharing Informasi</h4>
              <div>
                <div class="mb-4 border-b border-gray-200 mt-8">
                  <ul class=" -mb-px text-sm font-medium" id="tab" data-tabs-toggle="#tabContent" role="tablist">
                    <li class="mr-3" role="presentation">
                      <button
                        class="w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg  focus:ring-none active:btn-warning focus:btn-warning"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Beranda Anda
                      </button>
                    </li>
                    <li class="mr-3" role="presentation">
                      <button
                        class="w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg focus:ring-none active:btn-warning focus:btn-warning"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Temukan
                      </button>
                    </li>
                    <li class="mr-3" role="presentation">
                      <button
                        class=" w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg focus:ring-none active:btn-warning focus:btn-warning"
                        id="settings-tab"
                        data-tabs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        Notifikasi
                      </button>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">Grup yang Anda Tergabung didalamnya</h4>
                    <div className="mt-6 grid grid-cols-6">
                      <img src={UserLogin} className="inline w-10 mr-4"></img>
                      <div className="col-span-5">
                        <span className="text-base font-normal">Programmer Club</span><br/>
                        <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-6">
                      <img src={UserLogin} className="inline w-10 mr-4"></img>
                      <div className="col-span-5">
                        <span className="text-base font-normal">Programmer Club</span><br/>
                        <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                      </div>
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

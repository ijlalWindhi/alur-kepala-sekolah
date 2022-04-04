// inisiasi library default
import React from "react";
import {Link} from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";

import UserLogin from "../../../../assets/user-login.png"
import like from "../../../../assets/like.png"
import komen from "../../../../assets/komen.png"
import tayangan from "../../../../assets/tayangan.png"
import spider from "../../../../assets/spider.png"
import bookmark from "../../../../assets/icon-bookmarkWhite.svg"
import calender from "../../../../assets/calendar.png"
import video from "../../../../assets/video.png"
import bookmarkmerah from "../../../../assets/bookmark-merah.png"
import morehorizontal from "../../../../assets/more-horizontal.png"
import settings from "../../../../assets/icon-settings.svg"
import search from "../../../../assets/icon-search.svg"

export default class Blog extends React.Component {
    constructor() {
        super();
        this.state = {
            // call variable
        };
    }
    render() {
        return (
            <> < LayoutSidebar > <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8">
                <div class="col-span-2 ml-14 mt-3">
                    <div className="card rounded-lg p-6">
                        <h4 className="text-3xl font-semibold mb-5">Video Tersimpan</h4>
                        <div className="card rounded-lg  mt-8">
                            <ul role="list" class="p-6 divide-y bg-white mb-5">
                                <li class="flex grid grid-cols-3 py-4 first:pt-0 last:pb-0">
                                    <img src={spider} className="inline w-180 h-100 mr-4 justify-self-stretch"></img>
                                    <div>
                                        <p class="text-sm font-medium text-slate-900">Spider-Man : No Way Home 2021</p>
                                        <p class="text-sm text-gray-400 truncate">12 hari yang lalu</p>
                                        <div className="grid grid-cols-5 gap-4 mt-4">
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={like}></img>
                                                106k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={komen}></img>
                                                27k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={tayangan}></img>
                                                27jt</div>
                                        </div>
                                        <div className="mt-7">
                                            <img src={UserLogin} className="inline w-6 mr-4"></img>
                                            <span className="text-sm font-medium">Saqahayang</span>
                                        </div>
                                    </div>
                                    <div class="justify-self-end">
                                        <img className="w-6 mr-1.5 inline" src={bookmarkmerah}></img>
                                        <img className="w-6 mr-1.5 inline" src={morehorizontal}></img>
                                    </div>

                                </li>
                            </ul>
                            <ul role="list" class="p-6 divide-y bg-white mb-5">
                                <li class="flex grid grid-cols-3 py-4 first:pt-0 last:pb-0">
                                    <img src={spider} className="inline w-180 h-100 mr-4 justify-self-stretch"></img>
                                    <div>
                                        <p class="text-sm font-medium text-slate-900">Spider-Man : No Way Home 2021</p>
                                        <p class="text-sm text-gray-400 truncate">12 hari yang lalu</p>
                                        <div className="grid grid-cols-5 gap-4 mt-4">
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={like}></img>
                                                106k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={komen}></img>
                                                27k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={tayangan}></img>
                                                27jt</div>
                                        </div>
                                        <div className="mt-7">
                                            <img src={UserLogin} className="inline w-6 mr-4"></img>
                                            <span className="text-sm font-medium">Saqahayang</span>
                                        </div>
                                    </div>
                                    <div class="justify-self-end">
                                        <img className="w-6 mr-1.5 inline" src={bookmarkmerah}></img>
                                        <img className="w-6 mr-1.5 inline" src={morehorizontal}></img>
                                    </div>

                                </li>
                            </ul>
                            <ul role="list" class="p-6 divide-y bg-white mb-5">
                                <li class="flex grid grid-cols-3 py-4 first:pt-0 last:pb-0">
                                    <img src={spider} className="inline w-180 h-100 mr-4 justify-self-stretch"></img>
                                    <div>
                                        <p class="text-sm font-medium text-slate-900">Spider-Man : No Way Home 2021</p>
                                        <p class="text-sm text-gray-400 truncate">12 hari yang lalu</p>
                                        <div className="grid grid-cols-5 gap-4 mt-4">
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={like}></img>
                                                106k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={komen}></img>
                                                27k</div>
                                            <div className="text-sm font-medium text-gray-400">
                                                <img className="w-4 mr-2.5 inline" src={tayangan}></img>
                                                27jt</div>
                                        </div>
                                        <div className="mt-7">
                                            <img src={UserLogin} className="inline w-6 mr-4"></img>
                                            <span className="text-sm font-medium">Saqahayang</span>
                                        </div>
                                    </div>
                                    <div class="justify-self-end">
                                        <img className="w-6 mr-1.5 inline" src={bookmarkmerah}></img>
                                        <img className="w-6 mr-1.5 inline" src={morehorizontal}></img>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="pl-32 mt-12">
                        <div className="flex flex-row">
                            <h4 className="text-lg font-semibold">Blog/Berita</h4>
                            <img src={settings} className="ml-24 cursor-pointer"/>
                        </div>
                        <div class="col-span-3 relative">
                            <input
                                class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none"
                                text-black="text-black"
                                type="text"
                                name="search"
                                placeholder="Cari Blog/Berita"></input>
                            <button type="submit" class="absolute left-0 top-5 ml-48">
                                <img src={search}/>
                            </button>
                        </div>
                        <div className="mt-8 ml-5">
                            <Link to="/blog">
                                <img src={video} className="inline mr-4"></img>
                                <span className="font-normal text-base ">Siaran Langsung</span>
                            </Link>
                        </div>
                        <div className="mt-6 ml-5">
                            <Link to="/acara">
                                <img src={calender} className="inline mr-4"></img>
                                <span className="font-normal text-base ">Acara
                                </span>
                            </Link>
                        </div>
                        <div className="mt-6">
                            <Link to="/tersimpan" className="py-3 pl-5 pr-24 text-white bg-red-500 rounded-2xl">
                                <img src={bookmark} className="inline mr-4"></img>
                                <span className="font-normal text-base ">Tersimpan
                                </span>
                            </Link>
                        </div>
                        <h4 className="text-lg font-semibold mt-8 mb-3">Daftar Tontonan</h4>
                        <div className="mt-4">
                            <img src={UserLogin} className="inline w-10 mr-4"></img>
                            <span className="text-base font-normal">Alfia Zena</span>
                        </div>
                        <div className="mt-4">
                            <img src={UserLogin} className="inline w-10 mr-4"></img>
                            <span className="text-base font-normal">Alfia Zena</span>
                        </div>
                        <div className="mt-4">
                            <img src={UserLogin} className="inline w-10 mr-4"></img>
                            <span className="text-base font-normal">Alfia Zena</span>
                        </div>
                    </div>
                </div>
            </div>

        </LayoutSidebar>
    </>
        );
    }
}

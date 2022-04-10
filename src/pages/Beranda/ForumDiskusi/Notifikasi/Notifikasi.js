// inisiasi library default
import React from "react";
import {Link} from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import DragAndDropFile from "./../FilesDragAndDrop"
import AddButton from "../../../../assets/icon-add.svg"
import settings from "../../../../assets/icon-settings.svg"
import bag from "../../../../assets/berandaforum.png"
import trolly from "../../../../assets/temukan.png"
import tag from "../../../../assets/notifikasiputih.png"
import UserLogin from '../../../../assets/user-login.png';
import Notification from '../../../../components/fragment/Forum/Notification';





export default class Marketplace extends React.Component {
    constructor() {
        super();
        this.state = {
            // call variable
        };
        
        // state show modal tambah barang
        this.state.showModal = false;
    }

    // function untuk menampilkan modal tambah barang
    Modal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
            <> < LayoutSidebar > 
            <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
                <div class="col-span-2 ml-14">
                <div>
                  <div className="card rounded-lg p-4">
                    <h1 className="font-semibold text-xl mb-8">Lebih Awal</h1>
                    <div className="gap-4">
                      <Notification />
                      <Notification />
                      <Notification />
                    </div>
                  </div>
                </div>

                </div>



{/*batas kanan */}

                <div>
                  <div className="pl-32 mt-10">
                      <div className="flex flex-row">
                          <h4 className="text-lg font-semibold">Sharing Informasi</h4>
                          <img src={settings} className="ml-24 cursor-pointer"/>
                      </div>
                     
                      <div className="mt-8">
                          <Link to="/forumdiskusi" >
                              <img src={bag} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Beranda Anda</span>
                          </Link>
                      </div>
                      <div className="mt-6 mr-4">
                          <Link to="/Temukan" >
                              <img src={trolly} className="inline mr-4 text-white"></img>
                              <span className="font-normal text-base ">Temukan</span>
                          </Link>
                      </div>
                      <div className="mt-6 mr-4 mb-8">
                          <Link to="/Notifikasi" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                              <img src={tag} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Notifikasi</span>
                          </Link>
                      </div>
                      <div className="mt-12">
                          <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                              <img src={AddButton} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Tambah Forum</span>
                          </span>
                      </div>
                              
                          <div className="mt-8">
                            <h4 className="text-lg font-semibold">
                              Grup yang Anda Tergabung didalamnya
                            </h4>
                            <div className="mt-6 grid grid-cols-6">
                              <img src={UserLogin} className="inline w-10 mr-4"></img>
                              <div className="col-span-5">
                                <span className="text-base font-normal">
                                  Programmer Club
                                </span>
                                <br />
                                <span className="text-sm font-normal text-slate-400">
                                  Terakhir aktif 1 hari yang lalu
                                </span>
                              </div>
                            </div>
                            <div className="mt-6 grid grid-cols-6">
                              <img src={UserLogin} className="inline w-10 mr-4"></img>
                              <div className="col-span-5">
                                <span className="text-base font-normal">
                                  Programmer Club
                                </span>
                                <br />
                                <span className="text-sm font-normal text-slate-400">
                                  Terakhir aktif 1 hari yang lalu
                                </span>
                              </div>
                            </div>
                          </div>
                      
                  </div>
                </div>
            </div>
            {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative px-6 pt-6 flex-auto">
                            <DragAndDropFile/>
                            <input
                                type="text"
                                name="forum"
                                id="forum"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Forum Name"/>
                            <textarea 
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Deskripsi Forum"/>
                        </div>
                        <div className="flex items-center justify-end p-6">
                            <button
                                className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500"
                                type="button"
                                onClick={this.Modal}>
                                Batal
                            </button>
                            <button
                                className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none"
                                type="submit"
                                onClick={this.Modal}>
                                Tambah
                            </button>
                        </div>
                    </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null}
        </LayoutSidebar>
    </>
        );
    }
}

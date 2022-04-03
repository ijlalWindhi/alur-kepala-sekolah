// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import ItemCard from "../../../components/fragment/Marketplace/ItemCard";
import CardBeli from "../../../components/fragment/Marketplace/CardBeli";
import SummaryCard from "../../../components/fragment/Marketplace/SummaryCard";
import Location from "../../../assets/map-pin.png";
import AddButton from "../../../assets/add-button.png"
// import deleteImg from "../../../../assets/delete.png"

export default class Marketplace extends React.Component {
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
                <div class="hidden p-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-xl inline">Pilihan Hari Ini</h1>
                    <div className="flex justify-end">
                      <img src={Location} className="inline"></img>
                      <span className="text-right text-base font-normal ml-2"> Jakarta</span>
                    </div>
                  </div>

                  {/* fitur tambah barang */}
                      <div className="mb-8 grid grid-cols-5 mt-5">
                        <div className="col-span-2">
                          <button className="bg-red-600 p-3 text-white rounded-2xl" data-modal-toggle="defaultModal">+ Tambah Barang</button>
                        </div>
                        <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div class="flex justify-between items-start p-5 rounded-t">
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                        </button>
                                    </div>
                                    <div class="p-6 space-y-6">
                                        <div className="grid ">
                                          <input type="file" className="box mb-3 rounded-3xl border-slate-300  text-slate-300" placeholder="choose file"></input>
                                          <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Nama Barang"></input>
                                          <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Harga Barang"></input>
                                          <input type="text" className="mb-3 rounded-3xl border-slate-300 p-8 text-slate-300" placeholder="Deskripsi Barang"></input>
                                          <input type="text" className="mb-3 rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Lokasi Penjualan"></input>
                                        </div>
                                    </div>
                                    
                                    <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                        <button data-modal-toggle="defaultModal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tambah</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div> 

                  <div className="grid grid-cols-3 gap-4">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                  </div>
                </div>
                {/* Tab Content 2 */}
                <div class="hidden p-4" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-xl inline">Pembelian Barang</h1>
                    <span className="col-span-1 text-right text-base font-normal text-red-600"> Beli Barang</span>
                  </div>
                  <div className="grid cols-5 gap-4">
                    <CardBeli />
                    <CardBeli />
                    <CardBeli />
                  </div>
                </div>
                {/* Tab Content 3 */}
                <div class="hidden p-4" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-xl inline">Penjualan Barang</h1>
                    <span className="col-span-1 text-right text-base font-normal text-red-600"> Jual Barang</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <SummaryCard />
                    <SummaryCard />
                    <SummaryCard />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Marketplace</h4>
              <input type="text" className="rounded-full w-80 h-11 px-8 mt-8  border-red-400" placeholder="Search" style={{ border: `1px solid #E70000` }}></input>
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>       
                        Telusuri Semua
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
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        Keranjang
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
                        Riwayat Pembelian
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-semibold">Filter</h4>
                <div className="mt-4">
                  <img src={Location} className="inline mr-2"></img>
                  <span className="">Jakarta, Indonesia</span>
                </div>
              </div>
              <div className="mt-5">
                <h4 className="text-lg font-semibold">Kategori</h4>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Component</span>
                  <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Aksesoris Komputer</span>
                  <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
                  <span className="badge bg-red-200 p-4 rounded-3xl text-xs font-medium text-red-600">Komputer</span>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

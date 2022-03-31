// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import AddButton from "../../../../assets/add-button.png"
import deleteImg from "../../../../assets/delete.png"


export default class GuruMagang extends React.Component {
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
          <div className="pl-12 grid grid-flow-row-dense grid-cols-3 mt-10">
            <div className="col-span-2" >
              <h1 className="text-xl font-semibold">Pengajuan Magang Guru</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button className="bg-red-600 p-3 text-white rounded-2xl" data-modal-toggle="defaultModal">+ Guru</button>
                </div>
                <div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div class="flex justify-between items-start p-5 rounded-t">
                                <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                    Tambah Magang Guru
                                </h3>
                                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                </button>
                            </div>
                            <div class="p-6 space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                  <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Magang"></input>
                                  <div className="">
                                    <span className="text-sm font-medium text-black">Daftar List Tambah Guru</span>
                                    <button type="button" className="ml-24" data-modal-toggle="small-modal">
                                      <img src={AddButton}></img>
                                    </button>
                                  </div>
                                  <input type="number" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Jumlah Guru"></input>
                                </div>
                            </div>
                            <div id="small-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                              <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                            <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                                Small modal
                                            </h3>
                                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                            </button>
                                        </div>
                                        <div class="p-6 space-y-6">  
                                          <fieldset>
                                          <legend class="sr-only">Checkbox variants</legend>
                                          <div class="flex items-center mb-4 grid grid-cols-5">
                                            <label for="checkbox-1" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                            <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                          </div>
                                          <div class="flex items-center mb-4 grid grid-cols-5">
                                            <label for="checkbox-2" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                            <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                          </div>
                                          </fieldset>
                                        </div>
                                        <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                          <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                          <button data-modal-toggle="defaultModal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center p-6 space-x-2 rounded-b ">
                                <button data-modal-toggle="defaultModal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                <button data-modal-toggle="defaultModal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-dark border-red-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button">3<svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
                  <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                      <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                          <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                      </ul>
                  </div>
                  <input type="text" className="rounded-full w-64 h-11 px-8 border-red-400" placeholder="Search" style={{border: `1px solid #E70000`}}></input>              
                </div>
              </div>       
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Aksi
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Tujuan Magang
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Tanggal Magang
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Lokasi
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Jumlah Guru
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Nama Guru
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Opsi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <input id="checkbox-table-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label for="checkbox-table-1" class="sr-only">checkbox</label>
                            </div>
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          Telkom Grup
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          21 Januari 2021
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          Jakasrta Selatan
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          10
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                          Dianne Ruseel, Dinda Caharani
                        </td>
                        <td class="px-6 py-4 text-right">
                          <button data-modal-toggle="edit-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                          <button data-modal-toggle="popup-delete" class="font-medium text-red-600 dark:text-blue-500 hover:underline ml-2">Delete</button>
                          <div id="edit-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                            <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div class="flex justify-between items-start p-5 rounded-t">
                                        <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                            Tambah Magang Guru
                                        </h3>
                                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-modal">
                                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                        </button>
                                    </div>
                                    <div class="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                          <input type="date" className="rounded-3xl border-slate-400 p-4 text-slate-400" placeholder="Tanggal Magang"></input>
                                          <div className="">
                                            <span className="text-sm font-medium text-black">Daftar List Tambah Guru</span>
                                            <button type="button" className="ml-24" data-modal-toggle="edit-detail-modal">
                                              <img src={AddButton}></img>
                                            </button>
                                          </div>
                                          <input type="number" className="rounded-3xl border-slate-400 p-4 text-slate-300" placeholder="Jumlah Guru"></input>
                                        </div>
                                    </div>
                                    <div id="edit-detail-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                                      <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                                        Small modal
                                                    </h3>
                                                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="edit-detail-modal">
                                                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                                                    </button>
                                                </div>
                                                <div class="p-6 space-y-6">  
                                                  <fieldset>
                                                  <legend class="sr-only">Checkbox variants</legend>
                                                  <div class="flex items-center mb-4 grid grid-cols-5">
                                                    <label for="checkbox-1" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                                    <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                                  </div>
                                                  <div class="flex items-center mb-4 grid grid-cols-5">
                                                    <label for="checkbox-2" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-4">I agree to the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                                                    <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked="" />
                                                  </div>
                                                  </fieldset>
                                                </div>
                                                <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                                  <button data-modal-toggle="edit-detail-modal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                                  <button data-modal-toggle="edit-detail-modal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Simpan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button data-modal-toggle="edit-modal" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                        <button data-modal-toggle="edit-modal" type="button" class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajukan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                          {/* Pop Up Delete */}
                          <div id="popup-delete" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
                                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                        <div class="flex justify-end p-2">
                                        </div>
                                        <div class="p-6 pt-0 text-center">
                                            <img className="mx-auto" src={deleteImg}></img>
                                            <h2 className="text-lg font-semibold text-black">Hapus Guru Tamu?</h2>
                                            <h3 class="mb-5 text-base font-normal text-black mt-4">Apakah anda yakin ingin menghapus data guru tamu ini?</h3>
                                            <button data-modal-toggle="popup-delete" type="button" class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Batal</button>
                                            <button data-modal-toggle="popup-delete" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center ml-2">
                                                Hapus
                                            </button>
                                        </div>
                                    </div>
                                </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

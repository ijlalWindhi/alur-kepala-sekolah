// inisiasi library default
import React from "react";
import axios from "axios"
import { baseUrl } from "../../../../config"

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import AddButton from "../../../../assets/add-button.png"
import deleteImg from "../../../../assets/delete.png"
import { Link } from "react-router-dom";

export default class PengajuanBursa extends React.Component {
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
              <h1 className="text-xl font-semibold">Pengajuan Bursa Kerja</h1>
              <div className="mb-8 mt-5">
                  <input type="text" className="rounded-full w-64 h-11 px-8 border-red-400" placeholder="Search" style={{border: `1px solid #E70000`}}></input>              
              </div>       
              <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Nama Jabatan Kerja
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Deskripsi
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Persyaratan
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Tanggal Due Date
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Opsi
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-4 p-4">
                            <h6 className="text-black font-semibold text-sm">Web Developer</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">Bertanggung jawab mengelola website</h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-semibold text-sm">1. Menguasai 3 bahasa porgram</h6>
                          <h6 className="text-black font-semibold text-sm">2. Mampu bekerjasama</h6>
                        </td>
                        <td class="px-6 py-4 text-black font-semibold text-sm">
                            15 Januari 2022
                        </td>
                        <td class="px-6 py-4 text-right">
                          <button data-modal-toggle="ajukan-modal" class="font-medium p-2 text-white dark:text-white bg-red-600 rounded-full px-2">
                              Ajukan
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
            </div>
            {/* Modal Ajukan */}
            <div id="ajukan-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5 rounded-t">
                            <h3 class="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                Pengajuan Bursa Kerja
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="ajukan-modal">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <div class="p-6 space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div className="mt-2">
                                <input className="border-slate-400 rounded-2xl py-2 px-4 w-64 text-slate-400" type="text" placeholder="Nama jabatan kerja"></input>
                              </div>
                              <div className="mt-2">
                                <input className="border-slate-400 rounded-2xl py-2 px-4 w-64  text-slate-400" type="date" placeholder="Tanggal Pengajuan"></input>
                              </div>
                            </div>
                            <div className="grid grid-rows-2 grid-flow-col gap-4"> 
                              <div className="">
                                  <input className="border-slate-400 rounded-2xl py-2 px-4 w-64 text-slate-400" type="text" placeholder="Deskripsi"></input>
                              </div>
                              <div className="">
                                  <input className="border-slate-400 rounded-2xl py-2 px-4 w-64 text-slate-400" type="date" placeholder="Tanggak Due Date"></input>
                              </div>
                              <div className="row-span-2">
                                <h4 className="text-base font-medium">Persyaratan</h4>
                                <div class="flex items-center my-2">
                                    <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" class="w-4 h-4 text-red-600 bg-grey-100 rounded border-red-600" />
                                    <label for="checkbox-2" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Menguasai 3 Bahasa Pemrograman</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input id="checkbox-3" aria-describedby="checkbox-3" type="checkbox" class="w-4 h-4 text-red-600 bg-grey-100 rounded border-red-600" />
                                    <label for="checkbox-3" class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mampu bekerjasama</label>
                                </div>
                                <div class="flex items-center mb-4">
                                  <input class="block w-full text-sm text-gray-900 rounded-lg border border-gray-300 cursor-pointer" aria-describedby="user_avatar_help" id="user_avatar" placeholder="Dokumen CV" type="file" />
                                </div>
                                
                              </div>
                            </div>
                        </div>
                        <div class="flex items-center p-6 space-x-2 rounded-b">
                            <button data-modal-toggle="ajukan-modal" type="button" class="text-red-600 bg-white rounded-full border border-red-600 text-sm font-medium px-5 py-2.5">Batal</button>
                            <button data-modal-toggle="ajukan-modal" type="button" class="text-white bg-red-600 font-medium rounded-full text-sm px-5 py-2.5 text-center">Ajukan</button>
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
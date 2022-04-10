import React from 'react'
import {Link} from "react-router-dom";
import { Book, Clock } from 'react-feather';

// inisiasi component
import LayoutSidebar from '../../../../../components/Layout/LayoutSidebar'
import CardKelas from '../../../../../components/fragment/Lms/Guru/CardAktifitas';
// import DragAndDropFile from "./FilesDragAndDrop"
import AddButton from "../../../../../assets/icon-add.svg"


export default class aktifitasGuru extends React.Component{
    constructor(){
        super()
        this.state = {
            // var
        }
        this.state.showModal = false;
    }
    Modal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render(){
        return(
            <div>
                <LayoutSidebar>
                <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
                <div class="col-span-2 ml-14">
                    <div id="tabContent">
                        {/* Tab Content 1 */}
                        <div
                            class="p-4"
                            id="profile" 
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <div className="mb-8 grid grid-cols-4">
                                <h1 className="col-span-3 font-semibold text-3xl inline">Aktivitas Terbaru</h1>
                                    <div className="flex justify-end">
                          <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                              <img src={AddButton} className="inline mr-4"></img>
                              <span className="font-normal text-base ">Tambah </span>
                          </span>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <CardKelas/>
                                <CardKelas/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  <div className="pl-32 mt-10">
                      <div className="flex flex-row">
                      <h4 className="text-lg font-semibold">Kelas Dan Tugas</h4>
                          {/* <span onClick={() => this.Modal()} className="cursor-pointer">
                              <img src={AddButton} className="inline mr-4  text-black"></img>
                          </span> */}
                      </div>
                      <div className="mt-8">
                          <Link to="/lmsGuru" className="py-3 pl-5 pr-20 text-black rounded-2xl">
                              <span className="font-normal text-base "><Book className="mr-2 inline"/> Daftar Kelas</span>
                          </Link>
                      </div>
                      <div className="mt-6 ml-5">
                          <Link to="/aktifitasGuru" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                              <span className="font-normal text-base "><Clock className="inline" /> Aktifitas</span>
                          </Link>
                      </div>
                      <div className="mt-8">

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
                            {/* <DragAndDropFile/> */}
                            <input
                                type="text"
                                name="email"
                                id="email"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                                placeholder="Judul Tugas"/>
                            <select
                                value={this.state.roles}
                                onChange={ev => this.setState({roles: ev.target.value})}
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 text-gray-500 rounded-xl px-6 py-4 mb-4">
                                <option value="" disabled selected>Untuk Kelas</option>
                                <option value="1">1</option>
                                <option value="4">2</option>
                                <option value="5">3</option>
                                <option value="6">4</option>
                            </select>    
                            <select
                                value={this.state.roles}
                                onChange={ev => this.setState({roles: ev.target.value})}
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 text-gray-500 rounded-xl px-6 py-4 mt-4 mb-4">
                                <option value="" disabled selected>Untuk Siapa Saja</option>
                                <option value="1">Headmaster</option>
                                <option value="4">Vocation Net</option>
                                <option value="5">Telkom Group</option>
                                <option value="6">Ministry</option>
                            </select>
                            <input
                                type="Date"
                                name="email"
                                id="email"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Tenggat Pengumpulan"/>
                            <textarea 
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                                placeholder="Petunjuk Pengerjaan"/>
                            
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
            </div>
        )
    }
}
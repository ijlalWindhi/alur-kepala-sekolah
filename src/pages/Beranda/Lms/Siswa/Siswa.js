import React from 'react'
import { PlusCircle } from 'react-feather';

// inisiasi component
import LayoutSidebar from '../../../../components/Layout/LayoutSidebar'
import CardKelas from '../../../../components/fragment/Lms/Siswa/CardKelas';




export default class LmsSiswa extends React.Component{
    constructor(){
        super()
        this.state = {
            // var
        }
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
                <div class="grid grid-flow-row-dense grid-cols-8 mt-12">
                <div class="col-span-7 ml-14">
                    <div id="tabContent">
                        {/* Tab Content 1 */}
                        <div class="p-4">
                            <div className="mb-8 grid grid-cols-12">
                                <h1 className="col-span-9 font-semibold text-3xl inline">Daftar Kelas Belajar</h1>
                                <div className="col-span-3">
                                    <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-600 rounded-2xl cursor-pointer">
                                        <PlusCircle className="inline text-white mr-2"/>
                                        <span className="font-normal text-base ">Gabung Course</span>
                                    </span>                                
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <CardKelas/>
                                <CardKelas/>
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
                            <label className="font-medium text-2xl">Masukan Kode Course</label>
                            <input
                                type="text"
                                name="course"
                                id="course"
                                className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-4 mb-4"
                                placeholder="Kode Course"/>
                        </div>
                        <div className="flex items-center justify-end p-6">
                            <button
                                className="text-red-600 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-600"
                                type="button"
                                onClick={this.Modal}>
                                Batal
                            </button>
                            <button
                                className="bg-red-600 text-white text-sm px-6 py-3 rounded-full border-none"
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
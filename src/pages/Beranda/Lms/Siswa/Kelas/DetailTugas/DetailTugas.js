import React from "react";
import './DetailTugas.css'
import { Book, Clock, File, Save } from 'react-feather';
import { Link } from "react-router-dom";

import LayoutSidebar from "../../../../../../components/Layout/LayoutSidebar";

export default class DetailTugasSiswa extends React.Component{
    constructor(){
        super()
        this.state={}
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
                                <h1 className="col-span-3 font-semibold text-3xl inline">Daftar Kelas Belajar</h1>
                            </div>
                            <div className="mt-8">
                                <div className="card bg-white p-8 rounded-3xl mt-4">
                                    <div className="grid grid-cols-10">
                                        <div className=" bg-red-600 py-3 px-4 rounded-full mx-1"><File className="text-white" /></div>
                                        <div className="col-span-6 ml-3">
                                            <h1 to="/detailTugasSiswa" className="font-medium text-base">Latihan Soal Matematika</h1>
                                            <h4 className="font-normal text-sm">Matematika XII RPL 4 - 12 April 2022</h4>
                                        </div>
                                        <div className="col-span-3">
                                            <h1 className="font-normal text-sm mt-3 text-red-600">Tenggat : 12 April 2021</h1>
                                        </div>
                                    </div>
                                    <hr className="mt-8"/>
                                    <div className="grid grid-cols-3 mt-4 gap-6">
                                        <div className="col-span-2 pr-4">
                                          <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida dictumst vivamus egestas. Quam semper tortor sit vestibulum sit gravida odio montes, vitae. Lobortis dis egestas suspendisse consectetur non metus, vestibulum. Morbi ut pulvinar dictum suscipit montes, congue. Duis sit magna a amet dolor. Nisl maecenas a quis faucibus sed</p>
                                          <div className="preview-file bg-zinc-100 rounded-3xl p-3 grid grid-cols-4 gap-4 mt-4">
                                            <img src="https://4.bp.blogspot.com/-hvL0TPG2C84/WBQ53QeiAtI/AAAAAAAAAFM/2HxtHqWzBzIOJ9k3eweJihk55hEDKjtFgCLcB/s1600/3.jpg" className="w-16 h-16 rounded-lg"></img>
                                            <div className="col-span-3">
                                                <a href="http://africau.edu/images/default/sample.pdf" className="text-sm font-medium">Latihan Soal USP</a>
                                                <h6 className="text-xs font-normal">.docx</h6>
                                            </div>
                                          </div>
                                            {/* <object data="http://africau.edu/images/default/sample.pdf" type="application/pdf" width="100%" height="100%">
                                                <p>Alternative text - include a link <a href="http://africau.edu/images/default/sample.pdf">to the PDF!</a></p>
                                            </object> */}
                                        </div>
                                        <div className="">
                                            <h1 className="text-base font-medium">Pengumpulan Tugas</h1>
                                            <label className="bg-zinc-100 rounded-lg text-center px-8 py-6 custom-file-upload mt-4">
                                                <Save className="text-red-600 m-2 flex justify-items-center" size={24}/>
                                                <h4 className="text-red-600 my-2 text-sm font-normal">Tarik dokumen</h4>
                                                <input type="file"/>
                                                <div className="bg-red-600 text-white p-2 rounded-full text-xs ">Tambah Dokumen</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  <div className="pl-32 mt-10">
                      <div className="flex flex-row">
                          <h4 className="text-lg font-semibold">Marketplace</h4>
                      </div>
                      <div className="mt-8">
                          <Link to="/lmsGuru" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                              <span className="font-normal text-base "><Book className="mr-2 inline"/> Daftar Kelas</span>
                          </Link>
                      </div>
                      <div className="mt-6 ml-5">
                          <Link to="/aktifitasGuru">
                              <span className="font-normal text-base "><Clock className="mr-2 inline" /> Aktifitas Terbaru</span>
                          </Link>
                      </div>
                  </div>
                </div>
            </div>   
             </LayoutSidebar>   
            </div>       
        )
    }
}
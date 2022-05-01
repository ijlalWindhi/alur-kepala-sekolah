import React from "react";
import './DetailTugas.css'
import {File, Upload } from 'react-feather';

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
                        <div class="p-4">
                            <div className="mt-8">
                                <div className="card bg-white p-8 rounded-3xl mt-4">
                                    <div className="grid grid-cols-10">
                                        <div className=" bg-blue-600 py-3 px-4 rounded-full mx-1"><File className="text-white" /></div>
                                        <div className="col-span-6 ml-3">
                                            <h1 to="/detailTugasSiswa" className="font-medium text-base">Latihan Soal Matematika</h1>
                                            <h4 className="font-normal text-sm">Matematika XII RPL 4 - 12 April 2022</h4>
                                        </div>
                                        <div className="col-span-3">
                                            <h1 className="font-normal text-sm mt-3 text-red-600">Tenggat : 12 April 2021</h1>
                                        </div>
                                    </div>
                                    <hr className="mt-8"/>
                                    <div className="grid grid-cols-12 mt-4 gap-6">
                                        <div className="col-span-7 pr-4">
                                          <p className="text-sm font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida dictumst vivamus egestas. Quam semper tortor sit vestibulum sit gravida odio montes, vitae. Lobortis dis egestas suspendisse consectetur non metus, vestibulum. Morbi ut pulvinar dictum suscipit montes, congue. Duis sit magna a amet dolor. Nisl maecenas a quis faucibus sed</p>
                                          <div className="preview-file border-gray-300 border-2 rounded-3xl p-3 grid grid-cols-4 gap-4 mt-8">
                                            <img src="https://4.bp.blogspot.com/-hvL0TPG2C84/WBQ53QeiAtI/AAAAAAAAAFM/2HxtHqWzBzIOJ9k3eweJihk55hEDKjtFgCLcB/s1600/3.jpg" className="w-16 h-16 rounded-lg"></img>
                                            <div className="col-span-3">
                                                <a href="http://africau.edu/images/default/sample.pdf" className="text-sm font-medium">Latihan Soal USP</a>
                                                <h6 className="text-xs font-normal">.docx</h6>
                                            </div>
                                          </div>
                                          <input type="text" className="bg-gray-100 text-gray-400 border-none rounded-full w-full text-xs px-6 py-4  mt-4" placeholder="Tambahkan Komentar"></input>
                                        </div>
                                        <div className="col-span-5">
                                            <label className="rounded-2xl text-center px-4 py-6 custom-file-upload mt-4 border-2 border-gray-200">
                                                <h1 className="text-sm font-medium text-left">Pengumpulan Tugas</h1>
                                                <h4 className="text-gray-400 my-4 text-xs font-normal text-left">Upload file tugas ke sini atau tarik file kalian ke dalam sini</h4>
                                                <input type="file"/>
                                                <div className="bg-green-400 text-white py-3 px-2 rounded-full text-xs "><Upload className="inline mr-2"/> Tambah Dokumen</div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
             </LayoutSidebar>   
            </div>       
        )
    }
}
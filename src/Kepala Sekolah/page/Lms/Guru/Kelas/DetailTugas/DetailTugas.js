import React from "react";
import { File } from 'react-feather';
import { Link } from "react-router-dom";

import LayoutSidebar from "../../../../../../components/Layout/LayoutSidebar";
import CardSiswa from "../../../../../../components/fragment/Lms/Guru/CardSiswa";

export default class DetailTugas extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div>
             <LayoutSidebar>
             <div class="grid grid-flow-row-dense grid-cols-8 mt-12">
                <div class="col-span-7 ml-14">
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
                                        <div className=" bg-red-600 py-3 px-3 rounded-full mx-4"><File className="text-white" /></div>
                                        <div className="col-span-6 ml-3">
                                            <Link to="/detailTugas" className="font-medium text-base">Latihan Soal Matematika</Link>
                                            <h4 className="font-normal text-sm">Matematika XII RPL 4 - 12 April 2022</h4>
                                        </div>
                                        <div className="col-span-3">
                                            <h1 className="font-normal text-sm mt-3 text-red-600">Tenggat : 12 April 2021</h1>
                                        </div>
                                    </div>
                                    <hr className="mt-8"/>
                                    <h1 className="mt-4 text-xl font-medium">10/40</h1>
                                    <h1 className="text-sm font-medium text-gray-300">Siswa Sudah Mengumpulkan</h1>
                                    <div className="grid grid-cols-3 gap-2">
                                        <CardSiswa/>
                                        <CardSiswa/>
                                        <CardSiswa/>
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
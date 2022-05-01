import React from 'react'
import { Link } from 'react-router-dom'

import LayoutSidebar from '../../../../../../components/Layout/LayoutSidebar'
import CardTugas from '../../../../../../components/fragment/Lms/Siswa/CardTugas'
// import DragAndDropFile from "../../FilesDragAndDrop"



export default class DetailKelasSiswa extends React.Component{
    constructor(){
        super()
        this.state = {
            // var
        }
    }
    render(){
        return(
            <div>
                <LayoutSidebar>
                <div class="grid grid-flow-row-dense grid-cols-3 mt-12">
                <div class="col-span-2 ml-14">
                    <div>
                        {/* Tab Content 1 */}
                        <div class="p-4">
                            <div className="">
                                <div className="card  rounded-3xl bg-white">
                                    <div className="card-header bg-green-400 rounded-t-3xl p-4 pt-14 text-white">
                                        <h1 className="text-xl font-medium">Bahasa Inggris</h1>
                                        <h1 className="mt-2 text-lg font-normal">Hafiz Rizky Nurwachid, S.pd.</h1>
                                    </div>
                                    <div className="card-body p-6 relative">
                                        <div className="mt-4">
                                            <div className="mb-12">
                                                <Link to="/detailKelasSiswa" className="text-lg font-normal mr-6 border-b-2 border-red-600">Aktivitas</Link>
                                                <Link to="/peserta-siswa" className="text-lg font-normal text-gray-300">Peserta</Link>
                                            </div>
                                        </div>
                                        <div className="mt-8">
                                            <CardTugas/>
                                            <CardTugas/>
                                            <CardTugas/>
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
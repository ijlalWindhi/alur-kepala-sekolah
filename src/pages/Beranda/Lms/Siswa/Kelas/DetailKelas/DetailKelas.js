import React from 'react'
import { Book, Clock, Video } from 'react-feather'
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
                    <div id="tabContent">
                        {/* Tab Content 1 */}
                        <div
                            class="p-4"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab">
                            <div className="">
                                <div className="card  rounded-3xl bg-white">
                                    <div className="card-header bg-green-400 rounded-t-3xl p-4 pt-14 text-white">
                                        <h1 className="text-xl font-medium">Bahasa Inggris</h1>
                                        <h1 className="mt-2 text-lg font-normal">Hafiz Rizky Nurwachid, S.pd.</h1>
                                    </div>
                                    <div className="card-body p-6 relative">
                                        <div className="rounded-full absolute z-10 w-5 top-0 right-16" style={{marginTop: `-10px`}}>
                                            <Link to="/meet" className="bg-red-600 rounded-3xl p-3 text-white" >
                                                <Video className="inline"/>
                                            </Link>
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
import React from 'react'
import {Link} from "react-router-dom";
import { Book, Clock } from 'react-feather';

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
                            <div className="grid grid-cols-2 gap-4">
                                <CardKelas/>
                                <CardKelas/>
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
                          <Link to="/lmsSiswa" className="py-3 pl-5 pr-20 text-white bg-red-500 rounded-2xl">
                              <span className="font-normal text-base "><Book className="mr-2 inline"/> Daftar Kelas</span>
                          </Link>
                      </div>
                      <div className="mt-6 ml-5">
                          <Link to="/aktifitasSiswa">
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
import React from 'react'
import { Link } from 'react-router-dom'

import LayoutSidebar from '../../../../../components/Layout/LayoutSidebar'
import Siswa from "../../../../../assets/user-login.png"



export default class Peserta extends React.Component{
    constructor(){
        super()
        this.state = {
        }
        this.state.showModal = false;
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
                                        <Link to="/detailTugasGuru" className="text-xl font-medium">Bahasa Inggris</Link>
                                        <h1 className="mt-2 text-lg font-normal">Hafiz Rizky Nurwachid, S.pd.</h1>
                                    </div>
                                    <div className="card-body p-6 relative">
                                        <div className="mt-4">
                                            <div className="mb-12">
                                                <Link to="/detailKelasGuru" className="text-lg font-normal mr-6 text-gray-300">Aktivitas</Link>
                                                <Link to="/peserta" className="text-lg font-normal border-b-2 border-red-600">Peserta</Link>
                                            </div>
                                        </div>
                                        <div className="mt-8 grid grid-cols-3 gap-4">
                                            <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-12">
                                                <div className="col-span-4">
                                                    <img src={Siswa}></img>
                                                </div>
                                                <div className="col-span-8 pl-4">
                                                    <h2 className="text-sm font-medium">Hafiz Rizky Nurwachid</h2>
                                                    <span className="text-xs">Siswa</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-12">
                                                <div className="col-span-4">
                                                    <img src={Siswa}></img>
                                                </div>
                                                <div className="col-span-8 pl-4">
                                                    <h2 className="text-sm font-medium">Hafiz Rizky Nurwachid</h2>
                                                    <span className="text-xs">Siswa</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-12">
                                                <div className="col-span-4">
                                                    <img src={Siswa}></img>
                                                </div>
                                                <div className="col-span-8 pl-4">
                                                    <h2 className="text-sm font-medium">Hafiz Rizky Nurwachid</h2>
                                                    <span className="text-xs">Siswa</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-12">
                                                <div className="col-span-4">
                                                    <img src={Siswa}></img>
                                                </div>
                                                <div className="col-span-8 pl-4">
                                                    <h2 className="text-sm font-medium">Hafiz Rizky Nurwachid</h2>
                                                    <span className="text-xs">Siswa</span>
                                                </div>
                                            </div>
                                            <div className="bg-gray-100 rounded-2xl p-4 grid grid-cols-12">
                                                <div className="col-span-4">
                                                    <img src={Siswa}></img>
                                                </div>
                                                <div className="col-span-8 pl-4">
                                                    <h2 className="text-sm font-medium">Hafiz Rizky Nurwachid</h2>
                                                    <span className="text-xs">Siswa</span>
                                                </div>
                                            </div>
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
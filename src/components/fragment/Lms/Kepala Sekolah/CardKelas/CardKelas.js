import React from "react";
import { Link } from "react-router-dom";
import { Users } from "react-feather";

import UserLms from '../../../../../assets/userLms.svg'

export default class CardKelas extends React.Component{
    constructor(){
        super()
        this.state = {
            //var
        }
    }
    render(){
        return(
            <div className="card rounded-3xl bg-white">
                <div className="card-header bg-green-400 rounded-t-3xl p-4 pt-10 text-white">
                    <Link to="/detailKelasKS" className="text-xl font-medium">Bahasa Inggris</Link>
                    <h1 className="text-base font-normal">Hafiz Rizky Nurwachid, S.pd.</h1>
                </div>
                <div className="card-body p-6 relative grid grid-cols-5">
                <div className="col-span-4 text-sm" style={{marginTop: `-10px`}}>
                    <h4 className="mb-4">12 November 2022 -  10 Desember 2022</h4>
                    <span className="bg-sky-200 text-blue-600 font-medium p-2 px-4 rounded-full text-xs">Muatan Nasional</span>
                    <div className="mt-6">
                        <Users className="inline mr-2"/>120 Peserta
                    </div>
                </div>
                <div>
                    <img src={UserLms} className="rounded-full absolute z-10 top-0 right-0 mr-4 w-16" style={{marginTop: `-30px`}}></img>
                    <Link to="/detailKelasKS" className="bg-red-600 rounded-2xl px-3 py-2 text-white right-4 bottom-4 absolute">
                        Lihat Aktivitas
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}
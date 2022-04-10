import React from "react";
import { Link } from "react-router-dom";
import { Video, FileText } from "react-feather";

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
            <div className="card  rounded-3xl bg-white">
                <div className="card-header bg-green-400 rounded-t-3xl p-4 text-white">
                    <Link to="/detailKelasSiswa">Bahasa Indonesia</Link>
                    <h1 className="mt-2">Hafiz Rizky Nurwachid, S.pd.</h1>
                </div>
                <div className="card-body p-6 relative">
                    <img src={UserLms} className="rounded-full absolute z-10 top-0 right-0 mr-4 w-16" style={{marginTop: `-30px`}}></img>
                    <div className="mt-5">
                    <Link to="/meet" className ="text-red-600 mr-4">
                        <Video className="inline"/>
                    </Link>
                    <Link to="/meet" className ="text-red-600">
                        <FileText className="inline"/>
                    </Link>
                    </div>
                </div>
            </div>
        )
    }
}
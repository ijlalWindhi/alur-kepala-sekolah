import React from 'react'
import { Link } from 'react-router-dom'
import { File } from 'react-feather'

export default class CardTugas extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div className="card bg-slate-100 p-4 rounded-3xl mt-4">
                <div className="grid grid-cols-8">
                    <div className=" bg-red-600 p-3 rounded-full mx-3"><File className="text-white" /></div>
                    <div className="col-span-5 ml-3">
                        <Link to="/detailTugasGuru" className="font-medium text-base">Latihan Soal Matematika</Link>
                        <h4 className="font-normal text-sm">Matematika XII RPL 4</h4>
                    </div>
                    <div className="col-span-2">
                        <h1 className="font-normal text-sm mt-3">12 April 2021</h1>
                    </div>
                </div>
            </div>
        )
    }
}
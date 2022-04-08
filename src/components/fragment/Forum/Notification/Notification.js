import React from 'react'
import profilImg from '../../../../assets/notifikasi.png'

export default class Notification extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div className="card rounded-lg grid grid-cols-4 py-3">
                <img src={profilImg} className="rounded-full"></img>
                <div className="col-span-3">
                    <h2 className="text-xl font-medium text-slate-400">New Post in Komunitas Pecinta Masak </h2>
                    <h1 className="text-2xl font-normal">Raihan menambahkan 10 foto</h1>
                    <h3 className="text-lg font-normal ">Like 6</h3>
                    <span className="text-sm font-normal text-red-600">10 Jam yang lalu</span>
                </div>
            </div>
        )
    }
}
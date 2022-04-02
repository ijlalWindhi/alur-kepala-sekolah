import React from 'react'
import profilImg from '../../../../assets/spider.png'

export default class GrupCard extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div className="card rounded-lg bg-white">
                <div className="card-header">
                    <img src={profilImg} className="rounded-t-lg w-full"></img>
                </div>
                <div className="card-body p-4">
                    <h2 className="text-base font-medium">Jual Beli Mackbook</h2>
                    <h5 className="text-sm font-normal text-slate-500 mt-2">25 rb anggota - 30 postingan perhari</h5>
                    <button className="bg-red-600 text-white rounded-full w-full py-2 mt-7">Gabung Grub</button>
                </div>
            </div>
        )
    }
}
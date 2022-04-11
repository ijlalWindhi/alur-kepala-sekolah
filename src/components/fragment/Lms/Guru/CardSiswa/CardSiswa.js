import React from 'react'
import SiswaImg from '../../../../../assets/userLms.svg'

export default class CardSiswa extends React.Component{
    constructor(){
        super()
        this.state={}
    }
    render(){
        return(
            <div className="card bg-slate-100 p-4 rounded-3xl mt-4">
                <div className="grid grid-cols-4">
                    <img src={SiswaImg} className="rounded-full w-12" />
                    <div className="col-span-2 ml-3">
                        <h1 className="font-medium text-sm">Hafiz Rizky Nurwachid</h1>
                        <h4 className="font-normal text-sm">1 Hours  a go</h4>
                    </div>
                    <div className="col-span-1">
                        <h1 className="font-normal text-sm mt-3 text-lime-400">On Time</h1>
                    </div>
                </div>
            </div>
        )
    }
}
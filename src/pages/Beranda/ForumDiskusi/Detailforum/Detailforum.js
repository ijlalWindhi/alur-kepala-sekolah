// inisiasi library default
import React from "react";
// import {Link} from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import viewakun from "../../../../assets/viewakun.png"
// import DragAndDropFile from "./../FilesDragAndDrop"
import AddButton from "../../../../assets/icon-add.svg"
// import settings from "../../../../assets/icon-settings.svg"
// import bag from "../../../../assets/berandaforum.png"
// import trolly from "../../../../assets/temukan.png"
// import tag from "../../../../assets/notifikasiputih.png"
// import UserLog from '../../../../assets/user-login.png';
// import Notification from '../../../../components/fragment/Forum/Notification';





export default class Detailforum extends React.Component {
    constructor() {
        super();
        this.state = {
            // call variable
        };
        
        // state show modal tambah barang
        this.state.showModal = false;
    }

    // function untuk menampilkan modal tambah barang
    Modal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        return (
     <> < LayoutSidebar > 
        <div className="grid grid-flow-row-dense">
            <div className="card relative rounded-3xl mt-5 ml-5">
                <img src={viewakun} className="contrast-50 rounded-3xl " />

                <div className="flex flex-row justify-between">
                    <div className="flex items-center">
                           <h1 className="text-3xl font-semibold">Aktivitas Terbaru </h1>
                    </div>
                    <div className=" inline">
                          <span onClick={() => this.Modal()} className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer">
                            <img src={AddButton} className="inline mr-4"></img>
                            <span className="font-normal text-base ">Tambah Forum</span>
                          </span>
                    </div>
                </div>
            </div>
            
        </div>

        </LayoutSidebar>
    </>
        );
    }
}

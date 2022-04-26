// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";
import people from "../../assets/people.svg"
import About from "../../assets/about-lp.svg"

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Card from "../../components/fragment/Card";
import DataBox from "../../components/fragment/DataBox"
import Footer from "../../components/fragment/Footer";



export default class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <div className="bg-landing">
          <LayoutNavbar className="p-10" />
          <div className="grid grid-cols-2 py-5 px-5 pt-12">
            <div className="pt-10 px-20">
              <h1 className="text-4xl font-semibold text-white">Selamat Datang Di Platform <br/> SMK TKJ</h1>
              <h5 className="text-xl font-normal text-white text-justify mt-4">Selamat datang di website platform SMK TKJ, dapatkan fitur-fitur menarik untuk kebutuhan pendidikan maupun bisnis anda di bidang tekhnologi bersama Telkom Group.</h5>
              <button className="bg-white rounded-full py-3 px-8 text-red-600 mt-8 font-medium">Dapatkan</button>
            </div>
            <div className="flex justify-center">
              <img src={people} alt="" className=""></img>
            </div>
          </div>
          <div className="flex justify-center">
            <hr className="w-40 h-2.5 bg-red-600 rounded-full mt-24"></hr>
          </div>
        <div className="grid grid-cols-2 py-5 px-5 pt-12">
          <div className="p-20">
            <h1 className="text-4xl font-semibold">Apa itu Platform SMK TKJ?</h1>
            <h5 className="text-xl font-normal text-justify mt-4">Platform Smk Tkj Adalah Platform yang membantu mewadahi Kegiatan serta menghubungkan Sekolah-sekolah SMK yang ada di seluruh indonesia dalam satu website/mobile. Platform Smk Tkj juga menjadi penghubung antara sekolah dengan Instansi yang menyediakan Bursa Kerja, Internship, dan sertifikasi.</h5>
          </div>
          <div className=" flex justify-center">
            <img src={About} alt="" className=""></img>
          </div>
        </div>
        </div>
        <div className="py-5 px-5 text-center mb-20 ">
          <div className="flex flex-row justify-center">
            <DataBox />
          </div>
        </div>
        <div className="py-5 px-5 font-semibold grid grid-cols-3">
          <h1 className="text-3xl pb-4 pl-8 col-span-2">Berita Terkini</h1>
          <Link to="/blog" className="text-xl font-normal text-red-600 text-right pr-8">Selengkapnya</Link>
          {/* <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-14">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div> */}
        </div>

        <div class="snap-x overscroll-auto mx-auto snap-mandatory flex overflow-scroll mx-10 pb-5 mb-20">
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
            <div class="snap-start inline mr-3"><Card/></div>
        </div>
     

        <Footer />
      </>
    );
  }
}

// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";
import ImageHero from "../../assets/image-hero.svg";
import About from "../../assets/about-lp.svg";

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Card from "../../components/fragment/Card";
import DataBox from "../../components/fragment/DataBox";
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
          <div className="grid md:grid-cols-2 h-screen">
            <div className="flex flex-col pt-10 md:pt-48 w-3/4 mx-auto">
              <h1 className="font-semibold text-lg text-black md:text-5xl md:text-white leading-normal">
                Selamat Datang di Platform SMK TKJ
              </h1>
              <h5 className="font-normal text-base text-black md:mt-5 md:text-2xl md:text-white text-justify leading-relaxed tracking-wide">
                Selamat datang di website platform SMK TKJ, dapatkan fitur-fitur menarik untuk kebutuhan pendidikan maupun bisnis anda di bidang tekhnologi bersama Telkom Group.
              </h5>
            </div>
            <div className="flex justify-center items-start md:items-center">
              <img src={ImageHero} alt="" className="w-3/4"></img>
            </div>
          </div>
        </div>
          <div className="grid md:grid-cols-2" id="tentang">
            <div className="flex justify-center col-span-2">
                <hr className="w-40 h-2.5 bg-red-600 rounded-full"></hr>
            </div>
            <div className="flex flex-col justify-center w-3/4 mx-auto">
              <h1 className="text-4xl font-semibold">Apa itu Platform SMK TKJ?</h1>
              <h5 className="text-xl font-normal text-justify mt-4 text-gray-500">
                Platform Smk Tkj Adalah Platform yang membantu mewadahi Kegiatan serta menghubungkan Sekolah-sekolah SMK yang ada di seluruh indonesia dalam satu website/mobile. Platform Smk Tkj juga menjadi penghubung antara sekolah dengan
                Instansi yang menyediakan Bursa Kerja, Internship, dan sertifikasi.
              </h5>
            </div>
            <div className=" flex justify-center">
              <img src={About} alt="" className=""></img>
            </div>
            <div className="flex flex-row justify-center col-span-2">
              <DataBox />
            </div>
          </div>
        <div className="pt-32 pb-32">
          <div className="py-5 px-5 font-semibold grid grid-cols-3 " id="berita">
            <h1 className="text-3xl pb-4 pl-8 col-span-2">Berita Terkini</h1>
            <Link to="/blog" className="text-xl font-normal text-red-600 text-right pr-8">
              Selengkapnya
            </Link>
          </div>

          <div class="snap-x overscroll-x-auto mx-auto snap-mandatory flex overflow-scroll mx-10 pb-5 mb-20">
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
            <div class="snap-start inline mr-3">
              <Card />
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

// inisiasi library default
import React from "react";

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Corousel from "../../components/fragment/Corousel";
import DataBox from "../../components/fragment/DataBox";
import Card from "../../components/fragment/Card";
import CallBox from "../../components/fragment/CallBox";

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
        <LayoutNavbar />
        {/* COROUSEL */}
        <div className=" py-5 px-5">
          <Corousel />
        </div>
        <div className="py-5 px-5 text-center">
          <div className="flex flex-row justify-center">
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
          </div>
        </div>
        <div className="py-5 px-5 font-semibold">
          <h1 className="text-3xl text-center pb-14 underline underline-offset-8 decoration-4 decoration-red-600">Berita Terkini</h1>
          <div className=" flex flex-row gap-4 grid grid-cols-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className="py-5 px-5 text-center">
          <h2 className="text-3xl font-semibold text-center underline underline-offset-8 decoration-4 decoration-red-600">Hubungi Kami</h2>
          <div className="flex flex-row gap-4 justify-center pt-14">
            <CallBox />
            <CallBox />
            <CallBox />
          </div>
        </div>
        <div className="bg-red-200 py-5 px-5">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3 ...">
              <h1 className="text-3xl font-semibold">Platform SMK TKJ</h1>
              Selamat datang di platform SMK TKJ. Platform SMK TKJ membantu anda terhubung dan berbagi dengan orang-orang dalam kehidupan anda. Anda dapat membuat halaman Blog Berita, Forum Diskusi, Marketplace pengajuan dan banyak hal
              lainya
            </div>
          </div>
        </div>
      </>
    );
  }
}

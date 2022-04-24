// inisiasi library default
import React from "react";
import people from "../../assets/people.svg"
import About from "../../assets/about-lp.svg"

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Card from "../../components/fragment/Card";
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
              <button className="bg-white rounded-full py-2 px-8 text-red-600 mt-8">Dapatkan</button>
            </div>
            <div className="flex justify-center">
              <img src={people} alt="" className="ml-40"></img>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 py-5 px-5 pt-12">
          <div className="p-20">
            <h1 className="text-4xl font-semibold">Apa itu Platform SMK TKJ?</h1>
            <h5 className="text-xl font-normal text-justify mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, leo vestibulum elementum pellentesque amet. Sit massa, at tempus amet. Enim ut faucibus nibh at auctor quisque consectetur sed lorem. Feugiat cras donec tempor neque.</h5>
          </div>
          <div className=" flex justify-center">
            <img src={About} alt="" className=""></img>
          </div>
        </div>
        <div className="py-5 px-5 text-center mb-20 ">
          <div className="flex flex-row justify-center">
            <DataBox />
          </div>
        </div>
        <div className="py-5 px-5 font-semibold mb-14">
          <h1 className="text-3xl pb-10 pl-8">Berita Terkini</h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-14">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

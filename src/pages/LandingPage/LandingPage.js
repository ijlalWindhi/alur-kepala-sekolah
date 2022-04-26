// inisiasi library default
import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

// inisiasi component
import LayoutNavbar from "../../components/Layout/LayoutNavbar";
import Corousel from "../../components/fragment/Corousel/Corousel";
import {CorouselData} from "../../components/fragment/Corousel/CorouselData";
import DataBox from "../../components/fragment/DataBox";
import Card from "../../components/fragment/Card";
import CallBox from "../../components/fragment/CallBox";
import Footer from "../../components/fragment/Footer";

// Google Maps Configuration
const containerStyle = {
  width: '50%',
  height: '400px'
};

const center = {
  lat: -7.976830,
  lng: 112.658958
};

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
          <Corousel slides={CorouselData}/>
        </div>
        <div className="py-5 px-5 text-center">
          <div className="flex flex-row justify-center">
            <DataBox />
          </div>
        </div>
        <div className="py-auto px-5 font-semibold">
          <h1 className="text-3xl text-center pb-14 underline underline-offset-8 decoration-4 decoration-red-600">Berita Terkini</h1>
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
              <Card/>
            </div>
          </div>
        </div>
        <div className="py-5 px-5 text-center">
          <h2 className="text-3xl font-semibold text-center underline underline-offset-8 decoration-4 decoration-red-600">Hubungi Kami</h2>
          <div className="flex justify-center mt-10">
            <LoadScript
              googleMapsApiKey="AIzaSyBqJneG14ZZmgDdlIpsD5LA-f5DfKg0XXk"
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
              >
              </GoogleMap>
            </LoadScript>
          </div>
          <div className="flex flex-wrap justify-around gap-y-8 pt-14 mb-20">
            <CallBox />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

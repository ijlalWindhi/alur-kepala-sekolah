// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../components/Layout/LayoutSidebar";
import CardBox from "../../components/fragment/Beranda/CardBox";
import UserLogin from "../../assets/user-login.png"

export default class Beranda extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-8">
            <div class="col-span-2 ml-14">
              <div className="grid grid-cols-4">
                <CardBox/>
                <CardBox/>
                <CardBox/>
                <CardBox/>
              </div>
              <div className="card rounded-lg bg-white p-6 mt-8">
                <img src={UserLogin} className="inline"/>
                <input type="text" className=" w-4/5 h-12 bg-slate-100 rounded-full px-6 ml-6" placeholder="Apa yang anda pikirkan sekarang?"></input>
              </div>
            </div>
            <div>03</div>
            <div>04</div>
            <div>05</div>
          </div>
          
        </LayoutSidebar>
      </>
    );
  }
}

// inisiasi library default
import React from "react";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import ItemCard from "../../../components/fragment/Marketplace/ItemCard";

export default class Marketplace extends React.Component {
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
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-10">
            <div class="col-span-2 ml-14">
              <h1 className="mb-8 font-semibold text-xl">Pilihan Hari ini</h1>
              <div className="grid grid-cols-3 gap-4">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
              </div>
            </div>
            <div>
              <div className="pl-32">
                <h4 className="text-lg font-semibold">Kontak</h4>
                <div className="mt-6">
                  <img src="" className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-6">
                  <img src="" className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-6">
                  <img src="" className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
              </div>
              <div className="pl-32 mt-12">
                <h4 className="text-lg font-semibold">Percakapan Grub</h4>
                <div className="mt-6">
                  <a href="#">
                    <img src="" className="inline mr-4"></img>
                    <span className="font-normal text-base text-slate-400">Buat grup baru</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

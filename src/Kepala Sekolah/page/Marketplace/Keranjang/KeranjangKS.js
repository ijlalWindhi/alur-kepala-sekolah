// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";



// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebarKS";
import CardList from "../../../../components/fragment/Marketplace/CardBeli/CardList";
import settings from "../../../../assets/icon-settings.svg";
import search from "../../../../assets/icon-search.svg";
import bag from "../../../../assets/icon-bagWhite.svg";
import trolly from "../../../../assets/icon-trolly.svg";

export default class KeranjangKS extends React.Component {
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
              <div id="tabContent">
                <div
                  class="p-4"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <div className="mb-8 grid grid-cols-4">
                    <h1 className="col-span-3 font-semibold text-3xl inline">
                      Pembelian Barang
                    </h1>
                  </div>  
                  <div className="grid cols-5 gap-4">
                    <CardList />
                    <CardList />
                    <CardList />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32 mt-10">
                <div className="flex flex-row">
                  <h4 className="text-lg font-semibold">Marketplace</h4>
                  <img src={settings} className="ml-24 cursor-pointer" />
                </div>
                <div class="col-span-3 relative">
                  <input
                    class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none"
                    text-black="text-black"
                    type="text"
                    name="search"
                    placeholder="Cari Barang"
                  ></input>
                  <button type="submit" class="absolute left-0 top-5 ml-48">
                    <img src={search} />
                  </button>
                </div>
                <div className="mt-8 ml-5">
                  <Link to="/marketplaceKS">
                    <img src={trolly} className="inline mr-4"></img>
                    <span className="font-normal text-base ">
                      Telusuri Semua
                    </span>
                  </Link>
                </div>
                <div className="mt-6 ">
                  <Link
                    to="/keranjangKS"
                    className="py-3 pl-5 pr-28 text-white bg-red-500 rounded-2xl"
                  >
                    <img src={bag} className="inline mr-4"></img>
                    <span className="font-normal text-base ">
                      List Pembelian
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";

import imageCard from "../../../../assets/image-card.png"

export default class beritaTerkiniKS extends React.Component {
  constructor() {
    super();
    this.state = {
    };

    this.state.showModal = false;
  }


  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-cols-4 mt-8 ">
            <div class="ml-14 mt-3 col-span-3">
              <h1 className="text-2xl font-semibold mb-5">Postingan Terbaru</h1>
              <div className="mt-4 text-base font-normal text-gray-400">
                <Link to="/blogKS" className="mr-5 ">
                  Blog/postingan
                </Link>
                <Link to="/beritaTerkiniKS" className="mr-5 text-black">
                  Berita
                </Link>
              </div>
              <div class="grid grid-cols-2 gap-2 mt-4">
                  <div className="card relative rounded-3xl">
                    <img src={imageCard} className="contrast-50 rounded-3xl w-full" />
                    <div class="absolute bottom-0 left-0 ml-4 text-white grid grid-cols-3 mb-4">
                      <div className="col-span-2">
                        <h6 className="text-sm font-medium">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h6>
                        <p className="text-gray-300 text-xs mt-2">19/02/2022, 14:18 WIB</p>
                      </div>
                      <div>
                        <Link to="/templateBlog"  class="inline-flex items-center py-2 px-2 mt-12 text-sm font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"  >
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card relative rounded-3xl">
                    <img src={imageCard} className="contrast-50 rounded-3xl w-full" />
                    <div class="absolute bottom-0 left-0 ml-4 text-white grid grid-cols-3 mb-4">
                      <div className="col-span-2">
                        <h6 className="text-sm font-medium">SMK Telkom Malang sukses menyelenggarakan Ujian Satuan Pendidikan dengan sistem 2 shift</h6>
                        <p className="text-gray-300 text-xs mt-2">19/02/2022, 14:18 WIB</p>
                      </div>
                      <div>
                        <Link to="/templateBlog"  class="inline-flex items-center py-2 px-2 mt-12 text-sm font-medium text-center text-white bg-red-600 rounded-full hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"  >
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
              </div>              
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

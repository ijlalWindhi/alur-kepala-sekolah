// inisiasi library default
import React from "react";

import { Link } from "react-router-dom";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import { Dragndrop } from "../../../../components/fragment/DragnDrop";

import imageCard from "../../../../assets/image-card.png"

export default class beritaTerkini extends React.Component {
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
                <Link to="/blog" className="mr-5 ">
                  Blog?postingan
                </Link>
                <Link to="/beritaTerkini" className="mr-5 text-black">
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
          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <form
                  // onSubmit={(ev) => this.saveBlogs(ev)}
                  >
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto">
                        {/*     <DragAndDropFile />kurang setState to image */}
                        <Dragndrop onChange={this.setImage} />
                        {/* <DragAndDropTest
                          onChange={(ev) => this.setState({ blogImage: ev.target.files[0] })}
                          // antara atas dan bawahnya
                          // onChange={(ev) => this.setState({ blogImage: ev.target.value })}
                        /> */}
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                          placeholder="Youtube Links"
                          onChange={(ev) =>
                            this.setState({ youtubeLink: ev.target.value })
                          }
                        />
                        <textarea
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Deskripsi Video"
                          onChange={(ev) =>
                            this.setState({ description: ev.target.value })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-end p-6">
                        <button
                          className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500"
                          type="button"
                          onClick={this.Modal}
                        >
                          Batal
                        </button>
                        <button
                          className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none"
                          type="submit"
                        >
                          Tambah
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </LayoutSidebar>
      </>
    );
  }
}

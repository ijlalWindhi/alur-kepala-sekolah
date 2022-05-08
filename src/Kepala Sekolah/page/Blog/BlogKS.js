// inisiasi library default
import React from "react";
import axios from "axios";
import { baseUrl } from "../../../config";
import { NavLink, Link } from "react-router-dom";
import {
  ThumbsUp,
  MessageCircle,
  Bookmark, Image
} from "react-feather";
import data from "../../../dummy/bloglist";

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebarKS";
import { Dragndrop } from "../../../components/fragment/DragnDrop";

import UserLogin from "../../../assets/user-login.png";


export default class BlogKS extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      blogs: [],
      description: "",
      youtubeLink: "",
      blogImage: {},
    };

    // if (localStorage.getItem("token")) {
    //   this.state.token = localStorage.getItem("token");
    // } else {
    //   window.location = "/login";
    // }
    this.headerConfig.bind(this);

    this.state.showModal = false;
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  getBlogs = () => {
    let url = baseUrl + "/blogs";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ blogs: response.data.data });
        console.log(response.data.data);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message);
            // this.props.history.push("/dashboard")
          }
        } else {
          console.log(error);
        }
      });
  };

  componentDidMount() {
    this.getBlogs();
  }

  setImage = (param) => {
    this.state.blogImage = param;
  };

  saveBlogs = (event) => {
    event.preventDefault();
    let form = new FormData()
    form.append("description", this.state.description)
    form.append("youtubeLink", this.state.youtubeLink)
    form.append("blogImage", this.state.blogImage)
    // let form = {
    //   description: this.state.description,
    //   youtubeLink: this.state.youtubeLink,
    //   blogImage: this.state.blogImage,
    // };
    console.log(this.state.youtubeLink);
    console.log(form);
    let url = baseUrl + "/blogs";
    // console.log("ini msuk insert")
    axios
      .post(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getBlogs();
        this.Modal();
      })
      .catch((error) => console.log(error));
  };

  // function untuk menampilkan modal tambah barang
  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <>
        {" "}
        <LayoutSidebar>
          {" "}
          <div class="grid grid-flow-row-dense grid-cols-5 mt-8 ">
            <div class="ml-14 mt-3 col-span-3">
              <div className="mt-4 text-base font-normal text-gray-400">
                <a href="/blogKS" className="mr-5 text-black">
                  Blog/Postingan
                </a>
                <a href="/beritaTerkiniKS" className="mr-5">
                  Berita
                </a>
              </div>
                <div className="grid grid-cols-6 my-8">
                  <h1 className="text-2xl font-semibold col-span-3">Postingan Terbaru</h1>
                </div>
                <div class="grid grid-cols-1 gap-4 mt-4">
                  {data.map((data) => (
                    <div className="max-w-full w-full bg-white justify-center flex flex-col rounded-2xl">
                      <div className="flex flex-row mx-4">
                        <img src={UserLogin} className="rounded-full w-10 h-10 self-center"></img>
                        <h1
                          style={{
                            margin: "20px",
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                        >
                          {data.author}
                        </h1>
                      </div>
                      <NavLink to="/templateBlog" className="max-w-full w-full">
                        <img
                          src={data.image}
                          className="object-cover w-fit"
                          style={{
                            margin: "0 auto",
                          }}
                        />
                        <h1 className="col-span-11 m-4"
                          style={{
                            fontWeight: "500",
                            fontSize: "16px",
                          }}
                        >
                          {data.title}
                        </h1>
                      </NavLink>
                      <div class=" bottom-0 left-0 my-5 grid grid-cols-12 mx-4">
                        <div className="col-span-11">
                          <button className="inline mr-6">
                            <ThumbsUp className="inline mr-2"></ThumbsUp>123
                          </button>
                          <button className="inline mx-2">
                            <MessageCircle className="inline mr-2"></MessageCircle>123
                          </button>
                        </div>
                        <button className="inline">
                            <Bookmark className="inline ,r-2"></Bookmark>
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
              {/* </div> */}
            </div>
            <div className="flex flex-col col-span-2 ml-12">
              <div className="flex flex-col w-2/3 bg-white mx-auto p-10 rounded-2xl">
                <img src={UserLogin} className="w-24 mx-auto mb-3"/>
                <h3 className="text-center font-semibold text-lg">Postingan Baru</h3>
                <button onClick={() => this.Modal()} className="bg-slate-100 text-gray-500 py-2 pl-2 rounded-lg text-left my-5 flex">Ingin menulis sesuatu?<Image className="ml-11 text-red-600"/></button>
                <Link to="/disimpanKS"  class="bg-red-600 text-white text-center py-2 w-3/4 mx-auto rounded-2xl">
                     <Bookmark className="inline"/> Disimpan
                </Link> 
              </div>
              <div className="mx-auto">
                <h4 className="text-lg font-semibold mt-8 mb-3">Pengguna Online</h4>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Kedar Anugerah Nacha Putra</span>
                    <p className="text-sm text-slate-400">Kepsek SMK Anugerah</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Nanda Hafiza Yusron</span>
                    <p className="text-sm text-slate-400">Kepsek SMK Hafiza</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Hafiz Rizky Nurwachid</span>
                    <p className="text-sm text-slate-400">Kepsek SMK Rizky</p>
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
                  onSubmit={(ev) => this.saveBlogs(ev)}
                  >
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto">
                        {/*     <DragAndDropFile />kurang setState to image */}
                        <Dragndrop onChange={this.setImage} />
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                          placeholder="Judul (Link)"
                          onChange={(ev) => this.setState({ youtubeLink: ev.target.value })}
                        />
                        <textarea
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Deskripsi"
                          onChange={(ev) => this.setState({ description: ev.target.value })}
                        />
                      </div>
                      <div className="flex items-center justify-end p-6">
                        <button className="text-red-500 background-white px-8 py-3 mr-4 text-sm border-2 rounded-full border-red-500" type="button" onClick={this.Modal}>
                          Batal
                        </button>
                        <button className="bg-red-500 text-white text-sm px-6 py-3 rounded-full border-none" type="submit">
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

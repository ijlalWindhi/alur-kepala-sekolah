// inisiasi library default
import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../config";
import { ThumbsUp, MessageCircle, Bookmark, Image, PlusCircle } from "react-feather";
import CardBg from "../../../assets/blog.png"

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import { Dragndrop } from "../../../components/fragment/DragnDrop";
// import VideoPopup from "./VideoPopup";
// PAKAI DRAGN DROP DI FOLDER FRAGMENT -> DRAGNDROP fail

import UserLogin from "../../../assets/user-login.png";
// import bookmark from "../../../assets/bookmark.png";
// import calender from "../../../assets/calendar.png";
// import video from "../../../assets/icon-videoWhite.svg";
// import settings from "../../../assets/icon-settings.svg";
// import Search from "../../../assets/icon-search.svg";
// import AddButton from "../../../assets/icon-add.svg";
const urls = [
  "https://www.youtube.com/embed/30L-WoWIXO8",
  "https://www.youtube.com/embed/J42SZXS-_Qo",
  "https://www.youtube.com/embed/Zn_f6el0TKw",
  "https://www.youtube.com/embed/GdvY4JX-WsI",
  "https://www.youtube.com/embed/HIj8wU_rGIU",
  "https://www.youtube.com/embed/7svK1dtQguA",
];

export default class Blog extends React.Component {
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

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/login";
    }
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
    this.state.blogImage = param
  }

  saveBlogs = (event) => {
    event.preventDefault();
    let form = {
      description: this.state.description,
      youtubeLink: this.state.youtubeLink,
      blogImage: this.state.blogImage,
    };
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

  // function untuk menampilkan modal tambah blog
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
          <div class="grid grid-flow-row-dense grid-cols-2 grid-rows-1 mt-8">
            <div class="ml-14 mt-3">
              <div className="story grid grid-cols-6 gap-2">
                <a href="#" className="justify-center items-center flex flex-col">
                  <img src={UserLogin}></img>
                  <PlusCircle className="ml-6 text-white bg-emerald-500 rounded-full" style={{marginTop: `-20px`}}/>
                  <h2 className="text-sm font-medium mt-2">Jhon Doe</h2>
                </a>
                <div className="justify-center items-center flex flex-col">
                  <img src={UserLogin} className="border-emerald-500 border-2 rounded-full"></img>
                  <h2 className="text-sm font-medium mt-2">Hafiza</h2>
                </div>
                <div className="justify-center items-center flex flex-col">
                  <img src={UserLogin} className="border-emerald-500 border-2 rounded-full"></img>
                  <h2 className="text-sm font-medium mt-2">Nanda</h2>
                </div>
                <div className="justify-center items-center flex flex-col">
                  <img src={UserLogin} className="border-emerald-500 border-2 rounded-full"></img>
                  <h2 className="text-sm font-medium mt-2">Amala</h2>
                </div>
              </div>
              {/* <div className="card rounded-lg p-6 mt-0">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/pdhuW_mz9YU" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
              </div> */}

              <div className="card rounded-lg p-6 mt-8">
                <h4 className="text-3xl font-semibold mb-5">Postingan Terbaru</h4>
                <div class="grid grid-cols-2 gap-4">
                  {urls.map(() => (
                    <div className="card relative rounded-2xl">
                    <img src={CardBg} className="" />
                    <div className="absolute top-0 mt-5 ml-4 pr-4 grid grid-cols-5">
                      <img src={UserLogin} className="col-span-1 w-10"></img>
                      <div className="col-span-3 text-white text-sm ml-4">
                      <span className="font-medium">Ibrahim Hazela</span>
                      <p className="text-xs">1 Jam yang lalu</p>
                      </div>
                    </div>
                    <div class="absolute bottom-0 left-0 ml-4 text-white grid grid-cols-3 mb-4">
                      <button className="inline"><ThumbsUp className="inline"></ThumbsUp>123</button>
                      <button className="inline mx-2"><MessageCircle className="inline"></MessageCircle>123</button>
                      <button className="inline"><Bookmark className="inline"></Bookmark>123</button>
                    </div>
                  </div>                  
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32 mt-12 pr-12">
                <div className="bg-white p-6 rounded-xl justify-center items-center flex flex-col">
                  <img src={UserLogin} className="w-16"></img>
                  <div class="relative mt-12">
                    <input
                      class="focus:ring-red-500 focus:border-red-500 bg-slate-100 text-slate-400 rounded-full w-80 h-11 px-8 border-none"
                      text-black="text-black"
                      type="text"
                      placeholder="Ingin menulis sesuatu?"
                    ></input>
                    <button type="submit" class="absolute left-0 top-2 text-red-600 ml-64">
                      <Image/>
                    </button>
                  </div>
                </div>
                <h4 className="text-lg font-semibold mt-8 mb-3">Pengguna Online</h4>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Kedar Anugerah Nacha Putra</span>
                    <p className="text-sm text-slate-400">Siswa</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Nanda Hafiza Yusron</span>
                    <p className="text-sm text-slate-400">Siswa</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12">
                  <img src={UserLogin} className="inline w-10 mr-4 col-span-2"></img>
                  <div className="col-span-10">
                    <span className="text-base font-medium">Hafiz Rizky Nurwachid</span>
                    <p className="text-sm text-slate-400">Siswa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <form onSubmit={(ev) => this.saveBlogs(ev)}>
                    <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      <div className="relative px-6 pt-6 flex-auto">
                        {/*     <DragAndDropFile />kurang setState to image */}
                        <Dragndrop onChange={this.setImage}/>
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
                          onChange={(ev) => this.setState({ youtubeLink: ev.target.value })}
                        />
                        <textarea
                          className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                          placeholder="Deskripsi Video"
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

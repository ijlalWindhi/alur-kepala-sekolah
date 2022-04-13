// inisiasi library default
import React from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"
import { baseUrl } from "../../../config"

// inisiasi component
import LayoutSidebar from '../../../components/Layout/LayoutSidebar';
// import DragAndDropFile from "../Marketplace/DragAndDropFile";
import DragAndDropFile from '../Marketplace/FilesDragAndDrop';

import UserLogin from '../../../assets/user-login.png';
import bookmark from '../../../assets/bookmark.png';
import calender from '../../../assets/calendar.png';
import video from '../../../assets/icon-videoWhite.svg';
import settings from '../../../assets/icon-settings.svg';
import search from '../../../assets/icon-search.svg';
import AddButton from '../../../assets/icon-add.svg';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      blogs: [],
      description: "",
      youtubeLink: "",
      blogImage: ""
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token")
    } else {
      window.location = "/login"
    }
    this.headerConfig.bind(this);

    this.state.showModal = false;
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` }
    }
    return header
  }

  getBlogs = () => {
    let url = baseUrl + "/blogs"
    axios.get(url, this.headerConfig())
      .then(response => {
        this.setState({ blogs: response.data.data })
        console.log(response.data.data)
      })
      .catch(error => {
        if (error.response) {
          if (error.response.status) {
            window.alert(error.response.data.message)
            // this.props.history.push("/dashboard")
          }
        } else {
          console.log(error);
        }
      })
  }

  componentDidMount() {
    this.getBlogs()
  }

  saveBlogs = event => {
    event.preventDefault()
    let form = {
      description: this.state.description,
      youtubeLink: this.state.youtubeLink,
      blogImage: this.state.blogImage
    }
    console.log(form)
    let url = baseUrl + "/blogs"
    // console.log("ini msuk insert")
    axios.post(url, form, this.headerConfig())
      .then(response => {
        window.alert(response.data.message)
        console.log(response)
        this.getBlogs()
      })
      .catch(error => console.log(error))
  }

  // function untuk menampilkan modal tambah blog
  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  render() {
    return (
      <>
        {' '}
        <LayoutSidebar>
          {' '}
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8">
            <div class="col-span-2 ml-14 mt-3">
              <div className="card rounded-lg p-6 mt-0">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/pdhuW_mz9YU"
                  frameborder="0"
                  allowfullscreen="allowfullscreen"
                ></iframe>
              </div>

              <div className="card rounded-lg p-6 mt-8">
                <h4 className="text-3xl font-semibold mb-5">
                  Video Siaran Langsung Lainnya
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  {this.state.blogs.map(item => (
                    <div>
                      {console.log(item.youtubeLink.split("/")[item.youtubeLink.split("/").length - 1].replace('watch?v=',""))}
                      <iframe
                        width="100%"
                        height="180"
                        // src={item.youtubeLink}
                        src={`https://www.youtube.com/embed/${item.youtubeLink.split("/")[item.youtubeLink.split("/").length - 1].replace('watch?v=',"")}`}
                        frameborder="0"
                        allowfullscreen="allowfullscreen"
                      ></iframe>
                      {/* <img className="w-full" src={item.youtubeLink}></img> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32 mt-12">
                <div className="flex flex-row">
                  <h4 className="text-lg font-semibold">Blog/Berita</h4>
                  <img src={settings} className="ml-24 cursor-pointer" />
                </div>
                <div class="col-span-3 relative">
                  <input
                    class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none"
                    text-black="text-black"
                    type="text"
                    name="search"
                    placeholder="Cari Blog/Berita"
                  ></input>
                  <button type="submit" class="absolute left-0 top-5 ml-48">
                    <img src={search} />
                  </button>
                </div>
                <div className="mt-8">
                  <Link
                    to="/blog"
                    className="py-3 pl-5 pr-12 text-white bg-red-500 rounded-2xl"
                  >
                    <img src={video} className="inline mr-4"></img>
                    <span className="font-normal text-base ">
                      Siaran Langsung
                    </span>
                  </Link>
                </div>
                <div className="mt-6 ml-5">
                  <Link to="/acara">
                    <img src={calender} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Acara</span>
                  </Link>
                </div>
                <div className="mt-6 ml-5">
                  <Link to="/tersimpan">
                    <img src={bookmark} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Tersimpan</span>
                  </Link>
                </div>
                <div className="mt-8">
                  <span
                    onClick={() => this.Modal()}
                    className="py-3 pl-5 pr-6 text-white bg-red-500 rounded-2xl cursor-pointer"
                  >
                    <img src={AddButton} className="inline mr-4"></img>
                    <span className="font-normal text-base ">
                      Tambah Blog/Video
                    </span>
                  </span>
                </div>

                <h4 className="text-lg font-semibold mt-8 mb-3">
                  Daftar Tontonan
                </h4>
                <div className="mt-4">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-4">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-4">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
              </div>
            </div>
          </div>
          {this.state.showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-[30px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none" onSubmit={ev => this.saveBlogs(ev)}>
                    <div className="relative px-6 pt-6 flex-auto">
                      <DragAndDropFile /> {/* kurang setState to image */}
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mt-8 mb-4"
                        placeholder="Youtube Links" onChange={ev => this.setState({ youtubeLink: ev.target.value })}
                      />
                      <textarea
                        className="focus:ring-red-500 focus:border-red-500 text-sm flex-1 block w-96 border-2 border-gray-300 rounded-xl px-6 py-4 mb-4"
                        placeholder="Deskripsi Video" onChange={ev => this.setState({ description: ev.target.value })}
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
                        onClick={this.Modal}
                      >
                        Tambah
                      </button>
                    </div>
                  </div>
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

// inisiasi library default
import React from "react";
import axios from "axios"
import { baseUrl } from "../../../config"

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";
import GrupCard from "../../../components/fragment/Forum/GrupCard";
import SummaryCard from "../../../components/fragment/Marketplace/SummaryCard";
import Notification from "../../../components/fragment/Forum/Notification";
import UserLogin from "../../../assets/user-login.png"
import postingan from "../../../assets/postingan.png"


export default class ForumDiskusi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      forum: []
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token")
    } else {
      window.location = "/login"
    }
    this.headerConfig.bind(this)
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` }
    }
    return header
  }

  getForum = () => {
    let url = baseUrl + "/forum"
    axios.get(url, this.headerConfig())
      .then(response => {
        this.setState({ forum: response.data.data })
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
    this.getForum()
  }

  saveForum = event => {
    event.preventDefault()
    let form = {
      forumName: this.state.forumName,
      description: this.state.description,
      forumImage: this.state.forumImage
    }
    console.log(form)
    let url = baseUrl + "/forum"
    // console.log("ini msuk insert")
    axios.post(url, form, this.headerConfig())
      .then(response => {
        window.alert(response.data.message)
        console.log(response)
        this.getForum()
      })
      .catch(error => console.log(error))

  }

  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-10">
            <div class="col-span-2 ml-14">
              <div id="tabContent">
                {/* Tab Content 1 */}
                <div class="hidden py-4" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <h1 className="text-3xl font-semibold">Aktivitas Terbaru</h1>
                  <div className="card rounded-lg bg-white p-6 mt-8 mr-20">
                    <div className="grid grid-cols-9">
                      <div>
                        <img src={UserLogin} />
                      </div>
                      <div className="col-span-7">
                        <h5 className="text-base font-medium">Forum Programmer Indonesia</h5>
                        <span className="font-normal text-sm text-slate-300">Antonio Purnama</span>
                        <h6 className="font-normal text-sm text-slate-300">Yesterday at 12.30</h6>
                      </div>
                    </div>
                    <div className="font-normal text-sm mt-4">Kasus penularan subvarian BA.2 Omicron dilaporkan terus meningkat. Studi ungkap tanda-tanda keparahan yang disebabkan oleh "Son of Omicron" ini.</div>
                    <div className="mt-2">
                      <img className="w-full" src={postingan}></img>
                      <div className="mt-2 grid grid-cols-4">
                        <div className="col-span-3">
                          <button>Like : 23</button>
                          <button className="mx-4">Comment : 23</button>
                          <button>Share : 23</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Content 2 */}
                <div class="hidden p-4" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                  <h1 className="font-semibold text-2xl">Disarankan Untuk Anda</h1>
                  <h4 className="mb-8 font-semibold text-base text-slate-400">Grup yang mungkin anda minati</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <GrupCard />
                    <GrupCard />
                    <GrupCard />
                  </div>
                  <h1 className="font-semibold text-2xl mt-8">Grup Teman</h1>
                  <h4 className="mb-8 font-semibold text-base text-slate-400">Grub yang teman anda bergabung didalamnya</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <GrupCard />
                    <GrupCard />
                  </div>
                </div>
                {/* Tab Content 3 */}
                <div class="hidden p-4" id="settings" role="tabpanel" aria-labelledby="settings-tab">
                  <div className="card rounded-lg p-4">
                    <h1 className="font-semibold text-xl mb-8">Lebih Awal</h1>
                    <div className="gap-4">
                      <Notification />
                      <Notification />
                      <Notification />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Sharing Informasi</h4>
              <div>
                <div class="mb-4 border-b border-gray-200 mt-8">
                  <ul class=" -mb-px text-sm font-medium" id="tab" data-tabs-toggle="#tabContent" role="tablist">
                    <li class="mr-3" role="presentation">
                      <button
                        class="w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg  focus:ring-none active:btn-warning focus:btn-warning"
                        id="profile-tab"
                        data-tabs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        Beranda Anda
                      </button>
                    </li>
                    <li class="mr-3" role="presentation">
                      <button
                        class="w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg focus:ring-none active:btn-warning focus:btn-warning"
                        id="dashboard-tab"
                        data-tabs-target="#dashboard"
                        type="button"
                        role="tab"
                        aria-controls="dashboard"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Temukan
                      </button>
                    </li>
                    <li class="mr-3" role="presentation">
                      <button
                        class=" w-48 text-left focus:text-left active:text-left inline-block p-4 rounded-t-lg focus:ring-none active:btn-warning focus:btn-warning"
                        id="settings-tab"
                        data-tabs-target="#settings"
                        type="button"
                        role="tab"
                        aria-controls="settings"
                        aria-selected="false"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        Notifikasi
                      </button>
                    </li>
                  </ul>
                  <div className="mt-8">
                    <h4 className="text-lg font-semibold">Grup yang Anda Tergabung didalamnya</h4>
                    <div className="mt-6 grid grid-cols-6">
                      <img src={UserLogin} className="inline w-10 mr-4"></img>
                      <div className="col-span-5">
                        <span className="text-base font-normal">Programmer Club</span><br />
                        <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-6">
                      <img src={UserLogin} className="inline w-10 mr-4"></img>
                      <div className="col-span-5">
                        <span className="text-base font-normal">Programmer Club</span><br />
                        <span className="text-sm font-normal text-slate-400">Terakhir aktif 1 hari yang lalu</span>
                      </div>
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

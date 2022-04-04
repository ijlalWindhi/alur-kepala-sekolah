// inisiasi library default
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { baseUrl } from "../../../config"

// inisiasi component
import LayoutSidebar from "../../../components/Layout/LayoutSidebar";

import UserLogin from "../../../assets/user-login.png"
import bookmark from "../../../assets/bookmark.png"
import calender from "../../../assets/calendar.png"
import video from "../../../assets/video.png"
import bell from "../../../assets/bell.png"
import power from "../../../assets/power.png"


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
    this.headerConfig.bind(this)
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

  render() {
    return (
      <>
        <LayoutSidebar>
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-3 mt-8">
            <div class="col-span-2 ml-14 mt-6">
              {/* <div className="mt-2">
                <input type="text" className=" w-1/2 h-12 bg-slate-100 border-red-500 rounded-full px-6 ml-6" placeholder="Apa yang anda pikirkan sekarang?"></input>
              </div> */}

              <div className="card rounded-lg bg-white p-6 mt-10">
              <iframe width="100%" height="315" src="https://www.youtube.com/embed/pdhuW_mz9YU" frameborder="0" allowfullscreen></iframe>

              </div>
              
              <div className="card rounded-lg bg-white p-6 mt-8">
                  <h4 className="text-lg font-semibold mb-5">Video Siaran Langsung Lainnya</h4>
                  <div class="grid grid-cols-3 gap-4">

                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <div>                  
                        <iframe width="100%" height="120" src="https://www.youtube.com/embed/eeI2wPXSGbM" frameborder="0" allowfullscreen></iframe>
                    </div>
                    
                  </div>
              </div>
            </div>
            <div>
              
              <div className="pl-32 mt-12">
                <h4 className="text-lg font-semibold">Blog/Berita</h4>
                <input type="text" className=" w-3/9 h-9 rounded-full border-red-400  px-6 mt-5" placeholder="Cari Blog/Berita"></input>
                <div className="mt-6">
                  <a href="#" className="hover:bg-red-600 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-600 active:border-8 focus:ring-offset-8 focus:offset-8 focus:text-white focus:bg-red-600 focus:rounded-full active:rounded-full focus:bg-contain focus:padding-4 active:text-white">
                    <img src={video} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Siaran Langsung</span>
                  </a>
                </div>
                <div className="mt-6">
                  <Link to="/acara">
                    <img src={calender} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Acara </span>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link to="/tersimpan">
                    <img src={bookmark} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Tersimpan </span>
                  </Link>
                </div>
                <h4 className="text-lg font-semibold mt-5">Daftar Tontonan</h4>
                <div className="mt-2">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-2">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-2">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
              </div>
            </div>
          </div>
          
        </LayoutSidebar>
      </>
    );
  }
}

// inisiasi library default
import React from "react";
import axios from "axios";
import { baseUrl } from "../../../../config";
import { NavLink } from "react-router-dom";
import {
  ThumbsUp,
  MessageCircle,
  Bookmark, Share2
} from "react-feather";
import data from "../../../../dummy/bloglist";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";

import UserLogin from "../../../../assets/user-login.png";


export default class DisimpanKS extends React.Component {
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
                  <h1 className="text-2xl font-semibold col-span-3">Postingan Tersimpan</h1>

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
                        <h1
                          style={{
                            margin: "15px",
                            marginBottom: "0",
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
                          <button className="inline mx-2">
                            <Share2 className="inline mr-2"></Share2>123
                          </button>
                        </div>
                        <button className="inline">
                            <Bookmark className="inline ,r-2"></Bookmark>
                          </button>
                      </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

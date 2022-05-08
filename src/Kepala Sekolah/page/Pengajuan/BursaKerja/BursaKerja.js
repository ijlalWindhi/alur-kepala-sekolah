// inisiasi library default
import React from "react";
import axios from "axios";
import { baseUrl } from "../../../../config";
import { Trash2, Edit2 } from "react-feather";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebarKS";
import deleteImg from "../../../../assets/delete.png";

export default class BursaKerja extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      job: [],
      jobTitle: "",
      description: "",
      condition: "",
      date: "",
      submissionId: "",
      approve: "",
    };

    // if (localStorage.getItem("token")) {
    //   this.state.token = localStorage.getItem("token");
    // } else {
    //   window.location = "/login";
    // }
    this.headerConfig.bind(this);
    this.state.showModal = false;
    this.state.showDelete = false;
    this.state.showEdit = false;
  }

  Modal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  Delete = () => {
    this.setState({
      showDelete: !this.state.showDelete,
    });
  };

  Edit = (selectedItem) => {
    this.setState({
      showEdit: !this.state.showEdit,
    });
    this.setState({
      submissionId: selectedItem.submissionId,
      jobTitle: selectedItem.jobTitle,
      description: selectedItem.description,
      condition: selectedItem.condition,
      date: selectedItem.date,
      approve: selectedItem.approve,
    });
    console.log(selectedItem);
  };

  approvedPills = (condition) => {
    const el = condition ? (
      <div
        style={{ background: "#00DDB5", borderRadius: "10px" }}
        className="text-white p-3 text-center"
      >
        Approved
      </div>
    ) : (
      <div
        style={{ background: "#FFB573", borderRadius: "10px" }}
        className="text-white p-3 text-center"
      >
        Waiting
      </div>
    );
    console.log(condition);
    return el;
  };

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  getJob = () => {
    let url = baseUrl + "/submission/job";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ job: response.data.data });
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
    this.getJob();
  }

  saveJob = (event) => {
    event.preventDefault();
    let form = {
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      condition: this.state.condition,
      date: this.state.date,
    };
    console.log(form);
    let url = baseUrl + "/submission/job";
    axios
      .post(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getJob();
      })
      .catch((error) => console.log(error));
  };

  SplitDate = (date) => {
    return date.split("T")[0];
  };

  drops = (selectedItem) => {
    let url = baseUrl + "/submission/job/" + selectedItem.submissionId;
    console.log(url);
    axios
      .delete(url, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        this.getJob();
      })
      .catch((error) => console.log(error));
  };

  Edits = (e, selectedItem) => {
    e.preventDefault();
    console.log(selectedItem);
    let form = {
      jobTitle: this.state.jobTitle,
      description: this.state.description,
      condition: this.state.condition,
      date: this.state.date,
      // approve :this.state.approve
    };
    console.log(form);
    let url = baseUrl + "/submission/job/" + this.state.submissionId;
    console.log(this.state.submissionId);
    axios
      .put(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getJob();
        this.Edit();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <LayoutSidebar>
          <div className="m-20" style={{ maxWidth: "70%" }}>
            <div className="col-span-2">
              <h1 className="text-xl font-medium">Pengajuan Bursa Kerja</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button
                    className="bg-red-600 p-3 text-white rounded-2xl"
                    data-modal-toggle="defaultModal"
                    onClick={() => this.Modal()}
                  >
                    + Tambah Pengajuan
                  </button>
                </div>
              </div>
              <div class="relative overflow-x-auto shadow-md ">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    class=" text-white  text-start"
                    style={{ background: "#474747" }}
                  >
                    <tr>
                      <th scope="col" class="px-6 font-medium py-3">
                        Role Pekerjaan
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Deskripsi Pekerjaan
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Persyaratan
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Batas Terakhir Tanggal
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Opsi
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* {this.state.job.map((item, index) => ( */}
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td class="w-4 p-4">
                          <h6 className="text-black font-medium text-sm">
                            {/* {item.jobTitle} */} Web Developer
                          </h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-medium text-sm">
                            {/* {item.description} */} Menguasai bahasa pemrograman website
                          </h6>
                        </td>
                        <td class="px-6 py-4">
                          <h6 className="text-black font-medium text-sm">
                            {/* {item.condition} */} 1. Dokumen CV <br></br> 2. Menguasa 3 bahasa pemrograman <br></br> 3. Mampu bekerjsa sama
                          </h6>
                        </td>
                        <td class="px-6 py-4 text-black font-medium text-sm">
                          {/* {this.SplitDate(item.date)} */} 20 Oktober 2022
                        </td>
                        <td class="px-6 py-4">
                          <div className="flex flex-row">
                            <button onClick={() => this.Delete()}
                              className="font-small p-3 text-white bg-fuchsia-500 hover:underline ml-2 inline rounded-xl"
                              data-modal-toggle="popup-delete"
                            >
                              <Trash2/>
                            </button>
                            {/* {this.state.guest.map(item => ( */}
                            <button onClick={() => this.Edit()}
                              className="font-small p-3 text-white bg-blue-500 hover:underline inline ml-2 rounded-xl"
                              data-modal-toggle="edit-modal"
                            >
                              <Edit2/>
                            </button>
                          </div>
                          {this.state.showModal ? (
                            <>
                              <div
                                id="edit-modal"
                                tabindex="-1"
                                aria-hidden="true"
                                class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-200/50"
                              >
                                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                  <form onSubmit={(e) => this.Edits(e)}>
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                      <div class="flex justify-between items-start p-5 rounded-t">
                                        <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                                          Pengajuan Bursa Kerja
                                        </h3>
                                        <button
                                          type="button"
                                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                          data-modal-toggle="defaultModal"
                                          onClick={() => this.Modal()}
                                        >
                                          <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clip-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div class="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-400"
                                            placeholder="Nama Jabatan Kerja"
                                            value={this.state.jobTitle}
                                            onChange={(ev) =>
                                              this.setState({
                                                jobTitle: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="date"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-400"
                                            placeholder="Tanggal Pengajuan"
                                            value={this.state.date}
                                            onChange={(ev) =>
                                              this.setState({
                                                date: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-300"
                                            placeholder="Deskripsi"
                                            value={this.state.description}
                                            onChange={(ev) =>
                                              this.setState({
                                                description: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-300"
                                            placeholder="Persyaratan"
                                            value={this.state.condition}
                                            onChange={(ev) =>
                                              this.setState({
                                                condition: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          {/* post bagian persyaratan dalam string tapi sari checkbox */}
                                        </div>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button
                                          data-modal-toggle="defaultModal"
                                          type="button"
                                          class="text-green-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-green-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          onClick={() => this.Modal()}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          data-modal-toggle="defaultModal"
                                          type="submit"
                                          class="text-white bg-green-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                          Ajukan
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </>
                          ) : null}
                          {this.state.showEdit ? (
                            <>
                              <div
                                id="edit-modal"
                                tabindex="-1"
                                aria-hidden="true"
                                class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-200/50"
                              >
                                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                  <form onSubmit={(e) => this.Edits(e)}>
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                      <div class="flex justify-between items-start p-5 rounded-t">
                                        <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                                          Pengajuan Bursa Kerja
                                        </h3>
                                        <button
                                          type="button"
                                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                          data-modal-toggle="defaultModal"
                                          onClick={() => this.Edit()}
                                        >
                                          <svg
                                            class="w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              fill-rule="evenodd"
                                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                              clip-rule="evenodd"
                                            ></path>
                                          </svg>
                                        </button>
                                      </div>
                                      <div class="p-6 space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-400"
                                            placeholder="Nama Jabatan Kerja"
                                            value={this.state.jobTitle}
                                            onChange={(ev) =>
                                              this.setState({
                                                jobTitle: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="date"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-400"
                                            placeholder="Tanggal Pengajuan"
                                            value={this.state.date}
                                            onChange={(ev) =>
                                              this.setState({
                                                date: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-300"
                                            placeholder="Deskripsi"
                                            value={this.state.description}
                                            onChange={(ev) =>
                                              this.setState({
                                                description: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-400 p-4 text-slate-300"
                                            placeholder="Persyaratan"
                                            value={this.state.condition}
                                            onChange={(ev) =>
                                              this.setState({
                                                condition: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          {/* post bagian persyaratan dalam string tapi sari checkbox */}
                                        </div>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button
                                          data-modal-toggle="defaultModal"
                                          type="button"
                                          class="text-yellow-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-yellow-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          onClick={() => this.Edit()}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          data-modal-toggle="defaultModal"
                                          type="submit"
                                          class="text-white bg-yellow-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                          Ajukan
                                        </button>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </>
                          ) : null}
                          {/* Pop Up Delete */}
                          {this.state.showDelete ? (
                            <>
                              <div
                                id="popup-delete"
                                tabindex="-1"
                                class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-200/50"
                              >
                                <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                                  <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                    <div class="flex justify-end p-2"></div>
                                    <div class="p-6 pt-0 text-center">
                                      <img
                                        className="mx-auto"
                                        src={deleteImg}
                                      ></img>
                                      <h2 className="text-lg font-medium text-black">
                                        Hapus Guru Tamu?
                                      </h2>
                                      <h3 class="mb-5 text-base font-normal text-black mt-4">
                                        Apakah anda yakin ingin menghapus data
                                        guru tamu ini?
                                      </h3>
                                      <button
                                        data-modal-toggle="popup-delete"
                                        type="button"
                                        class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                        onClick={() => this.Delete()}
                                      >
                                        Batal
                                      </button>
                                      <button
                                        data-modal-toggle="popup-delete"
                                        type="button"
                                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-full text-sm inline-flex items-center px-5 py-2.5 text-center ml-2"
                                        onClick={() => this.drops()}
                                      >
                                        Hapus
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : null}
                        </td>
                        <td className="px-6 py-4  text-white font-medium text-sm"><h1 className="bg-red-500 py-2 px-1 rounded-xl text-center">Declined</h1></td>
                      </tr>
                    {/* // ))} */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </LayoutSidebar>
      </>
    );
  }
}

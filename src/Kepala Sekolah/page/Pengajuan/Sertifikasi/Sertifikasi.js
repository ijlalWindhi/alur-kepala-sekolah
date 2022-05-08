// inisiasi library default
import React from "react";
import axios from "axios";
import { baseUrl } from "../../../../config";
import { Trash2, Edit2 } from "react-feather";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebarKS";
import deleteImg from "../../../../assets/delete.png";

export default class Sertifikasi extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      certification: [],
      name: "",
      gender: "",
      nisn: "",
      phone: "",
      school: "",
      program: "",
      date: "",
      status: "",
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
      name: selectedItem.name,
      gender: selectedItem.gender,
      nisn: selectedItem.nisn,
      phone: selectedItem.phone,
      school: selectedItem.school,
      program: selectedItem.program,
      date: selectedItem.date,
      status: selectedItem.status,
      approve: selectedItem.approve,
    });
    console.log(selectedItem);
  };

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
  };

  getCertification = () => {
    let url = baseUrl + "/submission/certification";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ certification: response.data.data });
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
    this.getCertification();
  }

  saveCertification = (event) => {
    event.preventDefault();
    let form = {
      name: this.state.name,
      gender: this.state.gender,
      nisn: this.state.nisn,
      phone: this.state.phone,
      school: this.state.school,
      program: this.state.program,
      date: this.state.date,
      status: this.state.status,
    };
    console.log(form);
    let url = baseUrl + "/submission/certification";
    axios
      .post(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getCertification();
      })
      .catch((error) => console.log(error));
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

  SplitDate = (date) => {
    return date.split("T")[0];
  };

  drops = (selectedItem) => {
    let url =
      baseUrl + "/submission/certification/" + selectedItem.submissionId;
    console.log(url);
    axios
      .delete(url, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        this.getCertification();
      })
      .catch((error) => console.log(error));
  };

  Edits = (e, selectedItem) => {
    e.preventDefault();
    console.log(selectedItem);
    let form = {
      name: this.state.name,
      gender: this.state.gender,
      nisn: this.state.nisn,
      phone: this.state.phone,
      school: this.state.school,
      program: this.state.program,
      date: this.state.date,
      status: this.state.status,
    };
    console.log(form);
    let url = baseUrl + "/submission/certification/" + this.state.submissionId;
    console.log(this.state.submissionId);
    axios
      .put(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getCertification();
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
              <h1 className="text-xl font-medium">
                Pengajuan Sertifikasi Online
              </h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button
                    className="bg-red-600 p-3 text-white rounded-2xl"
                    onClick={()=>this.Modal()}
                  >
                    + Tambah Pengajuan
                  </button>
                </div>
              </div>
              <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead
                    class="text-white text-start"
                    style={{ background: "#474747" }}
                  >
                    <tr>
                      <th scope="col" class="px-6 font-medium py-3">
                        Nama & Jenis Kelamin
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        NISN & Nomer Telepon
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Asal Sekolah & Jurusan
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Tanggal & Status Sertifikasi
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
                    {/* {this.state.certification.map((item) => ( */}
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <>
                          <td class="w-4 p-4">
                            <h6 className="text-black text-s  m font-medium">
                              {/* {item.name} */} Hafiz Rizky
                            </h6>
                            <span className="text-black text-xs font-normal">
                              {/* {item.gender} */} Laki-laki
                            </span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-medium">
                              {/* {item.nisn} */} 00821099010
                            </h6>
                            <span className="text-black text-xs font-normal">
                              {/* {item.phone} */} 082190029012
                            </span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-medium">
                              {/* {item.school} */} SMK Telkom Sidoarjo
                            </h6>
                            <span className="text-black text-xs font-normal">
                              {/* {item.program} */} Teknik Komputer Jaringan
                            </span>
                          </td>
                          <td class="px-6 py-4">
                            <h6 className="text-black text-sm font-medium">
                              {/* {this.SplitDate(item.date)} */} 17 Agustus 2022
                            </h6>
                            <span className="text-black text-xs font-normal">
                              {/* {item.status} */}Selesai
                            </span>
                          </td>
                        </>
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
                          {/* Modal */}
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
                                      <div class="flex justify-between items-start p-5">
                                        <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                                          Tambah Sertifikasi Online
                                        </h3>
                                        <button
                                          type="button"
                                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                          data-modal-toggle="edit-modal"
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
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Nama Siswa"
                                          value={this.state.name}
                                          onChange={(ev) =>
                                            this.setState({
                                              name: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <select
                                          value={this.state.gender}
                                          onChange={(ev) =>
                                            this.setState({
                                              gender: ev.target.value,
                                            })
                                          }
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                        >
                                          <option value="" disabled selected>
                                            Jenis Kelamin
                                          </option>
                                          <option value="M">Laki-laki</option>
                                          <option value="F">Perempuan</option>
                                        </select>
                                        <input
                                          type="number"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="NISN"
                                          value={this.state.nisn}
                                          onChange={(ev) =>
                                            this.setState({
                                              nisn: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Nomor HP"
                                          value={this.state.phone}
                                          onChange={(ev) =>
                                            this.setState({
                                              phone: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Asal Sekolah"
                                          value={this.state.school}
                                          onChange={(ev) =>
                                            this.setState({
                                              school: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Program Keahlian"
                                          value={this.state.program}
                                          onChange={(ev) =>
                                            this.setState({
                                              program: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="date"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Tanggal"
                                          value={this.state.date}
                                          onChange={(ev) =>
                                            this.setState({
                                              date: ev.target.value,
                                            })
                                          }
                                        ></input>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button
                                          data-modal-toggle="edit-modal"
                                          type="button"
                                          class="text-green-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-green-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          onClick={() => this.Modal()}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          data-modal-toggle="edit-modal"
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
                          {/* Edit Data */}
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
                                      <div class="flex justify-between items-start p-5">
                                        <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                                          Edit Sertifikasi Online
                                        </h3>
                                        <button
                                          type="button"
                                          class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                          data-modal-toggle="edit-modal"
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
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Nama Siswa"
                                          value={this.state.name}
                                          onChange={(ev) =>
                                            this.setState({
                                              name: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <select
                                          value={this.state.gender}
                                          onChange={(ev) =>
                                            this.setState({
                                              gender: ev.target.value,
                                            })
                                          }
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                        >
                                          <option value="" disabled selected>
                                            Jenis Kelamin
                                          </option>
                                          <option value="M">Laki-laki</option>
                                          <option value="F">Perempuan</option>
                                        </select>
                                        <input
                                          type="number"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="NISN"
                                          value={this.state.nisn}
                                          onChange={(ev) =>
                                            this.setState({
                                              nisn: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Nomor HP"
                                          value={this.state.phone}
                                          onChange={(ev) =>
                                            this.setState({
                                              phone: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Asal Sekolah"
                                          value={this.state.school}
                                          onChange={(ev) =>
                                            this.setState({
                                              school: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="text"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Program Keahlian"
                                          value={this.state.program}
                                          onChange={(ev) =>
                                            this.setState({
                                              program: ev.target.value,
                                            })
                                          }
                                        ></input>
                                        <input
                                          type="date"
                                          className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          placeholder="Tanggal"
                                          value={this.state.date}
                                          onChange={(ev) =>
                                            this.setState({
                                              date: ev.target.value,
                                            })
                                          }
                                        ></input>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button
                                          data-modal-toggle="edit-modal"
                                          type="button"
                                          class="text-yellow-400 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-yellow-400 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          onClick={() => this.Edit()}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          data-modal-toggle="edit-modal"
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
                        <td className="px-6 py-4  text-white font-medium text-sm"><h1 className="bg-red-500 py-2 px-3 rounded-xl">Declined</h1></td>
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

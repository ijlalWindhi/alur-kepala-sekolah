// inisiasi library default
import React from "react";
import axios from "axios";
import { baseUrl } from "../../../../config";

// inisiasi component
import LayoutSidebar from "../../../../components/Layout/LayoutSidebar";
import AddButton from "../../../../assets/add-button.png";
import deleteImg from "../../../../assets/delete.png";

export default class GuruMagang extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
      token: "",
      internship: [],
      apprenticeshipPlace: "",
      // description: "",
      intershipDate: "",
      place: "",
      user: "",
      submissionId: "",
      approve: "",
    };

    if (localStorage.getItem("token")) {
      this.state.token = localStorage.getItem("token");
    } else {
      window.location = "/login";
    }
    this.headerConfig.bind(this);
    this.state.showDelete = false;
    this.state.showEdit = false;
  }

  headerConfig = () => {
    let header = {
      headers: { Authorization: `Bearer ${this.state.token}` },
    };
    return header;
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
      apprenticeshipPlace: selectedItem.apprenticeshipPlace,
      intershipDate: selectedItem.intershipDate,
      place: selectedItem.place,
      user: selectedItem.user,
      approve: selectedItem.approve,
    });
    console.log(selectedItem);
  };

  getInternship = () => {
    let url = baseUrl + "/submission/internship";
    axios
      .get(url, this.headerConfig())
      .then((response) => {
        this.setState({ internship: response.data.data });
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
    this.getInternship();
  }

  saveInternship = (event) => {
    event.preventDefault();
    let form = {
      apprenticeshipPlace: this.state.apprenticeshipPlace,
      intershipDate: this.state.intershipDate,
      place: this.state.place,
      user: this.state.user,
    };
    console.log(form);
    let url = baseUrl + "/submission/internship";
    axios
      .post(url, form)
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getInternship();
      })
      .catch((error) => console.log(error));
  };

  SplitDate = (date) => {
    return date.split("T")[0];
  };

  approvedPills = (condition) => {
    const el = condition ? (
      <div
        style={{
          background: "#00DDB5",
          borderRadius: "10px",
          textAlign: "center",
        }}
        className="text-white p-3"
      >
        Approved
      </div>
    ) : (
      <div
        style={{
          background: "#FFB573",
          borderRadius: "10px",
          textAlign: "center",
        }}
        className="text-white p-3"
      >
        Waiting
      </div>
    );
    return el;
  };

  ArrGuru = function (props) {
    //ALl data Array
    var listData = props.map(function (data) {
      return <div key={data.name}>{data.name}</div>;
    });
    return <div>{listData}</div>;
  };

  drops = (selectedItem) => {
    let url = baseUrl + "/submission/internship/" + selectedItem.submissionId;
    console.log(url);
    axios
      .delete(url, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        this.getInternship();
      })
      .catch((error) => console.log(error));
  };

  Edits = (e, selectedItem) => {
    e.preventDefault();
    console.log(selectedItem);
    let form = {
      apprenticeshipPlace: this.state.apprenticeshipPlace,
      intershipDate: this.state.intershipDate,
      place: this.state.place,
      user: this.state.user,
      // approve :this.state.approve
    };
    console.log(form);
    let url = baseUrl + "/submission/internship/" + this.state.submissionId;
    console.log(this.state.submissionId);
    axios
      .put(url, form, this.headerConfig())
      .then((response) => {
        window.alert(response.data.message);
        console.log(response);
        this.getInternship();
        this.Edit();
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <LayoutSidebar>
          <div className="m-20 " style={{ maxWidth: "70%" }}>
            <div className="col-span-2">
              <h1 className="text-xl font-medium">Pengajuan Magang Guru</h1>
              <div className="mb-8 grid grid-cols-5 mt-5">
                <div className="col-span-2">
                  <button
                    className="bg-red-600 p-3 text-white rounded-2xl"
                    data-modal-toggle="defaultModal"
                  >
                    + Guru
                  </button>
                </div>
                <div
                  id="defaultModal"
                  tabindex="-1"
                  aria-hidden="true"
                  class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
                >
                  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                    <form onSubmit={(ev) => this.saveInternship(ev)}>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex justify-between items-start p-5 rounded-t">
                          <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                            Tambah Magang Guru
                          </h3>
                          <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="defaultModal"
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
                            {/* masih belum bener */}
                            <input
                              type="date"
                              className="rounded-3xl border-slate-300 p-4 text-slate-300"
                              placeholder="Tanggal Magang"
                              onChange={(ev) =>
                                this.setState({
                                  intershipDate: ev.target.value,
                                })
                              }
                            ></input>
                            <input
                              type="text"
                              className="rounded-3xl border-slate-300 p-4 text-slate-300"
                              placeholder="Tujuan Magang"
                              onChange={(ev) =>
                                this.setState({
                                  apprenticeshipPlace: ev.target.value,
                                })
                              }
                            ></input>
                            <input
                              type="number"
                              className="rounded-3xl border-slate-300 p-4 text-slate-300"
                              placeholder="Lokasi"
                              onChange={(ev) =>
                                this.setState({
                                  place: {
                                    provinceId: parseInt(ev.target.value),
                                  },
                                })
                              }
                            ></input>
                            {/* <input type="number" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Distrik" onChange={ev => this.setState({ place: { "districtId": parseInt(ev.target.value) }})}></input> */}
                            {/* input nya location object berisi provinceId dan districtId seperti ini { "provinceId" : 16, "districtId" : 8 } */}
                            <input
                              type="text"
                              className="rounded-3xl border-slate-300 p-4 text-slate-300"
                              placeholder="Nama Guru"
                              onChange={(ev) =>
                                this.setState({
                                  user: [{ name: ev.target.value }],
                                })
                              }
                            ></input>
                            {/* input nya berupa array contohnya [{ "name" : "enam" },{ "name" : "tujuh" }] */}
                            <div className="">
                              <span className="text-sm font-medium text-black">
                                Daftar List Tambah Guru
                              </span>
                              <button
                                type="button"
                                className="ml-24"
                                data-modal-toggle="small-modal"
                              >
                                <img src={AddButton}></img>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div
                          id="small-modal"
                          tabindex="-1"
                          class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full"
                        >
                          <div class="relative p-4 w-full max-w-md h-full md:h-auto">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                              <div class="flex justify-between items-center p-5 rounded-t">
                                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                                  Daftar Guru
                                </h3>
                                <button
                                  type="button"
                                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                  data-modal-toggle="small-modal"
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
                              <input
                                type="text"
                                className="rounded-full w-80 h-11 px-8 ml-6 bg-slate-100 border-transparent focus:border-red-5000"
                                placeholder="Search"
                              ></input>
                              <div class="p-6 space-y-6">
                                <fieldset>
                                  <legend class="sr-only">
                                    Checkbox variants
                                  </legend>
                                  <div class="flex justify-start mb-4 grid grid-cols-4">
                                    <label
                                      for="checkbox-2"
                                      class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3"
                                    >
                                      <h6>0283648627</h6>
                                      <h6>Rengga Ardianto</h6>
                                      <h6>Rangkaian Listrik</h6>
                                    </label>
                                    <input
                                      id="checkbox-2"
                                      aria-describedby="checkbox-2"
                                      type="checkbox"
                                      class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4"
                                    />
                                  </div>
                                  <div class="flex justify-start mb-4 grid grid-cols-4">
                                    <label
                                      for="checkbox-2"
                                      class="text-sm font-medium text-gray-900 dark:text-gray-300 col-span-3"
                                    >
                                      <h6>0283648627</h6>
                                      <h6>Rengga Ardianto</h6>
                                      <h6>Rangkaian Listrik</h6>
                                    </label>
                                    <input
                                      id="checkbox-2"
                                      aria-describedby="checkbox-2"
                                      type="checkbox"
                                      class="w-4 h-4 text-red-600 bg-gray-100 rounded border-gray-300 focus:ring-red-500 ml-4"
                                    />
                                  </div>
                                </fieldset>
                              </div>
                              <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                                <button
                                  data-modal-toggle="small-modal"
                                  type="button"
                                  class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                >
                                  Batal
                                </button>
                                <button
                                  data-modal-toggle="small-modal"
                                  type="button"
                                  class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                  Simpan
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex items-center p-6 space-x-2 rounded-b ">
                          <button
                            data-modal-toggle="defaultModal"
                            type="button"
                            class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          >
                            Batal
                          </button>
                          <button
                            data-modal-toggle="defaultModal"
                            type="submit"
                            class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          >
                            Ajukan
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-span-3 flex justify-end">
                  <button
                    id="dropdownDefault"
                    data-dropdown-toggle="dropdown"
                    className="text-dark border-red-400 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
                    type="button"
                  >
                    3
                    <svg
                      class="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
                  >
                    <ul
                      class="py-1 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownDefault"
                    >
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Earnings
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sign out
                        </a>
                      </li>
                    </ul>
                  </div>
                  <input
                    type="text"
                    className="rounded-full w-64 h-11 px-8 border-red-400"
                    placeholder="Search"
                    style={{ border: `1px solid #E70000` }}
                  ></input>
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
                        No.
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Tujuan Magang
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Tanggal Magang
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Lokasi
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Jumlah Guru
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Nama Guru
                      </th>
                      <th scope="col" class="px-6 font-medium py-3">
                        Opsi
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.internship.map((item, index) => (
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <td className="px-6 py-4 text-black font-medium text-sm">
                          {index + 1}.
                        </td>
                        <>
                          <td className="px-6 py-4 text-black font-medium text-sm">
                            {item.apprenticeshipPlace}
                          </td>
                          <td className="px-6 py-4 text-black font-medium text-sm">
                            {this.SplitDate(item.intershipDate)}
                          </td>
                          <td className="px-6 py-4 text-black font-medium text-sm">
                            {item.place.provinceId}
                          </td>
                          <td className="px-6 py-4 text-black font-medium text-sm">
                            {item.user.length}
                          </td>
                          <td className="px-6 py-4 text-black font-medium text-sm">
                            {this.ArrGuru(item.user)}
                          </td>
                        </>
                        <td class="px-6 py-4">
                          <div className="flex flex-row">
                            <button
                              className="font-small p-3 text-white dark:text-white  hover:underline ml-2 inline w-20"
                              data-modal-toggle="popup-delete"
                              style={{
                                background: "#00DDB5",
                                borderRadius: 15,
                              }}
                            >
                              Approve
                            </button>
                            {/* {this.state.guest.map(item => ( */}
                            <button
                              className="font-small p-3 text-white dark:text-white  hover:underline inline ml-2 w-20"
                              data-modal-toggle="edit-modal"
                              style={{
                                background: "#E70000",
                                borderRadius: 15,
                              }}
                            >
                              Decline
                            </button>
                          </div>
                          {/* Edit Modal */}
                          {this.state.showEdit ? (
                            <>
                              <div
                                id="edit-modal"
                                tabindex="-1"
                                aria-hidden="true"
                                class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                              >
                                <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
                                  <form onSubmit={(e) => this.Edits(e, item)}>
                                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                      <div class="flex justify-between items-start p-5 rounded-t">
                                        <h3 class="text-xl font-medium text-gray-900 lg:text-2xl dark:text-white">
                                          Edit Magang Guru
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
                                        <div className="grid grid-cols-2 gap-4">
                                          <input
                                            type="date"
                                            className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                            placeholder="Tanggal Magang"
                                            value={this.state.intershipDate}
                                            onChange={(ev) =>
                                              this.setState({
                                                intershipDate: ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                            placeholder="Tujuan Magang"
                                            value={this.state.apprenticeshipPlace}
                                            onChange={(ev) =>
                                              this.setState({
                                                apprenticeshipPlace:
                                                  ev.target.value,
                                              })
                                            }
                                          ></input>
                                          <input
                                            type="number"
                                            className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                            placeholder="Lokasi"
                                            value={this.state.place}
                                            onChange={(ev) =>
                                              this.setState({
                                                place: {
                                                  provinceId: parseInt(
                                                    ev.target.value
                                                  ),
                                                },
                                              })
                                            }
                                          ></input>
                                          {/* <input type="number" className="rounded-3xl border-slate-300 p-4 text-slate-300" placeholder="Distrik" onChange={ev => this.setState({ place: { "districtId": parseInt(ev.target.value) }})}></input> */}
                                          {/* input nya location object berisi provinceId dan districtId seperti ini { "provinceId" : 16, "districtId" : 8 } */}
                                          <input
                                            type="text"
                                            className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                            placeholder="Nama Guru"
                                            value={this.state.user}
                                            onChange={(ev) =>
                                              this.setState({
                                                user: [
                                                  { name: ev.target.value },
                                                ],
                                              })
                                            }
                                          ></input>
                                          <select
                                            // value={this.state.approve}
                                            onChange={(ev) =>
                                              this.setState({
                                                approve: ev.target.value,
                                              })
                                            }
                                            className="rounded-3xl border-slate-300 p-4 text-slate-300"
                                          >
                                            <option value="" disabled selected>
                                              Pengajuan
                                            </option>
                                            <option value="true">Done</option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="flex items-center p-6 space-x-2 rounded-b ">
                                        <button
                                          data-modal-toggle="edit-modal"
                                          type="button"
                                          class="text-red-600 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full border border-red-600 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                          onClick={() => this.Edit()}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          data-modal-toggle="edit-modal"
                                          type="submit"
                                          class="text-white bg-red-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                                class="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
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
                                        onClick={() => this.drops(item)}
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
                      </tr>
                    ))}
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

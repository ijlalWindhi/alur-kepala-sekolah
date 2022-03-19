// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component
import corousel from "../../../assets/corousel-img.svg";

export default function DataBox({ handleAction }) {
  // const location = useLocation();
  // const { id } = queryString.parse(location.search.replace("?", ""));
  // const [description, setDescription] = useState("");

  // const date = () => {
  //   return moment().format();
  // };

  // const handleSubmit = () => {
  //   handleAction({ description, createAt: date() });
  // };

  // useEffect(() => {
  //   if (!id) setDescription("");
  // }, [id]);

  return (
    <>
      {/* CARD */}
      <div class="max-w-sm bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <img class="rounded-none p-1" src={corousel} alt=""></img>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <span className="mr-1 text-xs font-normal text-gray-400">19/02/2022, 14:18 WIB</span>
          <span className="text-xs font-normal text-gray-400 ml-4">John Doe</span>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 mt-4 text-sm font-medium text-center text-white bg-red-700 rounded-full hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {" "}
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </>
  );
}

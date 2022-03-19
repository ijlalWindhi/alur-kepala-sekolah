// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component
import corousel from "../../../assets/corousel-img.svg";

export default function CallBox({ handleAction }) {
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
      <div class="w-72 h-72 bg-white rounded-none border border-gray-200 shadow-md text-center py-8">
        <h2>Icon</h2>
        <div class="p-5">
          <h5 class="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-black">Phone</h5>
          <h4 class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">+628x-xxx-xxx-xxx</h4>
        </div>
      </div>
    </>
  );
}

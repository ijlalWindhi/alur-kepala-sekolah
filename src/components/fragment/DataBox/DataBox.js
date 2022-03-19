// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component

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
    <div class="p-6 box-border h-32 w-50 ">
      <h5 class="mb-2 text-3xl font-semibold tracking-tight text-red-500">200+</h5>
      <p class="font-medium text-base text-gray-800">Kunjugan Industri</p>
    </div>
  );
}

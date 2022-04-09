// inisasi library default
import React from 'react';
// inisiasi component
import imageCard from '../../../assets/image-card.png';
import userIcon from '../../../assets/icon-user.svg';

export default function DataBox() {
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
      <div class="w-96 bg-white rounded-none border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
        <img class="rounded-none p-1" src={imageCard} alt=""></img>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-base font-medium tracking-tight text-gray-900 dark:text-white">
              4 Gejala Awal Kena Omicron: Jika Anda Mengalami Kedinginan hingga
              Sakit Tenggorokan, Segera Tes Antigen!
            </h5>
          </a>
          <p class="mb-3 font-normal text-sm text-gray-700 dark:text-gray-400">
            Beberapa ahli menyebutkan, susunan genetik Omicron sangat berbeda
            dibandingkan dengan jenis COVID-19 lainnya dan cenderung lebih
            ringan daripada varian sebelumnya.
          </p>
          <div className="flex flex-row">
            <span className="mr-1 text-xs font-normal text-gray-400">
              19/02/2022, 14:18 WIB
            </span>
            <div className="flex flex-row ml-6">
              <img src={userIcon} alt="user icon" />
              <span className="text-xs font-normal text-gray-400">
                John Doe
              </span>
            </div>
          </div>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 mt-4 text-sm font-medium text-center text-white bg-red-500 rounded-full hover:bg-red-700 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            {' '}
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </>
  );
}

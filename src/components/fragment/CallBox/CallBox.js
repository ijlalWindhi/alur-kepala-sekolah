// inisasi library default
import React from 'react';
// inisiasi component
import IconCall from '../../../assets/icon-telphone.svg';
import IconMaps from '../../../assets/icon-maps.svg';
import IconMail from '../../../assets/icon-mail.svg';

export default function CallBox() {
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
      <div class="w-72 h-72 bg-white rounded-lg border shadow-md text-center py-8">
        <img src={IconCall} alt="icon" className="m-auto" />
        <div class="p-5">
          <h5 class="mb-4 text-base font-medium tracking-tight text-gray-900 dark:text-black">
            Phone
          </h5>
          <h4 class="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
            +628x-xxx-xxx-xxx
          </h4>
        </div>
      </div>
      <div class="w-72 h-72 bg-white rounded-lg border shadow-md text-center py-8">
        <img src={IconMaps} alt="icon" className="m-auto" />
        <div class="p-5">
          <h5 class="mb-4 text-base font-medium tracking-tight text-gray-900 dark:text-black">
            Address
          </h5>
          <h4 class="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
            Jalan Danau Ranau Raya G6 B6, Dusun Sawojajar, Kecamatan
            Kedungkandang, Kota Malang
          </h4>
        </div>
      </div>
      <div class="w-72 h-72 bg-white rounded-lg border shadow-md text-center py-8">
        <img src={IconMail} alt="icon" className="m-auto" />
        <div class="p-5">
          <h5 class="mb-4 text-base font-medium tracking-tight text-gray-900 dark:text-black">
            Email
          </h5>
          <h4 class="mb-4 font-normal text-sm text-gray-700 dark:text-gray-400">
            johndoe12@gmail.com
          </h4>
        </div>
      </div>
    </>
  );
}

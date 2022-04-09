// inisiasi library default
import React from 'react';
import { Link } from 'react-router-dom';

// inisiasi component
import LayoutSidebar from '../../../../components/Layout/LayoutSidebar';

import UserLogin from '../../../../assets/user-login.png';
import bookmark from '../../../../assets/bookmark.png';
import calender from '../../../../assets/icon-calendarWhite.svg';
import video from '../../../../assets/video.png';
import settings from '../../../../assets/icon-settings.svg';
import search from '../../../../assets/icon-search.svg';

export default class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      // call variable
    };
  }
  render() {
    return (
      <>
        {' '}
        <LayoutSidebar>
          {' '}
          <div class="grid grid-flow-row-dense grid-cols-3 grid-rows-1 mt-8">
            <div class="col-span-2 ml-14 mt-3">
              <div className="card rounded-lg p-6">
                <h4 className="text-3xl font-semibold mb-5">
                  Tontonan Original Platform SMK TKJ
                </h4>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                  <div>
                    <iframe
                      width="100%"
                      height="180"
                      src="https://www.youtube.com/embed/eeI2wPXSGbM"
                      frameborder="0"
                      allowfullscreen="allowfullscreen"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pl-32 mt-12">
                <div className="flex flex-row">
                  <h4 className="text-lg font-semibold">Blog/Berita</h4>
                  <img src={settings} className="ml-24 cursor-pointer" />
                </div>
                <div class="col-span-3 relative">
                  <input
                    class="focus:ring-red-500 focus:border-red-500 rounded-full w-64 h-11 mt-5 px-8 border-none"
                    text-black="text-black"
                    type="text"
                    name="search"
                    placeholder="Cari Blog/Berita"
                  ></input>
                  <button type="submit" class="absolute left-0 top-5 ml-48">
                    <img src={search} />
                  </button>
                </div>
                <div className="mt-8 ml-5">
                  <Link to="/blog">
                    <img src={video} className="inline mr-4"></img>
                    <span className="font-normal text-base ">
                      Siaran Langsung
                    </span>
                  </Link>
                </div>
                <div className="mt-6">
                  <Link
                    to="/acara"
                    className="py-3 pl-5 pr-32 text-white bg-red-500 rounded-2xl"
                  >
                    <img src={calender} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Acara</span>
                  </Link>
                </div>
                <div className="mt-6 ml-5">
                  <Link to="/tersimpan">
                    <img src={bookmark} className="inline mr-4"></img>
                    <span className="font-normal text-base ">Tersimpan</span>
                  </Link>
                </div>
                <h4 className="text-lg font-semibold mt-8 mb-3">
                  Daftar Tontonan
                </h4>
                <div className="mt-4">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-4">
                  <img src={UserLogin} className="inline w-10 mr-4"></img>
                  <span className="text-base font-normal">Alfia Zena</span>
                </div>
                <div className="mt-4">
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

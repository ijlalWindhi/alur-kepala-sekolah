import React from "react";
import Img from "../../../assets/footer.svg";
import { Youtube, Instagram, Twitter, Facebook } from "react-feather";
// import youtube from '../../../assets/icon-youtube.svg'
// import twitter from '../../../assets/icon-twitter.svg'
// import instagram from '../../../assets/icon-instagram.svg'
// import facebook from '../../../assets/icon-facebook.svg'
// import playstore from '../../../assets/icon-playstore.png'
// import apple from '../../../assets/icon-apple.png'

function Footer() {
  return (
    <footer className="text-center lg:text-left border-y-2 shadow-2xl ">
      <div className="mx-40 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="">
            <h6
              className="
                        text-3xl
                        font-semibold
                        mb-4
                        flex
                        items-center
                        justify-center
                        md:justify-start
                    "
            >
              <img src={Img} alt="logo" className="mr-10" />
            </h6>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-10 ml-20">
              <div className="">
                <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">Menu Utama</h6>
                <p className="mb-2 font-normal-text-base">
                  <a href="#!">Beranda</a>
                </p>
                <p className="mb-2 font-normal-text-base">
                  <a href="#!">Tentang</a>
                </p>
                <p className="mb-2 font-normal-text-base">
                  <a href="#!">Berita</a>
                </p>
              </div>
              <div className="">
                <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">Hubungi Kami</h6>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">Email</a>
                </p>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">Telepon</a>
                </p>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">Fax</a>
                </p>
              </div>
              <div className="">
                <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">Social Media</h6>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">
                    <Youtube className="inline mr-3 text-red-600"></Youtube>
                    Youtube
                  </a>
                </p>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">
                    <Instagram className="inline mr-3 text-red-600"></Instagram>
                    Instagram
                  </a>
                </p>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">
                    <Facebook className="inline mr-3 text-red-600"></Facebook>
                    Facebook
                  </a>
                </p>
                <p className="mb-2 text-base font-normal">
                  <a href="#!">
                    <Twitter className="inline mr-3 text-red-600"></Twitter>
                    Twitter
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="ml-20">
                    <h6 className="font-medium text-2xl mt-4 mb-4 flex justify-center md:justify-start">
                    Download App
                    </h6>
                    <div className='flex items-center'>
                        <p className="flex items-center justify-center md:justify-start mb-4">
                        <img src={apple} alt="apple icon"/>
                        </p>
                        <p className="flex items-center justify-center ml-4 md:justify-start mb-4">
                        <img src={playstore} alt="playstore icon"/>
                        </p>
                    </div>
                </div> */}
        </div>
      </div>
      <div className="text-center py-8 text-slate-400">2022 © Copyright Team Project</div>
    </footer>
  );
}

export default Footer;

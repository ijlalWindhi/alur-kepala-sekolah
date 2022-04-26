import React from 'react'
import logo from '../../../assets/Logo.svg'
import youtube from '../../../assets/icon-youtube.svg'
import twitter from '../../../assets/icon-twitter.svg'
import instagram from '../../../assets/icon-instagram.svg'
import facebook from '../../../assets/icon-facebook.svg'
import playstore from '../../../assets/icon-playstore.png'
import apple from '../../../assets/icon-apple.png'

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-black text-white">
        <div className="mx-auto md:mx-5 lg:mx-40 py-10 text-center md:text-left">
            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div className="">
                    <h6 className="
                        text-xl sm:text-3xl
                        font-semibold
                        mb-4
                        flex
                        items-center
                        justify-center
                        md:justify-start
                    ">
                    <img src={logo} alt="logo" className='w-1/6 mr-10'/>
                    Platform SMK TKJ
                    </h6>
                    <p className='text-justify text-xs sm:text-base mt-6'>
                    Selamat datang di platform SMK TKJ. Platform SMK TKJ membantu anda terhubung dan berbagi dengan orang-orang dalam kehidupan anda. Anda dapat membuat halaman Blog Berita, Forum Diskusi, Marketplace pengajuan dan banyak hal lainya
                    </p>
                    <div className='flex items-center mt-10'>
                        <img src={youtube} alt="youtube icon"/>
                        <img src={instagram} alt="instagram icon" className="ml-4"/>
                        <img src={twitter} alt="twitter icon" className="ml-4"/>
                        <img src={facebook} alt="facebook icon" className="ml-4"/>
                    </div>
                </div>
                <div className=''>
                    <div className='grid grid-1 grid-cols-2 gap-10 lg:ml-20'>
                        <div className="">
                            <h6 className="font-medium text-xl sm:text-2xl mt-4 mb-4 flex justify-center md:justify-start">
                            Kontak Kami
                            </h6>
                            <p className="mb-2 text-sm sm:text-base font-normal">
                            Telepon: <br/>
                            +62 821-4081-9210
                            </p>
                            <p className="text-sm sm:text-base font-normal">
                            Email: <br/>
                            info@dhisapro.com
                            </p>
                        </div>
                        <div className="">
                            <h6 className="font-medium text-xl sm:text-2xl mt-4 mb-4 flex justify-center md:justify-start">
                            Bagikan
                            </h6>
                            <p className="mb-2 text-sm sm:text-base font-normal">
                            <a href="#!">Twitter</a>
                            </p>
                            <p className="mb-2 text-sm sm:text-base font-normal">
                            <a href="#!">Facebook</a>
                            </p>
                            <p className="mb-2 text-sm sm:text-base font-normal">
                            <a href="#!">Instagram</a>
                            </p>
                            <p className='text-sm sm:text-base font-normal'>
                            <a href="#!">Telegram</a>
                            </p>
                        </div>
                    </div>
                    <div className='lg:ml-20'>
                        <h6 className="font-medium text-xl sm:text-2xl mt-4 mb-4 flex justify-center md:justify-start">
                            Alamat
                        </h6>
                        <p className="mb-2 text-sm sm:text-base font-normal">
                            <a href="#!">Jalan Danau Ranau Raya G6 B6, Dusun Sawojajar, Kecamatan Kedungkandang Kota Malang 6139</a>
                        </p>
                    </div>
                </div>
                <div className="lg:ml-20">
                    <h6 className="font-medium text-xl sm:text-2xl mt-4 mb-4 flex justify-center md:justify-start">
                    Download App
                    </h6>
                    <div className='flex flex-row justify-center md:justify-start'>
                            <img src={apple} alt="apple icon"/>
                            <img src={playstore} alt="playstore icon"/>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
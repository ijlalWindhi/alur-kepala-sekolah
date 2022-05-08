import React from "react";
import { Route, Switch } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

//call pages
// pages UTAMA
import Beranda from "./pages/Beranda";
import LandingPage from "./pages/LandingPage";
import Berita from "./pages/LandingPage/Berita";
import Registrasi from "./pages/Registrasi";
import ResetPassword from "./pages/ResetPassword";
import Login from "./pages/Login";

// pages INNER BERANDA
import Blog from "./pages/Beranda/Blog";
import beritaTerkini from "./pages/Beranda/Blog/beritaTerkini";
import ForumDiskusi from "./pages/Beranda/ForumDiskusi";
import Marketplace from "./pages/Beranda/Marketplace";
import Keranjang from "./pages/Beranda/Marketplace/Keranjang";
import RiwayatPembelian from "./pages/Beranda/Marketplace/RiwayatPembelian";
import Pengajuan from "./pages/Beranda/Pengajuan";
import TemplateBlog from "./pages/Beranda/Blog/TemplateBlog";
// import Acara from "./pages/Beranda/Blog/Acara";
// import Tersimpan from "./pages/Beranda/Blog/Tersimpan";
import GuruTamu from "./pages/Beranda/Pengajuan/GuruTamu";
import GuruMagang from "./pages/Beranda/Pengajuan/GuruMagang";
import Kunjungan from "./pages/Beranda/Pengajuan/Kunjungan";
import Sertifikasi from "./pages/Beranda/Pengajuan/Sertifikasi";
import BursaKerja from "./pages/Beranda/Pengajuan/BursaKerja";
import PengajuanBursa from "./pages/Beranda/Pengajuan/PengajuanBursa";
import Notifikasi from "./pages/Beranda/ForumDiskusi/Notifikasi";
import Temukan from "./pages/Beranda/ForumDiskusi/Temukan";
import LmsGuru from "./pages/Beranda/Lms/Guru/Guru";
import Peserta from "./pages/Beranda/Lms/Guru/Peserta";
import DetailKelas from "./pages/Beranda/Lms/Guru/Kelas/DetailKelas";
import DetailKelasSiswa from "./pages/Beranda/Lms/Siswa/Kelas/DetailKelas";
import DetailTugas from "./pages/Beranda/Lms/Guru/Kelas/DetailTugas";
import DetailTugasSiswa from "./pages/Beranda/Lms/Siswa/Kelas/DetailTugas";
import LmsSiswa from "./pages/Beranda/Lms/Siswa/Siswa";
import PesertaSiswa from "./pages/Beranda/Lms/Siswa/Peserta";
import ActiveClass from "./pages/Beranda/ActiveClass";
import NewClass from "./pages/Beranda/NewClass";
import EndClass from "./pages/Beranda/EndClass";
import Akun from "./pages/Beranda/Akun";
import Detailforum from "./pages/Beranda/ForumDiskusi/Detailforum";
import Disimpan from "./pages/Beranda/Blog/Disimpan";
import "./App.css";

// import page kepala sekolah

// Beranda
import BerandaKepalaSekolah from "./Kepala Sekolah/page/beranda"
import ActiveClassKS from "./Kepala Sekolah/page/beranda/ActiveClassKS"
import EndClassKS from "./Kepala Sekolah/page/beranda/EndClassKS"
import NewClassKS from "./Kepala Sekolah/page/beranda/NewClassKS";
// Blog KS
import BlogKS from "./Kepala Sekolah/page/Blog/";
import beritaTerkiniKS from "./Kepala Sekolah/page/Blog/beritaTerkiniKS/beritaTerkiniKS";
import DisimpanKS from "./Kepala Sekolah/page/Blog/DisimpanKS";
// Marketplace KS
import MarketplaceKS from "./Kepala Sekolah/page/Marketplace";
import KeranjangKS from "./Kepala Sekolah/page/Marketplace/Keranjang";
// LMS KS
import LmsKS from "./Kepala Sekolah/page/Lms/Guru";
import DetailKelasKS from "./Kepala Sekolah/page/Lms/Guru/Kelas/DetailKelas";
import PesertaKS from "./Kepala Sekolah/page/Lms/Guru/Peserta";
// Pengajuan KS
import GuruTamuKS from "./Kepala Sekolah/page/Pengajuan/GuruTamu";
import GuruMagangKS from "./Kepala Sekolah/page/Pengajuan/GuruMagang";
import KunjunganKS from "./Kepala Sekolah/page/Pengajuan/Kunjungan";
import SertifikasiKS from "./Kepala Sekolah/page/Pengajuan/Sertifikasi";
import BursaKerjaKS from "./Kepala Sekolah/page/Pengajuan/BursaKerja";


export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/Berita" component={Berita} />
      <Route path="/beranda" component={Beranda} />
      <Route path="/activeclass" component={ActiveClass} />
      <Route path="/newclass" component={NewClass} />
      <Route path="/endclass" component={EndClass} />
      <Route path="/registrasi" component={Registrasi} />
      <Route path="/resetpassword" component={ResetPassword} />

      <Route path="/blog" component={Blog} />
      <Route path="/beritaTerkini" component={beritaTerkini} />
      <Route path="/postingan-simpan" component={Disimpan} />
      <Route path="/forumdiskusi" component={ForumDiskusi} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/pengajuan" component={Pengajuan} />

      {/* <Route path="/acara" component={Acara} /> */}
      {/* <Route path="/tersimpan" component={Tersimpan} /> */}
      <Route path="/templateBlog" component={TemplateBlog} />

      <Route path="/keranjang" component={Keranjang} />
      <Route path="/riwayattransaksi" component={RiwayatPembelian} />

      <Route path="/guruMagang" component={GuruMagang} />
      <Route path="/guruTamu" component={GuruTamu} />
      <Route path="/kunjungan" component={Kunjungan} />
      <Route path="/sertifikasi" component={Sertifikasi} />
      <Route path="/bursaKerja" component={BursaKerja} />
      <Route path="/pengajuanBursa" component={PengajuanBursa} />

      <Route path="/Notifikasi" component={Notifikasi} />
      <Route path="/Temukan" component={Temukan} />
      <Route path="/lmsGuru" component={LmsGuru} />
      <Route path="/peserta" component={Peserta} />
      <Route path="/detailKelasGuru" component={DetailKelas} />
      <Route path="/detailTugasGuru" component={DetailTugas} />
      <Route path="/Akun" component={Akun} />


      <Route path="/lmsSiswa" component={LmsSiswa} />
      <Route path="/detailKelasSiswa" component={DetailKelasSiswa} />
      <Route path="/detailTugasSiswa" component={DetailTugasSiswa} />
      <Route path="/peserta-siswa" component={PesertaSiswa} />
      <Route path="/Detailforum" component={Detailforum}/>

      {/* Kepala Sekolah */}

      {/* Beranda Kepala Sekolah */}
      <Route path="/berandaKS" component={BerandaKepalaSekolah} />
      <Route path="/activeClassKS" component={ActiveClassKS} />
      <Route path="/endClassKS" component={EndClassKS} />
      <Route path="/newClassKS" component={NewClassKS} />

      {/* Blog Kepala Sekolah */}
      <Route path="/blogKS" component={BlogKS} />
      <Route path="/beritaTerkiniKS" component={beritaTerkiniKS} />
      <Route path="/disimpanKS" component={DisimpanKS} />

      {/* Marketplace Kepala Sekolah */}
      <Route path="/marketplaceKS" component={MarketplaceKS} />
      <Route path="/KeranjangKS" component={KeranjangKS} />

      {/* Pengajuan Kepala Sekolah */}
      <Route path="/guruMagangKS" component={GuruMagangKS} />
      <Route path="/guruTamuKS" component={GuruTamuKS} />
      <Route path="/kunjunganKS" component={KunjunganKS} />
      <Route path="/sertifikasiKS" component={SertifikasiKS} />
      <Route path="/bursaKerjaKS" component={BursaKerjaKS} />

      {/* LMS Kepala Sekolah */}
      <Route path="/lmsKS" component={LmsKS} />
      <Route path="/detailKelasKS" component={DetailKelasKS} />
      <Route path="/pesertaKS" component={PesertaKS} />
    </Switch>
  );
}

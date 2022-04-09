import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";

//call pages
// pages UTAMA
import Beranda from './pages/Beranda';
import LandingPage from './pages/LandingPage';
import Registrasi from './pages/Registrasi';
import ResetPassword from './pages/ResetPassword';
import Login from './pages/Login';

// pages INNER BERANDA
import Blog from './pages/Beranda/Blog';
import ForumDiskusi from './pages/Beranda/ForumDiskusi';
import Marketplace from './pages/Beranda/Marketplace';
import Keranjang from './pages/Beranda/Marketplace/Keranjang';
import RiwayatPembelian from './pages/Beranda/Marketplace/RiwayatPembelian';
import Pengajuan from './pages/Beranda/Pengajuan';
import Acara from './pages/Beranda/Blog/Acara';
import Tersimpan from './pages/Beranda/Blog/Tersimpan';
import GuruTamu from './pages/Beranda/Pengajuan/GuruTamu';
import GuruMagang from './pages/Beranda/Pengajuan/GuruMagang';
import Kunjungan from './pages/Beranda/Pengajuan/Kunjungan';
import Sertifikasi from './pages/Beranda/Pengajuan/Sertifikasi';
import BursaKerja from './pages/Beranda/Pengajuan/BursaKerja';
import PengajuanBursa from './pages/Beranda/Pengajuan/PengajuanBursa';

import './App.css';

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={LandingPage} />
      <Route path="/landingpage" component={LandingPage} />
      <Route path="/beranda" component={Beranda} />
      <Route path="/registrasi" component={Registrasi} />
      <Route path="/resetpassword" component={ResetPassword} />

      <Route path="/blog" component={Blog} />
      <Route path="/forumdiskusi" component={ForumDiskusi} />
      <Route path="/marketplace" component={Marketplace} />
      <Route path="/pengajuan" component={Pengajuan} />

      <Route path="/acara" component={Acara} />
      <Route path="/tersimpan" component={Tersimpan} />

      <Route path="/keranjang" component={Keranjang} />
      <Route path="/riwayatpembelian" component={RiwayatPembelian} />

      <Route path="/guruMagang" component={GuruMagang} />
      <Route path="/guruTamu" component={GuruTamu} />
      <Route path="/kunjungan" component={Kunjungan} />
      <Route path="/sertifikasi" component={Sertifikasi} />
      <Route path="/bursaKerja" component={BursaKerja} />
      <Route path="/pengajuanBursa" component={PengajuanBursa} />
    </Switch>
  );
}

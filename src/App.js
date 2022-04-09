import React from 'react';
import { Route } from 'react-router-dom';
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
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/landingpage" element={<LandingPage />} />
      <Route path="/beranda" element={<Beranda />} />
      <Route path="/registrasi" element={<Registrasi />} />
      <Route path="/resetpassword" element={<ResetPassword />} />

      <Route path="/blog" element={<Blog />} />
      <Route path="/forumdiskusi" element={<ForumDiskusi />} />
      <Route path="/marketplace" element={<Marketplace />} />
      <Route path="/pengajuan" element={<Pengajuan />} />

      <Route path="/acara" element={<Acara />} />
      <Route path="/tersimpan" element={<Tersimpan />} />

      <Route path="/keranjang" element={<Keranjang />} />
      <Route path="/riwayatpembelian" element={<RiwayatPembelian />} />

      <Route path="/guruMagang" element={<GuruMagang />} />
      <Route path="/guruTamu" element={<GuruTamu />} />
      <Route path="/kunjungan" element={<Kunjungan />} />
      <Route path="/sertifikasi" element={<Sertifikasi />} />
      <Route path="/bursaKerja" element={<BursaKerja />} />
      <Route path="/pengajuanBursa" element={<PengajuanBursa />} />
    </Routes>
  );
}

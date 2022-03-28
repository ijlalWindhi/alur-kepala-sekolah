// inisasi library default
import React, { useState, useEffect } from "react";
// inisiasi component
import Item from "../../../../assets/item.svg"

export default function SummaryCard({ handleAction }) {
  return (
    <div class="p-6 card bg-white rounded-3xl">
        <h4 className="text-lg font-medium text-red-600">Rp2.132.000,00</h4>
        <span className="font-normal text-base">Riwayat Pembayaran</span>
    </div>
  );
}

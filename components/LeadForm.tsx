"use client";

import { useState } from "react";
import { WA_NUMBER } from "../lib/data";

export default function LeadForm() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text =
      "Halo Bramverse, saya " +
      nama +
      " (" +
      email +
      ").\nKebutuhan: " +
      pesan;
    window.open(
      "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text),
      "_blank",
    );
  }

  return (
    <form onSubmit={onSubmit} className="field">
      <label>
        Nama
        <input
          required
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          placeholder="Nama lengkap Anda"
        />
      </label>
      <label>
        Email
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@contoh.com"
        />
      </label>
      <label>
        Pesan
        <textarea
          required
          value={pesan}
          onChange={(e) => setPesan(e.target.value)}
          placeholder="Ceritakan project atau kebutuhan Anda..."
        />
      </label>
      <button
        className="btn btn-light"
        type="submit"
        style={{ width: "100%", marginTop: 18 }}
      >
        Kirim Pesan
      </button>
    </form>
  );
}

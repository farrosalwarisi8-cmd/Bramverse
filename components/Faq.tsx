"use client";

import { useState } from "react";

const faqs = [
  {
    q: 'Apa itu program "Coba Dulu, Percaya Kemudian"?',
    a: "Kamu bisa menilai hasil kerja kami tahap demi tahap sebelum pelunasan. Kalau belum sesuai ekspektasi, kami benahi dulu sampai layak jalan, tanpa drama.",
  },
  {
    q: "Berapa lama waktu pengerjaan?",
    a: "Company profile 7-14 hari, toko online 21-28 hari, aplikasi dan sistem custom 30-60 hari tergantung kompleksitas. Timeline tertulis kami berikan sebelum DP.",
  },
  {
    q: "Bagaimana sistem pembayaran di Bramverse?",
    a: "DP 50% untuk mulai, pelunasan setelah serah terima dan revisi selesai. Untuk enterprise bisa termin 30/40/30 dengan kontrak dan invoice resmi.",
  },
  {
    q: "Apakah layanan bisa disesuaikan dengan bisnis saya?",
    a: "100% bisa. Semua solusi kami rancang custom mengikuti kebutuhan, skala, dan alur kerja bisnismu, bukan template satu ukuran untuk semua.",
  },
  {
    q: "Apa yang perlu saya siapkan sebelum mulai?",
    a: "Cukup ceritakan kebutuhan dan tujuan bisnismu. Kalau ada logo, foto produk, atau referensi desain, kirimkan saja. Sisanya tim kami yang merapikan.",
  },
  {
    q: "Apakah ada maintenance setelah project selesai?",
    a: "Ya, ada garansi bug 30 hari plus opsi maintenance bulanan: monitoring, backup, security patch, dan optimasi performa.",
  },
  {
    q: "Apakah ada garansi revisi?",
    a: "Ada. Setiap paket sudah termasuk revisi desain dan penyesuaian fungsional sesuai kesepakatan awal sampai hasilnya benar-benar pas.",
  },
  {
    q: "Bagaimana cara memulai kerja sama?",
    a: "Chat WhatsApp atau isi form kontak untuk konsultasi gratis 30 menit. Kami balas maksimal 1x24 jam lengkap dengan estimasi.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className="faq-item reveal" key={f.q}>
          <button
            type="button"
            className="faq-q"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <span style={{ flex: 1 }}>{f.q}</span>
            <span>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="faq-a">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}

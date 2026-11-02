"use client";

import { useMemo, useState } from "react";
import {
  desainOptions,
  fiturOptions,
  rupiah,
  tipeOptions,
  WA_NUMBER,
} from "../lib/data";

export default function Simulator() {
  const [tipe, setTipe] = useState(tipeOptions[0].label);
  const [desain, setDesain] = useState(desainOptions[1].label);
  const [fitur, setFitur] = useState<string[]>([]);

  const total = useMemo(() => {
    const t = tipeOptions.find((o) => o.label === tipe) ?? tipeOptions[0];
    const d = desainOptions.find((o) => o.label === desain) ?? desainOptions[0];
    const fs = fiturOptions.filter((o) => fitur.includes(o.label));
    const harga = t.harga + d.harga + fs.reduce((a, o) => a + o.harga, 0);
    const hari = t.hari + d.hari + fs.reduce((a, o) => a + o.hari, 0);
    return { harga, hari };
  }, [tipe, desain, fitur]);

  function toggleFitur(label: string) {
    setFitur((prev) =>
      prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label],
    );
  }

  const waHref =
    "https://wa.me/" +
    WA_NUMBER +
    "?text=" +
    encodeURIComponent(
      "Halo Bramverse, saya sudah simulasi di website:\nTipe: " +
        tipe +
        "\nFitur: " +
        (fitur.join(", ") || "standar") +
        "\nDesain: " +
        desain +
        "\nEstimasi: " +
        rupiah(total.harga) +
        " / " +
        total.hari +
        " hari\nMinta penawaran resmi ya.",
    );

  return (
    <div className="builder">
      <div className="kicker" style={{ textAlign: "left" }}>
        Simulator kebutuhan
      </div>
      <h3 style={{ fontSize: 26 }}>Susun kebutuhanmu, lihat estimasinya.</h3>
      <p style={{ color: "var(--muted)", fontSize: 15, margin: "8px 0 0" }}>
        Klik opsi di bawah, estimasi waktu dan biaya langsung muncul.
      </p>

      <div className="opt-title">1. Tipe project</div>
      <div className="pills">
        {tipeOptions.map((o) => (
          <button
            key={o.label}
            type="button"
            className={"pill" + (tipe === o.label ? " active" : "")}
            onClick={() => setTipe(o.label)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="opt-title">2. Fitur tambahan</div>
      <div className="pills">
        {fiturOptions.map((o) => (
          <button
            key={o.label}
            type="button"
            className={"pill" + (fitur.includes(o.label) ? " active" : "")}
            onClick={() => toggleFitur(o.label)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="opt-title">3. Level desain</div>
      <div className="pills">
        {desainOptions.map((o) => (
          <button
            key={o.label}
            type="button"
            className={"pill" + (desain === o.label ? " active" : "")}
            onClick={() => setDesain(o.label)}
          >
            {o.label}
          </button>
        ))}
      </div>

      <div className="result">
        <div>
          <b>{rupiah(total.harga)}</b>
          <span>Estimasi investasi</span>
        </div>
        <div>
          <b>{total.hari} hari</b>
          <span>Estimasi pengerjaan</span>
        </div>
        <div>
          <b>Gratis</b>
          <span>Konsultasi dan revisi</span>
        </div>
      </div>
      <a
        href={waHref}
        target="_blank"
        className="btn btn-light"
        style={{ width: "100%", marginTop: 18 }}
      >
        Kirim konfigurasi ini via WhatsApp
      </a>
    </div>
  );
}

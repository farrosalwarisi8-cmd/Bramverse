"use client";

import { useState } from "react";
import { works } from "../lib/data";

const filters = [
  { key: "all", label: "Semua" },
  { key: "web", label: "Website" },
  { key: "toko", label: "E-commerce" },
  { key: "app", label: "Aplikasi" },
  { key: "sistem", label: "Sistem" },
] as const;

export default function Portfolio() {
  const [active, setActive] = useState<string>("all");
  const list = works.filter((w) => active === "all" || w.cat === active);

  return (
    <>
      <div className="tabs reveal">
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={"tab-btn" + (active === f.key ? " active" : "")}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="works">
        {list.map((w) => (
          <div className="work reveal show" key={w.title}>
            <div className="thumb">
              <span className="glyph">{w.mark}</span>
              <small>{w.label}</small>
            </div>
            <div className="work-body">
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <div className="tags">
                {w.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

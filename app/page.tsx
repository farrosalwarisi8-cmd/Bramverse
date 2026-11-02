import Faq from "../components/Faq";
import LeadForm from "../components/LeadForm";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Reveal from "../components/Reveal";
import Simulator from "../components/Simulator";
import { WA_NUMBER } from "../lib/data";

const waGeneral =
  "https://wa.me/" +
  WA_NUMBER +
  "?text=" +
  encodeURIComponent(
    "Halo Admin Bramverse, saya mau konsultasi dan negosiasi project. Boleh dibantu estimasinya?"
  );

const ADMIN_DISPLAY = "+62 852-8033-6263";
const ADMIN_TEL = "tel:+6285280336263";

export default function Home() {
  return (
    <>
      <Reveal />
      <Navbar />

      <header className="hero" id="home">
        <div className="hero-frame" />
        <div className="hero-beams" />
        <div className="wrap hero-inner">
          <span className="pill-top">
            <i /> Bramverse Studio - Jakarta
          </span>
          <h1>
            Software <span className="serif shine">custom</span> yang dibangun
            mengikuti cara kerja bisnismu.
          </h1>
          <p className="lead">
            Bramverse adalah studio jasa koding. Kami merancang website,
            aplikasi, dan sistem dari nol: rapi, cepat, aman, dan siap
            dikembangkan jangka panjang.
          </p>
          <div className="hero-cta">
            <a href={waGeneral} target="_blank" className="btn btn-light">
              Konsultasi via WhatsApp
            </a>
            <a href="#portfolio" className="btn btn-ghost">
              Lihat Karya Kami
            </a>
          </div>
          <div className="hero-proof">
            <div className="avatars">
              <span>BA</span>
              <span>RP</span>
              <span>SN</span>
              <span>+</span>
            </div>
            <span className="stars">★★★★★</span>
            <span>Dipercaya 120+ klien di seluruh Indonesia</span>
          </div>
          <div className="stats">
            <div>
              <b>120+</b>
              <span>Project selesai</span>
            </div>
            <div>
              <b>98%</b>
              <span>Klien puas</span>
            </div>
            <div>
              <b>14 hari</b>
              <span>Rata-rata MVP</span>
            </div>
            <div>
              <b>30 hari</b>
              <span>Garansi bug</span>
            </div>
          </div>
        </div>
      </header>

      <div className="strip">
        <div className="wrap strip-inner">
          <span>
            <b>Website</b> Company Profile
          </span>
          <span>
            <b>Toko</b> Online
          </span>
          <span>
            <b>Aplikasi</b> Mobile
          </span>
          <span>
            <b>Sistem</b> ERP / CRM
          </span>
          <span>
            <b>Integrasi</b> API
          </span>
        </div>
      </div>

      <section id="layanan" className="section">
        <div className="wrap">
          <div className="kicker reveal">Layanan</div>
          <h2 className="h2 reveal">
            Satu tim untuk semua kebutuhan <span className="serif">digital</span>mu.
          </h2>
          <p className="sub reveal">
            Ceritakan kebutuhanmu. Kami terjemahkan menjadi arsitektur, desain,
            dan kode yang rapi. Semua bisa disesuaikan: fitur, alur, tampilan,
            sampai integrasi.
          </p>
          <div className="two-col">
            <div className="svc reveal">
              <span className="num">01</span>
              <span className="label">Development</span>
              <h3>Website, aplikasi, dan sistem yang solid.</h3>
              <p>
                Fondasi operasional bisnismu: cepat, aman, dan siap berkembang
                mengikuti skala usaha.
              </p>
              <div className="svc-grid">
                <div className="svc-item">
                  <b>Website Company Profile</b>
                  <p>Landing premium dengan copywriting, SEO, dan kecepatan tinggi.</p>
                </div>
                <div className="svc-item">
                  <b>Toko Online</b>
                  <p>Katalog, checkout, ongkir otomatis, dan payment gateway.</p>
                </div>
                <div className="svc-item">
                  <b>Aplikasi Mobile</b>
                  <p>Satu codebase untuk Android dan iOS, siap rilis store.</p>
                </div>
                <div className="svc-item">
                  <b>Sistem ERP / CRM</b>
                  <p>Inventory, keuangan, approval, dan laporan sesuai SOP.</p>
                </div>
              </div>
              <div className="extra-label">Termasuk</div>
              <div className="extra">
                <span>Analisa Kebutuhan</span>
                <span>Desain Figma</span>
                <span>Testing</span>
                <span>Deploy</span>
                <span>Dokumentasi</span>
              </div>
            </div>
            <div className="svc alt reveal">
              <span className="num">02</span>
              <span className="label">Cara Kerja</span>
              <h3>Mengikuti maumu, bukan memaksakan template.</h3>
              <p>
                Setiap klien punya proses berbeda. Kami mulai dari diskusi,
                bukan dari katalog.
              </p>
              <div className="svc-grid">
                <div className="svc-item">
                  <b>Diskusi dan Brief</b>
                  <p>Petakan tujuan, pengguna, dan alur bisnismu. Gratis 30 menit.</p>
                </div>
                <div className="svc-item">
                  <b>Desain Dulu</b>
                  <p>Mockup Figma 3-5 hari sebelum masuk ke development.</p>
                </div>
                <div className="svc-item">
                  <b>Build Transparan</b>
                  <p>Demo mingguan dan link staging yang bisa dicek kapan saja.</p>
                </div>
                <div className="svc-item">
                  <b>Serah Terima Beres</b>
                  <p>Source code, panduan, dan training sampai timmu mandiri.</p>
                </div>
              </div>
              <div className="extra-label">Jaminan</div>
              <div className="extra">
                <span>Garansi Revisi</span>
                <span>Source Milikmu</span>
                <span>Timeline Tertulis</span>
                <span>Garansi 30 Hari</span>
                <span>Support</span>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 20 }} className="reveal">
            <Simulator />
          </div>
        </div>
      </section>

      <section id="portfolio" className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="kicker reveal">Portofolio</div>
          <h2 className="h2 reveal">
            Hasil kerja yang disesuaikan untuk <span className="serif">klien.</span>
          </h2>
          <p className="sub reveal">
            Setiap project berangkat dari kebutuhan berbeda. Punya bayangan
            lain? Kami bangun yang baru untukmu.
          </p>
          <Portfolio />
        </div>
      </section>

      <section id="konsultasi" className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="cta-box reveal" style={{ textAlign: "center" }}>
            <div className="kicker">Konsultasi dan Negosiasi</div>
            <h2 className="h2" style={{ marginBottom: 12 }}>
              Harga mengikuti kebutuhanmu. <span className="serif">Diskusi dulu, gratis.</span>
            </h2>
            <p className="sub" style={{ marginBottom: 26 }}>
              Setiap project berbeda kompleksitasnya. Hubungi admin Bramverse
              untuk konsultasi, minta estimasi, dan negosiasi penawaran terbaik
              sesuai budgetmu.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 14,
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: "10px 10px 10px 22px",
                background: "#080808",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <span style={{ fontSize: 15, color: "var(--muted)" }}>
                Admin Bramverse
              </span>
              <a
                href={ADMIN_TEL}
                style={{ fontSize: 20, fontWeight: 700, color: "#fff" }}
              >
                {ADMIN_DISPLAY}
              </a>
              <a href={waGeneral} target="_blank" className="btn btn-light btn-sm">
                Chat Sekarang
              </a>
            </div>
            <p style={{ color: "var(--muted)", fontSize: 13.5, marginTop: 18 }}>
              Fast respon Senin sampai Jumat, 09.00 sampai 17.00 WIB. Di luar jam
              itu tetap bisa chat, dibalas secepatnya.
            </p>
          </div>
        </div>
      </section>

      <section id="lokasi" className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="kicker reveal">Lokasi</div>
          <h2 className="h2 reveal">Kunjungi Bramverse.</h2>
          <p className="sub reveal">
            Datang langsung ke studio kami, atau hubungi admin via WhatsApp
            untuk konsultasi gratis.
          </p>
          <div className="two-col">
            <div className="info-card reveal">
              <h3>Bramverse Studio</h3>
              <p style={{ color: "var(--muted)", fontSize: 14 }}>Jakarta, Indonesia</p>
              <div className="kv">
                <i>—</i>
                <div>
                  <b>Alamat</b>
                  <br />
                  <span style={{ color: "var(--muted)" }}>
                    Jakarta, Indonesia. Melayani remote seluruh Indonesia.
                  </span>
                </div>
              </div>
              <div className="kv">
                <i>—</i>
                <div>
                  <b>Jam Operasional</b>
                  <br />
                  <span style={{ color: "var(--muted)" }}>
                    Senin sampai Jumat, 09.00 sampai 17.00 WIB
                  </span>
                </div>
              </div>
              <div className="kv">
                <i>—</i>
                <div>
                  <b>Admin Bramverse</b>
                  <br />
                  <a href={ADMIN_TEL}>{ADMIN_DISPLAY}</a>
                  <br />
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>
                    Konsultasi dan negosiasi via WhatsApp
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 8 }}>
                <a href={waGeneral} target="_blank" className="btn btn-light btn-sm">
                  Chat Admin
                </a>
                <a href="#contact" className="btn btn-ghost btn-sm">
                  Isi Form Brief
                </a>
              </div>
            </div>
            <div className="info-card reveal">
              <h3>Kenapa Bramverse?</h3>
              <div className="kv">
                <i>01</i>
                <div>Kode rapi dan terdokumentasi, mudah dilanjutkan tim lain.</div>
              </div>
              <div className="kv">
                <i>02</i>
                <div>Desain mengikuti brand kamu, bukan template pasaran.</div>
              </div>
              <div className="kv">
                <i>03</i>
                <div>Garansi bug 30 hari dan training sampai timmu mandiri.</div>
              </div>
              <div
                style={{
                  marginTop: 14,
                  border: "1px solid var(--line)",
                  borderRadius: 14,
                  padding: "14px 16px",
                  fontSize: 14
                }}
              >
                Promo bulan ini: <b>free logo dan 1 tahun hosting</b> untuk 5
                project pertama. Amankan slotmu via admin.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="kicker reveal">FAQ</div>
          <h2 className="h2 reveal">Ada yang ingin ditanyakan?</h2>
          <p className="sub reveal">
            Klik untuk melihat jawabannya. Masih ragu? Chat admin kapan saja.
          </p>
          <Faq />
        </div>
      </section>

      <section id="contact" className="section" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <div className="kicker reveal">Kontak</div>
          <h2 className="h2 reveal">
            Hubungi admin untuk <span className="serif">konsultasi gratis.</span>
          </h2>
          <p className="sub reveal">
            Isi form singkat ini atau langsung chat admin di {ADMIN_DISPLAY}.
            Ceritakan kebutuhanmu, kami balas maksimal 1x24 jam dengan estimasi
            dan ruang negosiasi.
          </p>
          <div className="contact-grid">
            <div className="cta-box reveal">
              <LeadForm />
            </div>
            <div className="info-card reveal">
              <h3>Admin Bramverse</h3>
              <div className="kv">
                <i>W</i>
                <div>
                  WhatsApp Admin
                  <br />
                  <a href={waGeneral} target="_blank" style={{ fontSize: 18, fontWeight: 700 }}>
                    {ADMIN_DISPLAY}
                  </a>
                  <br />
                  <span style={{ color: "var(--muted)", fontSize: 13 }}>
                    Konsultasi, estimasi, dan negosiasi harga
                  </span>
                </div>
              </div>
              <div className="kv">
                <i>@</i>
                <div>
                  Email
                  <br />
                  <span style={{ color: "var(--muted)" }}>halo@bramverse.id</span>
                </div>
              </div>
              <div className="kv">
                <i>L</i>
                <div>
                  Lokasi
                  <br />
                  <span style={{ color: "var(--muted)" }}>
                    Jakarta, Indonesia. Remote global.
                  </span>
                </div>
              </div>
              <a
                href={waGeneral}
                target="_blank"
                className="btn btn-light"
                style={{ width: "100%", marginTop: 8 }}
              >
                Chat Admin Sekarang
              </a>
              <p style={{ color: "var(--muted)", fontSize: 13.5, textAlign: "center" }}>
                Tanpa komitmen. Gratis konsultasi 30 menit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-brand">
              <img src="/bramverse-logo.png" alt="Bramverse" />
              <p>
                Studio jasa koding. Software custom yang rapi, cepat, dan siap
                scale.
              </p>
              <div className="soc">
                <a href="#" aria-label="Instagram">IG</a>
                <a href="#" aria-label="LinkedIn">IN</a>
                <a href="#" aria-label="Dribbble">DR</a>
                <a href={waGeneral} target="_blank" aria-label="WhatsApp">WA</a>
              </div>
            </div>
            <div>
              <h4>NAVIGASI</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#layanan">Layanan</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#konsultasi">Konsultasi</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>ADMIN</h4>
              <ul>
                <li>
                  <a href={ADMIN_TEL}>{ADMIN_DISPLAY}</a>
                </li>
                <li>
                  <a href="mailto:halo@bramverse.id">halo@bramverse.id</a>
                </li>
                <li>Jakarta, Indonesia</li>
              </ul>
            </div>
            <div>
              <h4>MULAI PROJECT</h4>
              <p style={{ fontSize: 18, color: "#fff", fontWeight: 600 }}>
                Punya brief? Chat admin hari ini, estimasi keluar besok.
              </p>
              <a href={waGeneral} target="_blank" className="btn btn-light btn-sm" style={{ marginTop: 8 }}>
                Hubungi Admin
              </a>
            </div>
          </div>
          <div className="copy">
            <span>© 2026 Bramverse Studio.</span>
            <span>Jasa Website, Aplikasi, dan Sistem Custom.</span>
          </div>
        </div>
      </footer>

      <a className="wa" href={waGeneral} target="_blank" aria-label="Chat Admin">
        WA
      </a>
    </>
  );
}

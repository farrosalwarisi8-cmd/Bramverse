export type SimulatorOption = {
  label: string;
  harga: number;
  hari: number;
};

export const WA_NUMBER = "6285168616978";

export const tipeOptions: SimulatorOption[] = [
  { label: "Company Profile", harga: 4.5, hari: 14 },
  { label: "Toko Online", harga: 9, hari: 28 },
  { label: "Aplikasi Mobile", harga: 18, hari: 45 },
  { label: "ERP / Sistem Custom", harga: 25, hari: 60 },
];

export const fiturOptions: SimulatorOption[] = [
  { label: "Payment Gateway", harga: 1.5, hari: 3 },
  { label: "Login + Member", harga: 1, hari: 2 },
  { label: "Dashboard Admin", harga: 2, hari: 5 },
  { label: "Multi Bahasa", harga: 1.2, hari: 3 },
  { label: "Integrasi WA / API", harga: 2.5, hari: 7 },
  { label: "SEO Advance", harga: 0.8, hari: 2 },
];

export const desainOptions: SimulatorOption[] = [
  { label: "Clean", harga: 0, hari: 0 },
  { label: "Premium", harga: 2, hari: 5 },
  { label: "Signature + Motion", harga: 5, hari: 10 },
];

export type Work = {
  cat: string;
  label: string;
  mark: string;
  title: string;
  desc: string;
  tags: string[];
};

export const works: Work[] = [
  {
    cat: "web",
    label: "Company Profile",
    mark: "KS",
    title: "Klinik Sehat Plus",
    desc: "Profil klinik dengan booking dokter online. Kunjungan naik 3x dalam 2 bulan.",
    tags: ["Next.js", "Booking", "SEO"],
  },
  {
    cat: "web",
    label: "Company Profile",
    mark: "SR",
    title: "Sederhana Rasa",
    desc: "Menu digital QR dan reservasi meja dengan galeri yang menggugah selera.",
    tags: ["Next.js", "Reservasi", "QR Menu"],
  },
  {
    cat: "toko",
    label: "E-commerce",
    mark: "KN",
    title: "Kopi Nusantara",
    desc: "Checkout satu menit, ongkir otomatis, dan loyalty point untuk reseller.",
    tags: ["Laravel", "Midtrans", "RajaOngkir"],
  },
  {
    cat: "app",
    label: "Mobile App",
    mark: "FT",
    title: "FitTrack Coach",
    desc: "Aplikasi workout dengan video, progres harian, dan chat pelatih.",
    tags: ["Flutter", "Firebase"],
  },
  {
    cat: "sistem",
    label: "Custom System",
    mark: "LA",
    title: "Logistik ArmadaKu",
    desc: "Tracking armada, invoice otomatis, dan approval bertingkat sesuai SOP.",
    tags: ["React", "Node.js", "Maps"],
  },
  {
    cat: "sistem",
    label: "Custom System",
    mark: "SC",
    title: "SIAKAD Cendekia",
    desc: "PPDB online, e-rapor, dan pembayaran SPP terintegrasi VA bank.",
    tags: ["Laravel", "MySQL", "VA"],
  },
];

export function rupiah(jt: number): string {
  return "Rp " + jt.toFixed(1).replace(".", ",") + " jt";
}

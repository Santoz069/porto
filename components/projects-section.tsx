import { Github } from "lucide-react";

const projects = [
  {
    title: "Laporan Keuangan PD. Ekolan",
    description:
      "Aplikasi laporan keuangan berbasis web untuk PD. Ekolan dengan fitur pencatatan transaksi, laporan laba rugi, neraca, dan dashboard keuangan.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Santoz069/laporankeuangan_PDEKOLAN",
  },
  {
    title: "Nagatomi Store",
    description:
      "Platform e-commerce Nagatomi Store dengan fitur katalog produk, keranjang belanja, manajemen pesanan, dan panel admin.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Santoz069/Nagatomi_Store",
  },
  {
    title: "Sistem Kasir Sushi Teng",
    description:
      "Aplikasi kasir restoran Sushi Teng dengan fitur manajemen menu, transaksi penjualan, dan laporan harian.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Santoz069/sistemkasir_SushiTeng",
  },
  {
    title: "Voeu Studio Online",
    description:
      "Website studio online Voeu Studio dengan fitur portofolio karya, pemesanan layanan, dan galeri foto.",
    tech: ["PHP", "MySQL", "JavaScript", "CSS"],
    github: "https://github.com/Santoz069/voeustudio_online",
  },
  {
    title: "PKG Nusaputera",
    description:
      "Sistem informasi PKG (Penilaian Kinerja Guru) untuk institusi Nusaputera dengan fitur input penilaian, rekap data, dan laporan.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Santoz069/pkg_nusaputera",
  },
  {
    title: "Komputerisasi Akuntansi",
    description:
      "Aplikasi komputerisasi akuntansi dengan fitur jurnal umum, buku besar, neraca saldo, dan laporan keuangan.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    github: "https://github.com/Santoz069/komputerisasi_akuntansi",
  },
];

export function ProjectsSection() {
  return (
    <section id="projek" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Projek
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-12" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col p-6 rounded-xl bg-card border border-border 
              hover:border-[#2563eb]/40 transition-all duration-300 
              hover:shadow-lg hover:shadow-[#2563eb]/10"
            >
              <h3
                className="text-xl font-semibold text-foreground mb-2 
              group-hover:text-[#2563eb] transition-colors"
              >
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium 
                    bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm 
                  text-muted-foreground hover:text-[#2563eb] transition-colors"
                >
                  <Github size={16} />
                  GitHub Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

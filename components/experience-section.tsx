import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Developer Intern",
    company: "Proyek Kampus & Magang",
    period: "2024 - 2025",
    description:
      "Mengembangkan fitur-fitur web menggunakan Laravel dan JavaScript. Berkolaborasi dengan tim dalam pengembangan sistem informasi kampus.",
    tech: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "Mahasiswa Sistem Informasi",
    company: "Universitas Katolik Soegijapranata",
    period: "2021 - 2025",
    description:
      "Mempelajari pengembangan sistem informasi, basis data, pemrograman web, dan manajemen proyek IT. Aktif dalam berbagai proyek akademik.",
    tech: ["PHP", "HTML/CSS", "JavaScript", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="pengalaman" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Pengalaman
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-12" />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563eb] to-[#06b6d4] hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex items-start pt-1">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#2563eb]/10 border border-[#2563eb]/30 shrink-0">
                    <Briefcase size={18} className="text-[#2563eb]" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 rounded-xl bg-card border border-border hover:border-[#2563eb]/30 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <span className="text-xs text-[#06b6d4] font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[#2563eb] font-medium mb-3">
                    {exp.company}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[#2563eb]/10 text-[#2563eb] border border-[#2563eb]/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

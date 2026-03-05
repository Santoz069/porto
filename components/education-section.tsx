import { GraduationCap, School, BookOpen, Backpack } from "lucide-react";

const education = [
  {
    degree: "S1 Sistem Informasi",
    school: "Soegijapranata Catholic University",
    period: "2022 - 2026",
    description: "GPA: 3.90 / 4.00",
    icon: GraduationCap,
  },
  {
    degree: "SMA",
    school: "Sedes Sapientiae Senior High School",
    period: "2019 - 2022",
    description: "",
    icon: School,
  },
  {
    degree: "SMP",
    school: "Maria Mediatrix Junior High School",
    period: "2016 - 2019",
    description: "",
    icon: BookOpen,
  },
  {
    degree: "SD",
    school: "Nusaputera Primary School",
    period: "2010 - 2016",
    description: "",
    icon: Backpack,
  },
];

export function EducationSection() {
  return (
    <section id="edukasi" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Edukasi
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-12" />

        <div className="max-w-2xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="flex gap-4 p-5 rounded-xl bg-card border border-border 
              hover:border-[#2563eb]/40 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-[#2563eb]/10 shrink-0">
                <edu.icon size={22} className="text-[#2563eb]" />
              </div>

              <div>
                <h4 className="font-semibold text-foreground">{edu.degree}</h4>

                <p className="text-sm text-[#06b6d4]">{edu.school}</p>

                <p className="text-xs text-muted-foreground mt-1">
                  {edu.period}
                </p>

                {edu.description && (
                  <p className="text-sm font-medium text-[#10b981] mt-2">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

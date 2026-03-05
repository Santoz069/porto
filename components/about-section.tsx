import { User, Calendar, MapPin, Heart } from "lucide-react";

const stats = [
  { label: "Projek Selesai", value: "7+" },
  { label: "Teknologi Dikuasai", value: "8+" },
  { label: "Experience", value: "2+" },
  { label: "Pengalaman Magang", value: "1+" },
];

export function AboutSection() {
  return (
    <section id="tentang" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-balance">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Tentang Saya
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Halo! Saya Teng Jason Santoso, seorang fresh graduate Sistem
              Informasi dari Universitas Katolik Soegijapranata yang bersemangat
              dalam pengembangan web. Saya memiliki keahlian dalam PHP, Laravel,
              MySQL, dan JavaScript untuk membangun aplikasi web yang modern dan
              berkualitas.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <User size={18} className="text-[#2563eb]" />,
                  label: "Nama",
                  value: "Teng Jason Santoso",
                },
                {
                  icon: <Calendar size={18} className="text-[#2563eb]" />,
                  label: "Status",
                  value: "Fresh Graduate Sistem Informasi",
                },
                {
                  icon: <MapPin size={18} className="text-[#2563eb]" />,
                  label: "Lokasi",
                  value: "Semarang, Indonesia",
                },
                {
                  icon: <Heart size={18} className="text-[#2563eb]" />,
                  label: "Hobi",
                  value: "Coding, Belajar Teknologi Baru",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2563eb]/10">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-[#2563eb]/30 transition-colors text-center"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

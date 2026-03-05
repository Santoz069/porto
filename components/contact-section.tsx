"use client";

import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react";

const socials = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Santoz069",
    username: "@Santoz069",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/teng-jason-santoso-7644a4308/",
    username: "Teng Jason Santoso",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/jsnsantoz",
    username: "@jsnsantoz",
  },
];

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Kontak
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-4" />

        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Tertarik untuk berkolaborasi atau punya pertanyaan? Jangan ragu untuk
          menghubungi saya!
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Informasi Kontak
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2563eb]/10">
                  <Mail size={18} className="text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm text-foreground font-medium">
                    santozpakez07@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2563eb]/10">
                  <Phone size={18} className="text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Telepon</p>
                  <p className="text-sm text-foreground font-medium">
                    +62 822 5805 2746
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#2563eb]/10">
                  <MapPin size={18} className="text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Lokasi</p>
                  <p className="text-sm text-foreground font-medium">
                    Semarang, Indonesia
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Social Media
              </h3>

              <div className="flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary border border-border hover:border-[#2563eb]/40 hover:bg-[#2563eb]/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 rounded-xl bg-card border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Kirim Pesan
            </h3>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Nama lengkap"
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm text-muted-foreground mb-1.5">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  placeholder="Tulis pesan Anda..."
                  className="w-full px-4 py-2.5 rounded-lg bg-input border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#2563eb]/50 focus:ring-1 focus:ring-[#2563eb]/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-sm font-semibold text-white hover:opacity-90 transition-opacity"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

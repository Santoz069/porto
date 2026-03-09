import Image from "next/image";
import { Code, GraduationCap, Github, Linkedin, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-sky-700" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-4 text-center">
        {/* Avatar */}
        <div className="relative">
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-slate-700 shadow-xl">
            <Image
              src="/images/avatar.jpg"
              alt="Teng Jason Santoso"
              width={224}
              height={224}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>

          <div className="absolute top-3 right-3 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-900" />
        </div>

        {/* Name */}
        <div className="mt-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Teng Jason
            </span>
            <br />
            <span className="text-white">Santoso</span>
          </h1>
        </div>

        {/* Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 border border-slate-600 text-sm text-slate-200">
            <Code size={16} className="text-sky-400" />
            Web Developer
          </span>

          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-800/80 border border-slate-600 text-sm text-slate-200">
            <GraduationCap size={16} className="text-sky-400" />
            Information Systems Fresh Graduate
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
          Passionate web developer dan fresh graduate Sistem Informasi.
          Spesialisasi dalam{" "}
          <span className="text-sky-400 font-semibold">PHP</span>,{" "}
          <span className="text-sky-400 font-semibold">Laravel</span>,{" "}
          <span className="text-sky-400 font-semibold">MySQL</span> &{" "}
          <span className="text-sky-400 font-semibold">JavaScript</span>.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          {/* Download CV */}
          <a
            href="/cv.pdf"
            download="cv.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            <Download size={18} />
            Download CV
          </a>

          {/* Github */}
          <a
            href="https://github.com/Santoz069"
            target="_blank"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Github size={18} />
          </a>

          {/* Linkedin */}
          <a
            href="https://www.linkedin.com/in/teng-jason-santoso-7644a4308/"
            target="_blank"
            className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

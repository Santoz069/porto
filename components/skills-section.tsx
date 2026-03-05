const skillCategories = [
  {
    title: "Front-End",
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Bootstrap", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "jQuery", level: 80 },
      { name: "React.js", level: 65 },
    ],
  },
  {
    title: "Back-End",
    skills: [
      { name: "PHP", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 50 },
      { name: "REST API", level: 40 },
      { name: "CodeIgniter", level: 25 },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "XAMPP", level: 90 },
      { name: "Figma", level: 80 },
      { name: "PostgreSQL", level: 65 },
      { name: "Postman", level: 25 },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="keahlian" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] bg-clip-text text-transparent">
            Keahlian
          </span>
        </h2>

        <div className="w-16 h-1 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-12" />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl bg-card border border-border
              hover:border-[#2563eb]/40 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 text-center">
                {cat.title}
              </h3>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full 
                        bg-gradient-to-r from-[#2563eb] to-[#06b6d4]
                        transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

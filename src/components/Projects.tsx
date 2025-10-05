const projects = [
  {
    name: "Navigator",
    desc: "Hotspot Management System for MikroTik Routers (500+ daily users).",
    tech: ["React", "Node", "Tailwind"],
    github: "https://github.com/mashfiq-rayhan/Navigator"
  },
  {
    name: "InfoSysCS",
    desc: "AI-powered qualitative data analysis assistant for research workflows.",
    tech: ["Python", "React", "Next.js"],
    github: "https://github.com/mashfiq-rayhan"
  },
  {
    name: "CinePlex.live",
    desc: "Web-based movie streaming platform using TMDB API.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/mashfiq-rayhan"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((p) => (
          <div key={p.name} className="bg-gray-700 p-6 rounded shadow w-80 hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
            <p className="mb-2">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-2 justify-center">
              {p.tech.map((t) => <span key={t} className="bg-yellow-400 text-gray-900 px-2 py-1 rounded">{t}</span>)}
            </div>
            <a href={p.github} target="_blank" className="text-yellow-400 hover:underline">GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
}

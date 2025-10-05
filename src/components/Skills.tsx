const skills = [
  "JavaScript", "TypeScript", "Python",
  "React.js", "Next.js", "Tailwind CSS", "MUI",
  "Node.js", "Express.js", "Prisma", "Sequelize",
  "PostgreSQL", "MySQL", "MongoDB",
  "Git", "Docker", "Axios"
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800 text-white text-center px-4">
      <h2 className="text-4xl font-bold mb-10">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="bg-gray-700 px-4 py-2 rounded shadow hover:bg-yellow-400 hover:text-gray-900 transition">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

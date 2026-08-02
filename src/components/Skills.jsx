import SectionTitle from "./ui/SectionTitle";

const categories = [
  {
    title: "Languages",
    color: "bg-orange-100 text-orange-700",
    description: "Programming languages I use.",
    skills: ["JavaScript", "Python"],
  },
  {
    title: "Frontend",
    color: "bg-pink-100 text-pink-700",
    description: "Building responsive user interfaces.",
    skills: ["React.js", "HTML", "CSS"],
  },
  {
    title: "Backend",
    color: "bg-blue-100 text-blue-700",
    description: "Developing scalable server-side applications.",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    color: "bg-purple-100 text-purple-700",
    description: "Working with relational and NoSQL databases.",
    skills: ["PostgreSQL", "Prisma", "MongoDB"],
  },
  {
    title: "Tools",
    color: "bg-yellow-100 text-yellow-700",
    description: "Development tools & version control.",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-[#FFF8F4]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="TECH STACK"
          title="Skills & Technologies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {categories.map((category) => (

            <div
              key={category.title}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border border-orange-100"
            >

              <div
                className={`inline-block px-4 py-2 rounded-full font-semibold mb-5 ${category.color}`}
              >
                {category.title}
              </div>

              <p className="text-slate-500 text-sm leading-6 mb-6">
                {category.description}
              </p>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${category.color}`}
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;
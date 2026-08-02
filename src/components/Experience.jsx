import SectionTitle from "./ui/SectionTitle";
import { experience } from "../data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-[#FFF8F4]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          subtitle="CAREER"
          title="Experience"
        />

        <div className="relative border-l-4 border-orange-200 ml-5">

          {experience.map((job, index) => (

            <div
              key={index}
              className="relative pl-12 pb-16"
            >

              {/* Timeline Dot */}

              <div
                className={`absolute -left-[17px] top-2 w-8 h-8 rounded-full bg-gradient-to-r ${job.color} border-4 border-white shadow-lg`}
              />

              {/* Card */}

              <div className="bg-white rounded-3xl shadow-lg border border-orange-100 p-8 hover:-translate-y-2 hover:shadow-xl transition">

                <p className="text-orange-500 font-semibold">

                  {job.duration}

                </p>

                <h3 className="text-2xl font-bold text-slate-800 mt-2">

                  {job.role}

                </h3>

                <p className="text-slate-500 font-medium mt-1">

                  {job.company}

                </p>

                <ul className="mt-6 space-y-3">

                  {job.points.map((point) => (

                    <li
                      key={point}
                      className="flex gap-3 text-slate-600"
                    >

                      <span className="text-orange-500">●</span>

                      {point}

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;
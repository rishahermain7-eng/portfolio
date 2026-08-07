import {
  FaBriefcase,
  FaLaptopCode,
  FaLocationDot,
  FaBullseye,
} from "react-icons/fa6";

import SectionTitle from "./ui/SectionTitle";

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-[#FFFDFB]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <SectionTitle
          subtitle="ABOUT ME"
          title="A little about me"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              Passionate about building
              modern web applications.
            </h2>

            <p className="mt-8 text-slate-600 leading-8 text-lg">

              I'm Risha Hermain, a Full Stack Developer
              passionate about designing and developing
              clean, responsive and scalable web
              applications.

            </p>

            <p className="mt-6 text-slate-600 leading-8 text-lg">

              I enjoy transforming ideas into real-world
              products using React, Node.js,
              PostgreSQL and modern technologies while
              continuously learning and improving my
              development skills.

            </p>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transition min-h-[210px] flex flex-col">

              <FaBriefcase className="text-orange-500 text-3xl mb-5"/>

              <h3 className="font-bold text-lg sm:text-xl">
                Experience
              </h3>

              <p className="text-slate-500 mt-auto text-lg">
                2 
                Internships
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transition min-h-[210px] flex flex-col">

              <FaLaptopCode className="text-purple-500 text-3xl mb-5"/>

              <h3 className="font-bold text-lg sm:text-xl">
                Projects
              </h3>

              <p className="text-slate-500 mt-auto text-lg">
                4 
                Projects
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transition min-h-[210px] flex flex-col">

              <FaLocationDot className="text-pink-500 text-3xl mb-5"/>

              <h3 className="font-bold text-lg sm:text-xl">
                Location
              </h3>

              <p className="text-slate-500 mt-auto text-lg">
                Bengaluru
              </p>

            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:-translate-y-2 transition min-h-[210px] flex flex-col">

              <FaBullseye className="text-yellow-500 text-3xl mb-5"/>

              <h3 className="font-bold text-lg sm:text-xl">
                Current Focus
              </h3>

              <p className="text-slate-500 mt-auto text-lg leading-7">
                Full Stack Development
              </p>

            </div>

          </div>
          </div>
      </div>
    </section>
  );
}

export default About;
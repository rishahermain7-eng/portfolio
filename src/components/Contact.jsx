import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiOutlineMail,
} from "react-icons/hi";

import SectionTitle from "./ui/SectionTitle";

import resume from "../assets/resume/Risha-Hermain-Resume.pdf";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#FFFDFB]"
    >
      <div className="max-w-5xl mx-auto px-6">

        <SectionTitle
          subtitle="GET IN TOUCH"
          title="Let's Build Something Amazing Together"
        />

        <div className="bg-white rounded-[32px] shadow-xl border border-orange-100 p-12">

          <p className="text-center text-slate-600 text-lg leading-8 max-w-3xl mx-auto">

            I'm currently open to Software Developer roles,
            internships and exciting opportunities.
            Whether you have a project, collaboration or
            just want to connect, I'd love to hear from you.

          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-14">

            {/* Email */}

            <div className="rounded-3xl bg-orange-50 p-8 text-center hover:-translate-y-2 transition-all duration-300">

              <HiOutlineMail
                className="mx-auto text-4xl text-orange-500"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                Email
              </h3>

              <p className="mt-3 text-slate-600">
                rishahermain39@gmail.com
              </p>

            </div>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/risha-hermain-5a7861326"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl bg-blue-50 p-8 text-center hover:-translate-y-2 transition-all duration-300"
            >

              <FaLinkedin
                className="mx-auto text-4xl text-blue-600"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                LinkedIn
              </h3>

              <p className="mt-3 text-slate-600">
                Connect with me
              </p>

            </a>

            {/* GitHub */}

            <a
              href="https://github.com/rishahermain7-eng"
              target="_blank"
              rel="noreferrer"
              className="rounded-3xl bg-slate-100 p-8 text-center hover:-translate-y-2 transition"
            >

              <FaGithub
                className="mx-auto text-4xl text-slate-800"
              />

              <h3 className="mt-5 text-xl font-bold text-slate-800">
                GitHub
              </h3>

              <p className="mt-3 text-slate-600">
                View my repositories
              </p>

            </a>

          </div>

          {/* Resume */}

          <div className="flex justify-center mt-14">

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold hover:scale-105 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
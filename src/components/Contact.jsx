import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
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
      <div className="max-w-4xl mx-auto px-6">

        <SectionTitle
          subtitle="GET IN TOUCH"
          title="Let's Build Something Amazing Together"
        />

        <div className="bg-white rounded-[32px] shadow-xl border border-orange-100 p-8 md:p-12">

          <p className="text-center text-slate-600 text-lg leading-8 max-w-2xl mx-auto">
            I'm currently open to Software Developer roles,
            internships and exciting opportunities.
            Whether you have a project, collaboration or
            just want to connect, I'd love to hear from you.
          </p>

          <div className="mt-12 space-y-5">

            {/* Email */}

            <a
              href="mailto:rishahermain39@gmail.com"
              className="group flex items-center rounded-2xl bg-orange-50 hover:bg-orange-100 p-5 sm:p-6 transition-all duration-300"
            >

              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <HiOutlineMail className="text-2xl sm:text-3xl text-orange-500" />

              </div>

              <div className="ml-4 sm:ml-5 flex-1 min-w-0">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Email
                </h3>

                <p className="text-slate-600 text-sm sm:text-base truncate">
                  rishahermain39@gmail.com
                </p>

              </div>

              <div className="ml-2 shrink-0">

                <FaArrowRight className="text-xl sm:text-2xl text-orange-500 group-hover:translate-x-2 transition" />

              </div>

            </a>

            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/risha-hermain-5a7861326"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-2xl bg-blue-50 hover:bg-blue-100 p-5 sm:p-6 transition-all duration-300"
            >

              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <FaLinkedin className="text-2xl sm:text-3xl text-blue-600" />

              </div>

              <div className="ml-4 sm:ml-5 flex-1 min-w-0">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  LinkedIn
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  Connect with me
                </p>

              </div>

              <div className="ml-2 shrink-0">

                <FaArrowRight className="text-xl sm:text-2xl text-blue-600 group-hover:translate-x-2 transition" />

              </div>

            </a>

            {/* GitHub */}

            <a
              href="https://github.com/rishahermain7-eng"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-2xl bg-slate-100 hover:bg-slate-200 p-5 sm:p-6 transition-all duration-300"
            >

              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <FaGithub className="text-2xl sm:text-3xl text-slate-800" />

              </div>

              <div className="ml-4 sm:ml-5 flex-1 min-w-0">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  GitHub
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  View my repositories
                </p>

              </div>

              <div className="ml-2 shrink-0">

                <FaArrowRight className="text-xl sm:text-2xl text-slate-700 group-hover:translate-x-2 transition" />

              </div>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
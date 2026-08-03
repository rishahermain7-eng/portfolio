import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiOutlineMail,
} from "react-icons/hi";

import SectionTitle from "./ui/SectionTitle";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-[#FFFDFB]"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">

        <SectionTitle
          subtitle="GET IN TOUCH"
          title="Let's Build Something Amazing Together"
        />

        <div className="bg-white rounded-[32px] shadow-xl border border-orange-100 p-6 sm:p-8 lg:p-12">

          <p className="text-center text-slate-600 text-base sm:text-lg leading-8 max-w-2xl mx-auto">
            I'm currently open to Software Developer roles,
            internships and exciting opportunities.
            Whether you have a project, collaboration or
            just want to connect, I'd love to hear from you.
          </p>

          <div className="mt-12 space-y-5">

            {/* EMAIL */}

            <a
              href="mailto:rishahermain39@gmail.com"
              className="group flex items-center rounded-2xl bg-orange-50 hover:bg-orange-100 transition-all duration-300 p-4 sm:p-6"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <HiOutlineMail className="text-2xl sm:text-3xl text-orange-500"/>

              </div>

              <div className="ml-4 sm:ml-5 flex-1 min-w-0">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  Email
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm md:text-base break-all leading-5">
                  rishahermain39@gmail.com
                </p>

              </div>

            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/risha-hermain-5a7861326"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 p-4 sm:p-6"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <FaLinkedin className="text-2xl sm:text-3xl text-blue-600"/>

              </div>

              <div className="ml-4 sm:ml-5 flex-1">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  LinkedIn
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  Connect with me
                </p>

              </div>

            </a>

            {/* GITHUB */}

            <a
              href="https://github.com/rishahermain7-eng"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-2xl bg-slate-100 hover:bg-slate-200 transition-all duration-300 p-4 sm:p-6"
            >

              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-white shadow-md flex items-center justify-center shrink-0">

                <FaGithub className="text-2xl sm:text-3xl text-slate-800"/>

              </div>

              <div className="ml-4 sm:ml-5 flex-1">

                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                  GitHub
                </h3>

                <p className="text-slate-600 text-sm sm:text-base">
                  View my repositories
                </p>

              </div>

            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
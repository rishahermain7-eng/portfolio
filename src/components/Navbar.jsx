import { FaGithub, FaLinkedin } from "react-icons/fa";

import resume from "../assets/resume/RishaHermain.Resume.pdf";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#hero"
          className="flex items-center gap-4"
        >

          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-400 shadow-lg">

            <span className="text-white font-bold font-mono text-lg">
              {"<RH />"}
            </span>

          </div>

          <div>

            <h2 className="font-bold text-slate-800 text-lg">
              Risha Hermain
            </h2>

            <p className="text-xs text-slate-500">
              Full Stack Developer
            </p>

          </div>

        </a>

        {/* Navigation */}

        <nav className="hidden lg:flex gap-10 font-medium text-slate-700">

          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="#skills" className="hover:text-orange-500 transition">
            Skills
          </a>

          <a href="#experience" className="hover:text-orange-500 transition">
            Experience
          </a>

          <a href="#projects" className="hover:text-orange-500 transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/rishahermain7-eng"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 hover:text-orange-500 transition"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/risha-hermain-5a7861326"
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 hover:text-orange-500 transition"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href={resume}
            target="_blank"
            className="hidden md:block px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 text-white font-medium hover:scale-105 transition"
          >
            Resume
          </a>

        </div>

      </div>

    </header>
  );
}

export default Navbar;
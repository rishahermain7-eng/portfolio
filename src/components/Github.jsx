import SectionTitle from "./ui/SectionTitle";
import { FaGithub } from "react-icons/fa";

function Github() {
  return (
    <section id="github" className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">

        <SectionTitle
          subtitle="Open Source"
          title="GitHub"
        />

        <div className="bg-slate-800 rounded-3xl p-10 border border-slate-700 text-center">

          <FaGithub
            size={70}
            className="mx-auto mb-6"
          />

          <h3 className="text-3xl font-bold">
            GitHub Profile
          </h3>

          <p className="text-slate-400 mt-4">
            Explore my repositories, projects and contributions.
          </p>

          <a
            href="https://github.com/rishahermain7-eng"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition"
          >
            Visit GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Github;
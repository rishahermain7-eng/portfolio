import { useEffect, useRef, useState } from "react";
import SectionTitle from "./ui/SectionTitle";
import { projects } from "../data/projects";

// Virtual viewport the demo site is rendered at inside the iframe.
// Widening this (rather than the site's real breakpoint) makes the page
// lay out more compactly, so scaling it down to fit the card shows more
// of the page — nav, hero, more rows — instead of cropping mid-row.
const PREVIEW_WIDTH = 1440;
const PREVIEW_HEIGHT = 1400;

// Fixed visible height of the live preview window. Cards can be whatever
// size they end up being — this just needs to be tall enough that the
// demo site looks properly fitted in the frame rather than cut off
// mid-page.
const PREVIEW_BOX_HEIGHT = 460;

function LivePreview({ project }) {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(0.41);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScale = () => {
      const containerWidth = el.offsetWidth;
      const newScale = containerWidth / PREVIEW_WIDTH;
      setScale(newScale);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    // Total height fixed at PREVIEW_BOX_HEIGHT (matches Prototype card's
    // h-72 box) — the chrome bar takes its natural height and the iframe
    // area below fills the rest, so the two card types line up exactly.
    <div
      className="overflow-hidden flex flex-col"
      style={{ height: PREVIEW_BOX_HEIGHT }}
    >
      {/* Browser */}
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-400"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
        <div className="w-3 h-3 rounded-full bg-green-400"></div>
        <span className="ml-4 text-sm text-slate-500">Live Preview</span>
      </div>

      {/* This div's width drives the scale — no fixed pixel width here.
          flex-1 fills whatever height remains after the chrome bar above;
          overflow-hidden crops whatever extends past that. */}
      <div ref={containerRef} className="overflow-hidden flex-1 min-h-0">
        <iframe
          src={project.demo}
          title={project.title}
          className="border-0"
          style={{
            width: PREVIEW_WIDTH,
            height: PREVIEW_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        />
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#FFFDFB]">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="MY WORK" title="Featured Projects" />

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-orange-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Preview */}
              {project.status === "Live" ? (
                <LivePreview project={project} />
              ) : (
                <div className="h-72 flex items-center justify-center bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
                  <div className="text-center">
                    <div className="text-6xl mb-5">
                      {project.title === "MindEase AI" ? "🤖" : "🎓"}
                    </div>
                    <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-semibold">
                      Prototype
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-5 ${
                    project.status === "Live"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {project.status}
                </span>

                <h3 className="text-2xl font-bold text-slate-800">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-400 to-pink-500 text-white font-medium hover:scale-105 transition"
                    >
                      GitHub
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 rounded-xl border-2 border-orange-300 text-slate-700 hover:bg-orange-50 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
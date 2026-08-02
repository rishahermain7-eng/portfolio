function Footer() {
  return (
    <footer className="bg-[#FFF8F4] border-t border-orange-100 py-10">

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">

          <div className="px-4 py-2 rounded-2xl bg-gradient-to-r from-orange-400 to-pink-500">

            <span className="text-white font-bold font-mono">
              {"<RH />"}
            </span>

          </div>

          <div>

            <h3 className="font-bold text-slate-800">
              Risha Hermain
            </h3>

            <p className="text-slate-500 text-sm">
              Full Stack Developer
            </p>

          </div>

        </div>

        <p className="text-slate-500 text-sm text-center">
          © 2026 Risha Hermain. Designed & Developed with React and Tailwind CSS.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
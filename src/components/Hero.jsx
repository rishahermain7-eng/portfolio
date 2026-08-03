import avatar from "../assets/images/avatar.png";
import Button from "./ui/Button";
import resume from "../assets/resume/Risha-Hermain-Resume.pdf";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-24"
      style={{
        background:
          "linear-gradient(135deg,#FFF8F4 0%,#FFF4EC 55%,#FDF6FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 border border-green-200 mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-green-700 font-medium text-sm">
              OPEN TO OPPORTUNITIES
            </span>

          </div>

          <p className="text-orange-500 text-xl font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight text-slate-900">
            Risha Hermain
          </h1>

          <h2 className="text-2xl lg:text-3xl mt-6 text-slate-700">
            Full Stack Developer
          </h2>

          <p className="text-slate-600 leading-9 text-lg mt-8 max-w-xl">
            Building production-ready web applications using
            React, Node.js, PostgreSQL, REST APIs and modern
            web technologies.
          </p>

          <div className="flex flex-wrap gap-5 mt-10">

            <Button
              href={resume}
              target="_blank"
            >
              My Resume
            </Button>

            <Button
              href="#projects"
              variant="secondary"
            >
              View Projects
            </Button>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center mt-10 lg:mt-0">

          {/* Glow */}
          <div className="absolute w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] lg:w-[430px] lg:h-[430px]
                          rounded-full bg-orange-200 blur-[90px] lg:blur-[110px] opacity-40">
          </div>

          {/* Speech Bubble — made smaller/lighter so it doesn't compete with the avatar */}
          <div
            className="
              absolute
              top-1 left-1
              sm:top-2 sm:left-2
              lg:top-4 lg:left-0
              bg-white
              rounded-2xl
              shadow-lg
              border border-orange-100
              px-3 py-2.5
              sm:px-4 sm:py-3
              max-w-[160px]
              sm:max-w-[190px]
              z-20
            "
          >

            <h3 className="text-sm sm:text-base font-bold">
              Hello! 👋
            </h3>

            <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-5">
              Let's explore
              <br />
              my portfolio.
            </p>

            <div className="absolute bottom-[-6px] left-8 w-3.5 h-3.5 bg-white rotate-45 border-r border-b border-orange-100"></div>

          </div>

          {/* Avatar — enlarged across all breakpoints */}

          <img
              src={avatar}
              alt=""
              className="
              relative z-10
              w-[320px]
              sm:w-[420px]
              md:w-[500px]
              lg:w-[620px]
              xl:w-[700px]
              object-contain
              "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
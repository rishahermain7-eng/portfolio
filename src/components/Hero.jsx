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

        <div className="relative flex justify-center items-center">

          {/* Glow */}

          <div className="absolute w-[260px] h-[260px] md:w-[430px] md:h-[430px] rounded-full bg-orange-200 blur-[90px] md:blur-[110px] opacity-40"></div>

          {/* Speech Bubble */}

          <div
            className="
            absolute
            top-0
            left-2
            md:top-5
            md:left-0
            bg-white
            rounded-2xl
            md:rounded-3xl
            shadow-xl
            border
            border-orange-100
            px-4
            py-3
            md:px-7
            md:py-5
            z-20
            max-w-[165px]
            md:max-w-[220px]
          "
          >

            <h3 className="text-xl md:text-2xl font-bold text-slate-800">
              Hello! 👋
            </h3>

            <p className="text-sm md:text-base text-slate-500 mt-2 leading-6">
              Let's explore
              <br />
              my portfolio.
            </p>

            <div className="absolute bottom-[-8px] left-8 md:left-10 w-4 h-4 md:w-5 md:h-5 bg-white rotate-45 border-r border-b border-orange-100"></div>

          </div>

          {/* Avatar */}

          <img
            src={avatar}
            alt="Developer Avatar"
            className="
              relative
              z-10
              w-[280px]
              sm:w-[340px]
              md:w-[450px]
              lg:w-[520px]
              xl:w-[600px]
              object-contain
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
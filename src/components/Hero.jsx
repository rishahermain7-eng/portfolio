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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-green-50 border border-green-200 mb-8">

            <div className="w-3 h-3 rounded-full bg-green-500"></div>

            <span className="text-green-700 font-medium text-sm">
              OPEN TO OPPORTUNITIES
            </span>

          </div>

          <p className="text-orange-500 text-lg sm:text-xl font-medium">
            Hello, I'm
          </p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-4 leading-tight text-slate-900">
            Risha Hermain
          </h1>

          <h2 className="text-2xl sm:text-3xl mt-6 text-slate-700">
            Full Stack Developer
          </h2>

          <p className="text-slate-600 leading-8 text-base sm:text-lg mt-8 max-w-xl">
            Building production-ready web applications using
            React, Node.js, PostgreSQL, REST APIs and modern
            web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 mt-10">

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

        <div className="relative flex justify-center items-center mt-10 lg:mt-0 overflow-visible">

          {/* Glow */}

          <div className="absolute w-[300px] h-[300px] sm:w-[430px] sm:h-[430px] lg:w-[560px] lg:h-[560px] rounded-full bg-orange-200 blur-[100px] lg:blur-[130px] opacity-40"></div>

          {/* Speech Bubble */}

          <div
            className="
              absolute
              z-20

              top-6
              left-2

              sm:top-8
              sm:left-4

              lg:top-10
              lg:left-2

              bg-white
              rounded-3xl
              shadow-xl
              border
              border-orange-100

              px-5
              py-4

              sm:px-6
              sm:py-5

              max-w-[170px]
              sm:max-w-[190px]
              lg:max-w-[220px]
            "
          >

            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              Hello! 👋
            </h3>

            <p className="text-sm sm:text-base text-slate-500 mt-2 leading-6">
              Let's explore
              <br />
              my portfolio.
            </p>

            <div className="absolute bottom-[-8px] left-10 w-5 h-5 bg-white rotate-45 border-r border-b border-orange-100"></div>

          </div>

          {/* Avatar */}

          <img
            src={avatar}
            alt="Developer Avatar"
            className="
              relative
              z-10
              object-contain

              w-[340px]
              sm:w-[440px]
              lg:w-[650px]
              xl:w-[720px]

              mt-8
              lg:mt-0

              ml-12
              sm:ml-20
              lg:ml-28
            "
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
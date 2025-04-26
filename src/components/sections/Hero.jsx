import user_info from "../../data/user_info.js";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Hero() {
  return (
      <section id="hero" className="pb-16 pt-20 sm:pt-24 md:pt-32 flex px-6 lg:px-24">
        <div className="self-center w-full">
          <div className="hs-tooltip [--placement:right] w-20 hs-tooltip-toggle mb-6 lg:hidden">
            <img
                src={user_info.main.photo}
                className="rounded-full w-20 h-20 object-cover"
                alt={`${user_info.main.name} Profile Picture`}
            />
            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity absolute invisible z-10 py-1 px-2 bg-white border dark:border-zinc-800 dark:bg-zinc-950 text-xs font-medium text-zinc-950 dark:text-white rounded shadow-sm" role="tooltip">
            Hello! 👋 How are you doing? 🤔
          </span>
          </div>
          <div className="flex flex-col md:flex-row gap-6 md:gap-2 align-items-start md:align-items-center">
            <div className="text-zinc-900 dark:text-zinc-100 self-start md:self-center md:w-[60%] lg:w-[80%]">
              <h2 className="text-lg sm:text-xl">{user_info.main.role}</h2>
              <h1 className="font-black mt-2 text-4xl sm:text-5xl lg:text-5xl leading-tight">
                {user_info.main.name}
              </h1>
              <p className="mt-4 dark:text-zinc-300 text-base font-light leading-relaxed sm:leading-7">
                {user_info.main.description}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                    href="#projects"
                    className="px-5 py-2 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300 text-sm sm:text-base"
                >
                  Projects
                </a>
                <a
                    href="#projects"
                    className="px-5 py-2 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300 text-sm sm:text-base"
                >
                  Download CV
                </a>
                <a
                    href="#projects"
                    className="px-5 py-2 border border-black hover:bg-red-800 hover:text-white hover:border-red-800 dark:border-white font-medium transition-all duration-300 text-sm sm:text-base"
                >
                  Contact
                </a>
              </div>
              <div className="mt-6 flex gap-4">
                <a
                    href={user_info.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
                    aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                    href={user_info.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
                    aria-label="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a
                    href={user_info.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 dark:text-zinc-300 hover:text-red-800 dark:hover:text-red-500 transition-all duration-300"
                    aria-label="WhatsApp Contact"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>

            <div className="hidden md:block md:w-[40%] lg:w-[480px] self-center">
              <img
                  className="rounded-[10%] transform rotate-3 w-full h-auto object-cover"
                  src={user_info.main.photo}
                  alt={`${user_info.main.name} Profile Picture`}
              />
            </div>
          </div>
        </div>
      </section>
  );
}

export default Hero;
import user_info from "../../data/user_info.js";

import {useRef} from "react";
import emailjs from '@emailjs/browser';
import { MdEmail } from "react-icons/md";
import {FaLinkedin} from "react-icons/fa";

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form.current);

        emailjs.sendForm('service_h3ehoz1', 'template_xq23r6p', form.current, 'HMg8D1TP2MSlBDZ39')
            .then((result) => {
                window.alert("Your Message have been Received Successfully by Ajay");
            }, (error) => {
                console.log(error.text);
            });
    };
  return (
      <section id="contact" className="mt-16 pt-12 px-6 lg:px-24">
          {/* =========== TITLE =========== */}
          <h4 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">
              Let&apos;s Get in Touch:{" "}
              <span className="text-red-800 dark:text-red-500">
          Ways to Connect with Me
        </span>
          </h4>

          {/* =========== DESCRIPTION =========== */}
          <p className="mt-8 leading-7 text-base text-zinc-600 dark:text-zinc-300 font-light">
              {user_info.contact.description}
          </p>

          {/* =========== LINKS =========== */}
          <form
              onSubmit={sendEmail}
              ref={form}
              className="mt-12 grid grid-cols-1 gap-6 max-w-100"
          >
              {/* ========== NAME ========== */}
              <div className="flex flex-col">
                  <label
                      htmlFor="name"
                      className="text-zinc-700 dark:text-zinc-300 text-sm mb-2 font-medium"
                  >
                      Name
                  </label>
                  <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      placeholder="Your Name"
                  />
              </div>

              {/* ========== EMAIL ========== */}
              <div className="flex flex-col">
                  <label
                      htmlFor="email"
                      className="text-zinc-700 dark:text-zinc-300 text-sm mb-2 font-medium"
                  >
                      Email
                  </label>
                  <input
                      type="email"
                      id="email"
                      name="user_email"
                      required
                      className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      placeholder="Your Email"
                  />
              </div>

              {/* ========== MESSAGE ========== */}
              <div className="flex flex-col">
                  <label
                      htmlFor="message"
                      className="text-zinc-700 dark:text-zinc-300 text-sm mb-2 font-medium"
                  >
                      Message
                  </label>
                  <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      className="p-3 rounded-md border border-zinc-300 dark:border-zinc-700 bg-transparent text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300"
                      placeholder="Your Message"
                  ></textarea>
              </div>

              {/* ========== SUBMIT BUTTON ========== */}
              <button
                  type="submit"
                  className="mt-4 py-3 px-6 rounded-md bg-red-800 dark:bg-red-500 text-white font-semibold hover:bg-red-700 dark:hover:bg-red-400 transition-all duration-300"
              >
                  Send Message
              </button>
          </form>

          <hr className="mt-6 w-72 border dark:border-zinc-800"/>

          {/* =========== EMAIL =========== */}
          <a
              href={`mailto:${user_info.main.email}`}
              className="flex mt-6 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 gap-4 hover:text-zinc-700 transition-all duration-30"
          >
              <MdEmail className="self-center text-lg text-red-800 dark:text-red-500"/>
              <span>{user_info.main.email}</span>
          </a>

          <a
              href={user_info.socials.linkedin}
              className="flex gap-4 text-zinc-600 dark:text-zinc-300 hover:dark:text-zinc-300 hover:text-zinc-700 transition-all duration-300 mt-4"
          >
              <FaLinkedin className="self-center text-lg text-red-800 dark:text-red-500"/>
              <span className="self-center">Follow on Linkedin</span>
          </a>
      </section>
  );
}

export default Contact;

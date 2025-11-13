"use client";
import { ShootingStarsAndStarsBackgroundDemo } from "../shared/aboutBackground";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "motion/react";
import HomeBtn from "../shared/HomeBtn";
export default function ContactForm() {
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    textArea: "",
  });
  const HandelSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="h-screen relative overflow-hidden">
      <HomeBtn />
      <ShootingStarsAndStarsBackgroundDemo />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="absolute top-33 translate-x-[-50%] left-[50%] z-10 "
      >
        <form
          action=""
          onSubmit={HandelSubmit}
          className="bg-black backdrop-blur-md p-10 rounded-2xl shadow-lg my-container"
        >
          <h2 className="text-4xl font-bold text-center mb-6 text-white">
            Contact Me
          </h2>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-4">
              {" "}
              <input
                required
                name="First name"
                type="text"
                placeholder="First Name..."
                onChange={(e) => setForm({ ...form, fName: e.target.value })}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
              />
              <input
                required
                name="last name"
                type="text"
                placeholder="Last Name..."
                onChange={(e) => setForm({ ...form, lName: e.target.value })}
                className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
              />
            </div>
            <input
              required
              type="email"
              placeholder="Your Email..."
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50"
            />
            <textarea
              required
              placeholder="Your Message..."
              onChange={(e) => setForm({ ...form, textArea: e.target.value })}
              className="p-3 rounded-md bg-white/10 border border-white/20 text-white focus:outline-none focus:border-white/50 h-32"
            />
            <button
              type="submit"
              className="bg-white text-black font-semibold py-3 rounded-md hover:bg-gray-400 transition duration-600"
            >
              Send Message
            </button>
          </div>
        </form>
        <div className="bg-black text-white w-fit mx-auto mt-16 rounded-[5rem] px-4 py-4">
          <ul className="flex gap-8">
            <li>
              <a href="https://github.com/elbhhery">
                {
                  <GitHubIcon className="hover:text-neutral-400 transition! duration-300!" />
                }
              </a>{" "}
            </li>
            <li>
              <a href="https://www.linkedin.com/in/ali-soliman-2170a4246/">
                {
                  <LinkedInIcon className="hover:text-blue-400 transition! duration-300!" />
                }
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alisolimab2005@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {
                  <MailIcon className="transition! duration-300! hover:text-red-300" />
                }
              </a>
            </li>
            <li>
              <a href="https://wa.me/2001062264894?text=">
                {
                  <WhatsAppIcon className="transition! duration-300! hover:text-green-400" />
                }
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/share/17gcjkqfZd/">
                {
                  <FacebookIcon className="hover:text-blue-500 transition! duration-300!" />
                }
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_elbhhery?igsh=ejhhanNhdDY5NHpj">
                {
                  <InstagramIcon className="hover:text-violet-400 transition! duration-300!" />
                }
              </a>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

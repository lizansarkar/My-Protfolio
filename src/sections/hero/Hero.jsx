import React from "react";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";
import LetterGlitch from "../../components/ui/LetterGlitch";
import TextType from "../../components/ui/TextType";
// import { Download } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  // এনিমেশন ভ্যারিয়েন্ট - viewport { once: false } যাতে স্ক্রল করলে বারবার প্লে হয়
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#060010] py-16 md:py-20"
    >
      {/* ১. Background Layer: LetterGlitch */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <LetterGlitch
          glitchColors={["#162a21", "#28e98c", "#060010"]}
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* ২. Content Container */}
      <div className="container max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* বাম দিক: প্রোফাইল ইমেজ কার্ড */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } },
          }}
          className="flex-1 flex justify-start items-center w-full"
        >
          <div className="relative group w-full max-w-[350px] md:max-w-[480px]">
            {/* ইমেজ ব্যাকগ্রাউন্ড গ্লো */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-emerald-500/30 rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>

            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0515] shadow-2xl">
              <img
                src="/src/assets/images/profile.png"
                alt="Profile"
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/90 via-transparent to-transparent"></div>
            </div>

            {/* এক্সপেরিয়েন্স ব্যাজ (Glowing Effect) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0d0d1a] border border-primary/40 p-5 md:p-8 rounded-2xl backdrop-blur-xl z-20 shadow-[0_0_40px_rgba(40,233,140,0.3)]"
            >
              <div className="text-4xl md:text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(40,233,140,0.6)]">
                02+
              </div>
              <div className="text-[10px] md:text-xs text-white uppercase tracking-[4px] font-bold mt-2 leading-tight opacity-80">
                Years of <br /> Experience
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ডান দিক: টেক্সট কন্টেন্ট এরিয়া (বাম থেকে শুরু - items-start) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start z-20"
        >
          {/* Status Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 border border-primary/30 bg-primary/10 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              Actively Hiring
            </span>
          </motion.div>

          {/* টাইপোগ্রাফি টাইটেল (Typewriter Effect Integrated) */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-5xl xl:text-[80px] font-black leading-[0.85] tracking-tighter text-white uppercase"
          >
            Hi, I'm Lizan
            <br />
            <span className="text-primary italic relative inline-flex flex-col items-start min-h-[1.2em]">
              <TextType
                text={["Frontend Developer", "Designer", "Software Engineer"]}
                typingSpeed={80}
                pauseDuration={2000}
                deletingSpeed={40}
                showCursor={true}
                cursorCharacter="|"
                className="leading-none md:text-4xl xl:text-[60px] font-black"
              />
              {/* ডাইনামিক আন্ডারলাইন SVG */}
              <svg
                className="absolute -bottom-1 left-0 w-full opacity-60"
                viewBox="0 0 300 20"
                fill="none"
              >
                <path
                  d="M5 15C50 5 150 5 295 15"
                  stroke="#28e98c"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          {/* বিবরণ */}
          <motion.p
            variants={fadeInUp}
            className="mt-12 text-white/60 text-base md:text-xl max-w-xl font-medium leading-relaxed"
          >
            I craft high-end digital solutions that blend{" "}
            <span className="text-white border-b-2 border-primary/50">
              creative design
            </span>{" "}
            with{" "}
            <span className="text-white border-b-2 border-primary/50">
              robust engineering
            </span>
            .
          </motion.p>

          {/* বাটন গ্রুপ */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6"
          >
            {/* Resume Download Button */}
            <a
              href="/resume.pdf"
              download="Lizan_Resume.pdf"
              className="group relative flex items-center gap-4 px-8 py-5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary hover:bg-primary/5"
            >
              <div className="relative flex items-center justify-center">
                {/* Pulse Effect (টিপ টিপ করবে) */}
                <span className="absolute inline-flex h-12 w-12 rounded-full bg-primary opacity-20 animate-ping"></span>

                {/* Main Icon Circle */}
                <div className="relative z-10 w-12 h-12 rounded-full border border-primary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-300">
                  {/* <Download
                    size={20}
                    className="group-hover:-translate-y-1 transition-transform"
                  /> */}
                  <ArrowDownToLine
                    size={30}
                    className="group-hover:-translate-y-1 transition-transform"
                  ></ArrowDownToLine>
                </div>
              </div>

              {/* Text Label */}
              <div className="flex flex-col items-start">
                <span className="text-white font-black tracking-widest uppercase text-sm group-hover:text-primary transition-colors">
                  Download CV
                </span>
                <span className="text-[10px] text-white/40 uppercase tracking-[2px] font-bold">
                  PDF Format
                </span>
              </div>

              {/* Hover Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>

            {/* <button className="flex items-center gap-2 text-white/40 hover:text-white font-bold uppercase tracking-widest text-xs transition-all border-b border-transparent hover:border-white/20 pb-1">
              Hire Me
            </button> */}
          </motion.div>

          {/* সোশ্যাল মিডিয়া লিংক (ডেস্কটপে বামে এলাইন করা) */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex items-center justify-center lg:justify-start gap-10"
          >
            <span className="text-[10px] tracking-[6px] uppercase text-white/40 font-bold hidden sm:block">
              Follow My Journey
            </span>
            <div className="h-[1px] w-12 bg-white/20 hidden sm:block"></div>
            <div className="flex gap-6">
              {/* GitHub */}
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-all transform hover:scale-125 text-xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-all transform hover:scale-125 text-xl"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              {/* X (Twitter) */}
              <a
                href="https://twitter.com/your-username"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-all transform hover:scale-125 text-xl"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* সেকশন বটম ফেড আউট */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060010] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;

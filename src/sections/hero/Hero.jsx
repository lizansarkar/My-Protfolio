import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import LetterGlitch from "../../components/ui/LetterGlitch";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#060010] py-16 md:py-20">
      
      {/* ১. Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <LetterGlitch 
          glitchColors={['#162a21', '#28e98c', '#060010']} 
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* ২. Content Container - justify-between এবং সমান জায়গা বণ্টন */}
      <div className="container max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* বাম দিক: আপনার ছবি (সমান জায়গা নেওয়ার জন্য flex-1) */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0, transition: { duration: 1 } }
          }}
          className="flex-1 flex justify-start items-center w-full"
        >
          <div className="relative group w-full max-w-[350px] md:max-w-[480px]">
            {/* ছবির পেছনের ডাইনামিক গ্লো */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 to-emerald-500/30 rounded-2xl blur-xl opacity-20 group-hover:opacity-60 transition duration-700"></div>

            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-[#0a0515] shadow-2xl">
              <img 
                src="/src/assets/images/profile.png" 
                alt="Profile"
                className="w-full h-full object-cover grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060010]/90 via-transparent to-transparent"></div>
            </div>

            {/* এক্সপেরিয়েন্স কার্ড */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-[#0d0d1a] border border-primary/40 p-5 md:p-8 rounded-2xl backdrop-blur-xl z-20 shadow-[0_0_40px_rgba(40,233,140,0.3)]"
            >
              <div className="text-4xl md:text-5xl font-black text-primary drop-shadow-[0_0_15px_rgba(40,233,140,0.6)]">02+</div>
              <div className="text-[10px] md:text-xs text-white uppercase tracking-[4px] font-bold mt-2 leading-tight opacity-80">
                Years of <br/> Success
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ডান দিক: Main Content Area (সমান জায়গা নেওয়ার জন্য flex-1 এবং টেক্সট রাইট এলাইন) */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start z-20"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 px-5 py-2 mb-8 border border-primary/30 bg-primary/10 rounded-full">
             <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
             </span>
             <span className="text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
               Available for freelance
             </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 variants={fadeInUp} className="text-5xl sm:text-6xl md:text-7xl xl:text-[105px] font-black leading-[0.85] tracking-tighter text-white uppercase">
            Full Stack <br />
            <span className="text-primary italic relative inline-block">
              Developer
              <svg className="absolute -bottom-4 right-0 w-full opacity-60" viewBox="0 0 300 20" fill="none">
                <path d="M5 15C50 5 150 5 295 15" stroke="#28e98c" strokeWidth="6" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeInUp} className="mt-12 text-white/60 text-base md:text-xl max-w-xl font-medium leading-relaxed">
            I craft high-end digital solutions that blend <span className="text-white border-b-2 border-primary/50">creative design</span> with <span className="text-white border-b-2 border-primary/50">robust engineering</span>.
          </motion.p>

          {/* Action Buttons */}
          <motion.div variants={fadeInUp} className="mt-12 flex flex-wrap justify-center lg:justify-end gap-6">
            <button className="group relative px-10 py-5 bg-primary text-black font-black tracking-widest uppercase rounded-xl overflow-hidden transition-all hover:shadow-[0_0_50px_rgba(40,233,140,0.5)] active:scale-95">
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            
            <button className="px-10 py-5 border-2 border-white/10 text-white font-black tracking-widest uppercase rounded-xl hover:bg-white/10 transition-all active:scale-95">
              Contact Me
            </button>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeInUp} className="mt-16 flex items-center justify-center lg:justify-end gap-10">
            <span className="text-[10px] tracking-[6px] uppercase text-white/40 font-bold hidden sm:block">Follow My Journey</span>
            <div className="h-[1px] w-12 bg-white/20 hidden sm:block"></div>
            <div className="flex gap-6">
               <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:scale-125"><Github size={22}/></a>
               <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:scale-125"><Linkedin size={22}/></a>
               <a href="#" className="text-white/40 hover:text-primary transition-all transform hover:scale-125"><Twitter size={22}/></a>
            </div>
          </motion.div>
        </motion.div>

      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060010] to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
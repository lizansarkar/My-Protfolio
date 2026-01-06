import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react'; // আইকনগুলো ইম্পোর্ট করে নাও
import LetterGlitch from "../../components/ui/LetterGlitch";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#060010]">
      
      {/* ১. Background Layer: LetterGlitch */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <LetterGlitch 
          glitchColors={['#162a21', '#28e98c', '#060010']} 
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>

      {/* ২. Content Layer: Container */}
      <div className="container-base relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Social Vertical Bar (Unique Look) */}
        <div className="hidden lg:flex flex-col items-center gap-6 absolute -left-10">
          <a href="#" className="text-secondary hover:text-primary transition-all hover:-translate-y-1"><Github size={22}/></a>
          <a href="#" className="text-secondary hover:text-primary transition-all hover:-translate-y-1"><Linkedin size={22}/></a>
          <a href="#" className="text-secondary hover:text-primary transition-all hover:-translate-y-1"><Twitter size={22}/></a>
          <div className="w-[1px] h-20 bg-primary/30 mt-2"></div>
        </div>

        {/* Middle/Main Content */}
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 mb-6 border border-primary/20 bg-primary/5 rounded-full">
             <span className="text-primary text-[10px] md:text-xs uppercase font-bold tracking-[3px]">
               Available for freelance
             </span>
          </div>

          <h1 className="text-6xl md:text-[110px] font-black leading-[0.8] tracking-tighter text-white uppercase">
            Full Stack <br />
            <span className="text-primary italic">Developer</span>
          </h1>

          <p className="mt-8 text-muted text-lg md:text-xl max-w-xl font-medium leading-relaxed">
            I craft high-end digital solutions that blend <span className="text-white">creative design</span> with <span className="text-white">robust engineering</span>. Let's build something exceptional.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="btn btn-primary rounded-xl px-10 font-bold tracking-widest hover:shadow-[0_0_25px_rgba(40,233,140,0.4)] transition-all">
              VIEW PROJECTS
            </button>
            <button className="btn btn-outline border-white/20 text-white rounded-xl px-10 hover:bg-white/5 tracking-widest">
              CONTACT ME
            </button>
          </div>
        </div>

        {/* Right Side: Simple Badge or Stats (Optional) */}
        <div className="hidden xl:block">
           <div className="border border-white/5 bg-glass p-6 rounded-2xl backdrop-blur-md">
              <div className="text-4xl font-bold text-primary">02+</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Years of <br/> Experience</div>
           </div>
        </div>
      </div>

      {/* Bottom Fade: পরের সেকশনের সাথে মিশিয়ে দেওয়ার জন্য */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#060010] to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
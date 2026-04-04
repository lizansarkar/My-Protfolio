import React from "react";
import Stepper, { Step } from "../../components/ui/Stepper";
import { Terminal, Cpu, Rocket, Globe, ShieldUser } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 relative overflow-hidden pattern-background container-base"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container-base max-w-[1400px] mx-auto">
        {/* Section Title */}
        <div className="text-center w-full px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2 mb-8 border border-primary/30 bg-primary/10 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="inline-flex items-center gap-2 text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              <ShieldUser size={20}></ShieldUser> About Me
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          </motion.div>
        </div>

        {/* Stepper Area */}
        <div className="stepper-container">
          <Stepper nextButtonText="Next" backButtonText="Previous">
            {/* Phase 1 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Terminal size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">
                      /init journey
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    When I start
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    I first started my coding journey in 2021 when I was in
                    class 9. What started as a simple curiosity evolved into a
                    dedicated career path.First I mastered the fundamentals of
                    HTML, CSS, and core JavaScript logic.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">
                    <img src="/first-learning.jpg" alt="" className="h-full w-full" />
                  </div>
                </div>
              </div>
            </Step>

            {/* Phase 2 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Cpu size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">
                      /core development
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    Building Core Skills
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    React became the foundation of my frontend journey.
                    Alongside it, I work with Node.js, Express, and MongoDB to
                    build full-stack applications, implement authentication
                    using Firebase, and handle basic backend logic. I also use
                    Next.js for simple routing, page structure, and
                    performance-focused projects.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">
                    <img
                      src="/about2.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </Step>

            {/* Phase 3 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Globe size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">
                      experience
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    Something Experience
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    I worked as a Frontend Developer at a local agency in
                    Bangladesh, where I contributed to real client projects. My
                    role involved building responsive user interfaces using
                    React, implementing animations with Framer Motion, and
                    collaborating with designers to deliver clean, user-focused
                    web experiences.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">
                    <img
                      src="/experience.PNG"
                      alt=""
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </Step>
          </Stepper>
        </div>
      </div>
    </section>
  );
};

export default About;

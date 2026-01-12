import React from "react";
import Stepper, { Step } from "../../components/ui/Stepper";
import { Terminal, Cpu, Rocket, Globe } from "lucide-react";
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
    <section id="about" className="py-16 md:py-24 relative overflow-hidden pattern-background container-base">
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
            <span className="text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              About Me
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
                    <span className="text-xs md:text-sm font-mono opacity-50">/init journey</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    The Genesis
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    My fascination with digital creation began in 2021. What started as a simple curiosity evolved into a dedicated career path. I mastered the fundamentals of HTML, CSS, and core JavaScript logic.
                  </p>
                </div>
                {/* Image Section - Mobile-এ নিচে থাকবে */}
                <div className="order-2 w-full bg-white/5 aspect-video md:aspect-[16/9] rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">01</div>
                </div>
              </div>
            </Step>

            {/* Phase 2 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Cpu size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">/core development</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    Building Core Skills
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    The React ecosystem was my turning point. I focused on building scalable components and state management, turning complex problems into clean, reusable code.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">02</div>
                </div>
              </div>
            </Step>

            {/* Phase 3 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Globe size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">/user experience</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    Visual Storytelling
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    I believe magic is in the experience. I integrate Framer Motion and GSAP to create immersive web experiences that feel alive and responsive.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">03</div>
                </div>
              </div>
            </Step>

            {/* Phase 4 */}
            <Step>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-center text-center md:text-left">
                <div className="order-1">
                  <div className="flex items-center justify-center md:justify-start gap-4 text-primary mb-4 md:mb-6">
                    <Rocket size={28} className="md:w-8 md:h-8" />
                    <span className="text-xs md:text-sm font-mono opacity-50">/future vision</span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-bold text-white hover:text-primary inline-block mb-4 md:mb-6 transition-colors duration-300">
                    Modern Solutions
                  </h3>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    Currently, I engineer full-stack solutions with Next.js. I create digital assets that help brands grow and leave a lasting impression.
                  </p>
                </div>
                <div className="order-2 w-full bg-white/5 aspect-video rounded-2xl border border-white/10 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-primary/10 font-black text-6xl md:text-8xl">04</div>
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
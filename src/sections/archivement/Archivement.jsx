import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  ExternalLink,
  Award,
  ShieldCheck,
  Milestone,
} from "lucide-react";

const Achievement = () => {
  const documentLink =
    "https://drive.google.com/file/d/1oknxytiN55GtAKTfbDbAe9qbZJWbY_Zl/view?usp=sharing";
  const achievementImg = "/archivement.PNG";

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
      id="archivement"
      className="relative overflow-hidden pattern-background"
    >
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
        {/* Title Header */}
        <div className="text-center w-full mb-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-6 py-2 mb-8 border border-primary/30 bg-primary/10 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="inline-flex items-center gap-2 text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              <Trophy size={18} /> My Achievement
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          </motion.div>
        </div>

        {/* Enhanced Achievement Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative mx-auto"
        >
          {/* Card Border Glow */}
          <div className="-inset-[1px] from-primary/50 via-primary/10 to-primary/50 rounded-[32px] blur-sm opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-700"></div>

          <div className="rounded-[32px] overflow-hidden p-6 md:p-0">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Image Section - Takes 7 cols */}
              <div className="lg:col-span-6 relative group/img overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
                <img
                  src={achievementImg}
                  alt="Professional Achievement"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-110"
                />

                {/* Visual Overlay */}
                <div className="absolute inset-0 from-black/60 via-transparent to-primary/10 opacity-60 group-hover:opacity-30 transition-all duration-500"></div>
              </div>

              {/* Content Section - Takes 5 cols */}
              <div className="lg:col-span-5 flex flex-col space-y-6">
                <div className="flex items-center gap-3"></div>

                <h3 className="text-3xl md:text-5xl font-black text-white leading-[1.1] group-hover:text-primary transition-colors">
                  MERN Stack Excellence <br /> Certification
                </h3>

                <p className="text-white/50 text-base md:text-lg leading-relaxed font-medium">
                  Achieving this milestone validates my technical proficiency in
                  the MERN stack and modern development workflows. It marks a
                  significant step in my career, showcasing my ability to
                  deliver high-quality, scalable digital solutions.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  {[
                    {
                      icon: <Milestone size={16} />,
                      text: "Industry Standards",
                    },
                    { icon: <Award size={16} />, text: "Verified Skills" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-wider"
                    >
                      <span className="text-primary">{item.icon}</span>
                      {item.text}
                    </div>
                  ))}
                </div>

                <div className="pt-8">
                  <a
                    href={documentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-10 py-4 rounded-full text-sm font-bold transition-all duration-500 border cursor-pointer active:scale-95 inline-flex items-center gap-3 group
      bg-white/5 text-white/60 border-primary hover:bg-primary hover:text-black hover:border-primary hover:shadow-[0_0_20px_rgba(40,233,140,0.6)]`}
                  >
                    <span className="text-sm font-black uppercase tracking-[3px] transition-colors duration-500">
                      View Credentials
                    </span>
                    <ExternalLink
                      size={20}
                      className="transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Decoration */}
        <div className="mt-24 flex flex-col items-center gap-6 opacity-40">
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          <p className="text-[10px] uppercase tracking-[8px] text-white/60 font-black animate-pulse">
            Success is a Journey
          </p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;

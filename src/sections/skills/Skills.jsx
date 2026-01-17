import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

// স্কিল ডাটাবেজ - নতুন স্কিল সহ
const skillsData = [
  {
    name: "HTML",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Tailwind",
    category: "Frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/v2.16.0/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "MongoDB",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    category: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "Git",
    category: "Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    category: "Tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  // Design Tools Category
  {
    name: "Photoshop",
    category: "Design Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg",
  },
  {
    name: "Illustrator",
    category: "Design Tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-plain.svg",
  },
  {
    name: "Figma",
    category: "Design Tools",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    category: "Design Tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/canva/canva-original.svg",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("All");

  // নতুন ক্যাটাগরি সহ লিস্ট
  const categories = ["All", "Frontend", "Backend", "Tools", "Design Tools"];

  const filteredSkills =
    activeTab === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="py-16 relative overflow-hidden pattern-background"
    >
      <div className="container-base max-w-[1200px] mx-auto px-4 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2 mb-6 border border-primary/30 bg-primary/10 rounded-full">
            <Cpu size={18} className="text-primary" />
            <span className="text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              My Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white">
            My <span className="text-primary italic">Skills</span>
          </h2>
        </motion.div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-500 border cursor-pointer active:scale-95 ${
                activeTab === tab
                  ? "bg-primary text-black border-primary shadow-[0_0_20px_rgba(40,233,140,0.6)]"
                  : "bg-white/5 text-white/60 border-white/10 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="flex flex-wrap justify-center gap-5 max-w-5xl"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -5 }}
                className="group relative cursor-pointer"
              >
                {/* Enhanced Electric Glow */}
                <div className="absolute -inset-1 bg-primary rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500"></div>

                <div className="relative flex items-center gap-4 bg-[#121212]/90 border border-white/10 backdrop-blur-md px-6 py-4 rounded-2xl group-hover:border-primary/50 group-hover:shadow-[0_0_15px_rgba(40,233,140,0.2)] transition-all duration-500">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={`w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ${
                      skill.name === "Next.js" || skill.name === "GitHub"
                        ? "brightness-200"
                        : ""
                    }`}
                  />
                  <span className="text-lg font-bold text-white/70 group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Decoration */}
        <div className="mt-20 opacity-20">
          <div className="flex gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

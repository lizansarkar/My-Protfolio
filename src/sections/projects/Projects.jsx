import React from "react";
import { motion } from "framer-motion";
import { CodeXml, ExternalLink, Palette } from "lucide-react";
import ElectricBorder from "../../components/ui/ElectricBorder";

const projectsData = [
  {
    id: 1,
    title: "Easy School Management",
    category: "Web Development",
    // সবগুলোতে একই কালার কোড ব্যবহার করুন
    color: "#28e98c",
    description: "Created a role-based school management system...",
    tags: ["React", "Node.js", "TypeScript", "Multer"],
    link: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    color: "#28e98c", // একই কালার
    category: "Full Stack",
    description: "A premium shopping experience...",
    tags: ["Next.js", "Stripe", "Tailwind"],
    link: "#",
  },
  {
    id: 3,
    title: "Portfolio Design",
    color: "#28e98c", // একই কালার
    category: "UI/UX Design",
    description: "Modern portfolio with glassmorphism...",
    tags: ["React", "Framer Motion", "Tailwind"],
    link: "#",
  },
];

const Projects = () => {
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
      id="projects"
      className="py-24 relative overflow-hidden bg-[#0a0a0a] pattern-background"
    >
      {/* Background Dots/Pattern (আপনার কন্টাক্ট সেকশনের মতো) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none pattern-background"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="text-center w-full px-4 mb-3 md:mb-6">
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
             <CodeXml size={20}></CodeXml> My best project
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          </motion.div>
        </div>

        {/* Project Grid - ৩ কলাম লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <ElectricBorder
                color={project.color}
                speed={0.8}
                chaos={0.12}
                borderRadius={24}
                className="h-full"
              >
                {/* Card Interior - Glass Effect */}
                <div className="p-8 rounded-[24px] h-full flex flex-col border border-white/5">
                  {/* Icon & Link */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      <Palette size={24} strokeWidth={1.5} />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>

                  {/* Category Tag */}
                  <div className="mb-4">
                    <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] uppercase font-black tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-white/70 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

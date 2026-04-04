import React from "react";
import { motion } from "framer-motion";
import { 
  CodeXml, 
  ExternalLink, 
  GraduationCap, 
  Truck, 
  Stethoscope,
  CircleDollarSign, 
  ShoppingCart, 
  SettingsIcon
} from "lucide-react";
import ElectricBorder from "../../components/ui/ElectricBorder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import { Globe } from "lucide-react";

const projectsData = [
  {
    id: 1,
    title: "E Tuition Bd",
    category: "Mern Web App",
    color: "#28e98c",
    description: "eTuitionBd is a full-stack modern Tuition Management Platform designed for students, tutors, and administrators. The platform streamlines the entire tuition process — from posting tuition requirements, applying for tuitions, approving tutors, making secure payments, and managing all activities through a dedicated admin panel.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind", "Firebase", "Stripe Payment Gateway"],
    link: "https://e-tuition-bd-c38ed.web.app",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} style={{ fontSize: "20px" }} />
  },
  {
    id: 2,
    title: "Dourao Delivery",
    category: "Full Stack",
    color: "#28e98c",
    description: "Dourao is a modern look animated delivery platform designed to provide seamless logistics solutions. Beyond standard parcel booking, this project integrates cutting-edge features like AI-driven insights and voice-activated forms to redefine the user experience in the delivery industry.",
    tags: ["React", "Tailwind", "Express", "MongoDB", "Stripe", "Framer Motion", "firebase", "Node.js"],
    link: "https://dourao.pages.dev",
    icon: <Truck size={24} strokeWidth={1.5} />
  },
  {
    id: 3,
    title: "Coze Zentro",
    category: "Front-end",
    color: "#28e98c",
    description: "Code Zentro is a digital service–based website offering modern frontend solutions with a strong focus on performance, responsive design, and smooth user experience. The platform is built to represent professional digital services using cutting-edge web technologies. This Project Made for Skill Paradox Agency.",
    tags: ["React", "Framer Motion", "Gsap", "Tailwind", "Vite", "Leaflet", "Font Awesome"],
    link: "https://code-zentro.netlify.app",
    icon: <Globe size={24} strokeWidth={1.5} />
  },
  {
    id: 4,
    title: "Micro Earn",
    category: "Full Stack",
    color: "#28e98c",
    description: "MicroEarn is a full-stack Micro Task & Earning Platform built using the MERN Stack. The platform allows users to earn money by completing small tasks, while Buyers can create tasks and pay Workers using a coin-based system. Admins manage users, tasks, payments, and withdrawals to ensure system integrity.",
    tags: ["Tailwind", "React", "Framer Motion", "Lottie", "Firebase", "Express", "Node.js", "MongoDB"],
    link: "https://micro-earn-888f8.web.app",
    icon: <CircleDollarSign size={24} strokeWidth={1.5} />
  },
  {
    id: 5,
    title: "Care Clinic",
    category: "Full Stack",
    color: "#28e98c",
    description: "Care is a web-based caregiving service platform that helps families find reliable and trusted care services for children, elderly people, and sick family members. Users can easily browse services, book caregivers based on duration and location, and track their bookings through a secure and user-friendly system.",
    tags: ["Next.js", "Vercel", "MongoDB", "Tailwind", "React", "NextAuth.js", "Firebase", "Framer Motion"],
    link: "https://care-dun.vercel.app",
    icon: <Stethoscope size={24} strokeWidth={1.5} />
  },
  {
    id: 6,
    title: "Tech Gear",
    category: "Full Stack",
    color: "#28e98c",
    description: "TechGear is a modern, full-stack gadget showcase application built with Next.js 15 (App Router) and Express.js. This platform features a sleek dark-themed UI, dynamic product listings, and a secure dashboard for managing inventory. It leverages Tailwind CSS for styling, and Swiper.js for an interactive product carousel.",
    tags: ["Next.js", "Tailwind", "React", "Vercel", "Framer Motion", "Swiper.js", "NextAuth.js", "MongoDB"],
    link: "https://techgear-cyan.vercel.app",
    icon: <SettingsIcon size={24} strokeWidth={1.5} />
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
      {/* Background Dots/Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none pattern-background"></div>

      <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
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

        {/* Project Grid */}
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
                {/* Card Interior - Glass Effect (অক্ষত ডিজাইন) */}
                <div className="p-8 rounded-[24px] h-full flex flex-col border border-white/5">
                  {/* Icon & Link */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                      {/* ডায়নামিক আইকন এখানে রেন্ডার হচ্ছে */}
                      {project.icon}
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
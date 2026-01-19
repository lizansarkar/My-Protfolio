import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: faGithub,
      href: "https://github.com/lizansarkar",
      target: "_blank",
    },
    {
      icon: faLinkedinIn,
      href: "https://www.linkedin.com/in/lizan-sarkar-707042393/",
      target: "_blank",
    },
    {
      icon: faXTwitter,
      href: "https://x.com/LizanIslam35436",
      target: "_blank",
    },
    {
      icon: faWhatsapp,
      href: "https://wa.me/8801929562566",
      target: "_blank",
    },
    {
      icon: faEnvelope,
      href: "#contact",
      target: "_self",
    },
  ];

  return (
    <footer className="relative py-12 border-t border-white/5 bg-transparent overflow-hidden">
      {/* Background Subtle Glow - পোর্টফোলিও থিমের সাথে মিল রেখে */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] bg-primary/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto flex flex-col items-center gap-8 px-6 relative z-10">
        
        {/* Social Icons with Glassmorphism Effect */}
        <div className="flex gap-4 md:gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.target}
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/[0.03] border border-white/10 text-white/40 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Hover Glow Effect behind each icon */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-primary/20 transition-opacity rounded-xl"></div>
              
              <FontAwesomeIcon icon={social.icon} className="text-xl relative z-10" />
            </a>
          ))}
        </div>

        {/* Bottom Text - Copyright & Branding */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <p className="text-white/30 text-[10px] md:text-xs uppercase font-bold tracking-[4px] text-center">
            © {currentYear} <span className="text-white/60">Lizan Sarkar</span> — Crafted with Passion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
      href: "mailto:lizansarkar16@gmail.com",
      target: "_self",
    },
  ];

  return (
    <footer className="relative py-10 border-t border-white/5 bg-transparent overflow-hidden pattern-background">
      <div className="container-base flex flex-col md:flex-row justify-center items-center gap-6 px-6">
        <div className="flex gap-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.target}
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1"
            >
              <FontAwesomeIcon icon={social.icon} className="text-xl" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

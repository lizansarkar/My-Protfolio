import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import GooeyNav from "../ui/GooeyNav";
import { Target } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/lizansarkar", Target: "_blank" },
    { icon: faLinkedinIn, href: "https://www.linkedin.com/in/lizan-sarkar-707042393/", Target: "_blank" },
    { icon: faXTwitter, href: "https://x.com/LizanIslam35436", Target: "_blank" },
  ];

  return (
    <header className="fixed top-8 left-0 w-full z-[100] px-4">
      <nav className="relative max-w-[1400px] mx-auto">
        {/* Main Navbar Body */}
        <div className="navbar-lightning-container relative bg-black/10 backdrop-blur-sm border border-white/5 py-4 px-6 md:px-8 rounded-2xl flex justify-between items-center shadow-[0_15px_40px_rgba(0,0,0,0.4)] group transition-all duration-300">
          {/* --- LIGHTNING LAYER (Same as before) --- */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="lightning-svg overflow-visible"
            >
              <g className="bolt-group bolt-1">
                <path
                  className="bolt main-bolt"
                  d="M15 0 L20 20 L10 35 L25 60 L15 80 L30 100"
                  stroke="#28e98c"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  className="bolt core-bolt"
                  d="M15 0 L20 20 L10 35 L25 60 L15 80 L30 100"
                  stroke="white"
                  strokeWidth="0.2"
                  fill="none"
                />
              </g>
              <g className="bolt-group bolt-2">
                <path
                  className="bolt main-bolt"
                  d="M50 0 L45 25 L55 45 L40 70 L60 100"
                  stroke="#28e98c"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  className="bolt core-bolt"
                  d="M50 0 L45 25 L55 45 L40 70 L60 100"
                  stroke="white"
                  strokeWidth="0.2"
                  fill="none"
                />
              </g>
              <g className="bolt-group bolt-3">
                <path
                  className="bolt main-bolt"
                  d="M85 0 L80 30 L90 50 L75 75 L85 100"
                  stroke="#28e98c"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  className="bolt core-bolt"
                  d="M85 0 L80 30 L90 50 L75 75 L85 100"
                  stroke="white"
                  strokeWidth="0.2"
                  fill="none"
                />
              </g>
            </svg>
          </div>

          {/* Flash Effect */}
          <div className="absolute inset-0 bg-[#28e98c]/5 opacity-0 lightning-flash pointer-events-none"></div>

          {/* Social Icons (Desktop & Mobile) */}
          <div className="flex items-center gap-4 md:gap-6 relative z-10">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.Target}
                className="text-secondary/70 hover:text-primary transition-all duration-300 hover:scale-125 filter hover:drop-shadow-[0_0_15px_#28e98c]"
              >
                <FontAwesomeIcon
                  icon={social.icon}
                  className="text-lg md:text-xl"
                />
              </a>
            ))}
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:block relative z-10">
            <GooeyNav items={navLinks} />
          </div>

          {/* Mobile Menu Toggle (DaisyUI Icon) */}
          <div className="md:hidden relative z-20">
            <button
              className="text-white p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-end overflow-hidden">
                <span
                  className={`h-[2px] bg-[#28e98c] transition-all duration-300 ${
                    isOpen ? "w-6 translate-y-2 rotate-45" : "w-6"
                  }`}
                ></span>
                <span
                  className={`h-[2px] bg-[#28e98c] transition-all duration-300 ${
                    isOpen ? "opacity-0" : "w-4"
                  }`}
                ></span>
                <span
                  className={`h-[2px] bg-[#28e98c] transition-all duration-300 ${
                    isOpen ? "w-6 -translate-y-2 -rotate-45" : "w-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>

          {/* --- MOBILE GENIE MENU --- */}
          <div
            className={`absolute top-[85px] left-1/2 -translate-x-1/2 w-[100%] max-w-[400px] z-50 md:hidden transition-all duration-500 ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-top`}
          >
            <div className="bg-black/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl mobile-container">
              <GooeyNav items={navLinks} isMobile={true} />
            </div>
          </div>
        </div>
      </nav>

      {/* --- ALL CSS INCLUDED --- */}
      <style jsx>{`
        .bolt {
          stroke-dasharray: 250;
          stroke-dashoffset: 250;
          opacity: 0;
        }
        .main-bolt {
          filter: blur(1px) drop-shadow(0 0 10px #28e98c);
        }
        .branch {
          filter: blur(0.5px) drop-shadow(0 0 4px #28e98c);
        }
        .bolt-1 .bolt {
          animation: strike-1 8s infinite;
        }
        @keyframes strike-1 {
          0%,
          10% {
            stroke-dashoffset: 250;
            opacity: 0;
          }
          11% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          12% {
            opacity: 0;
          }
          13% {
            opacity: 1;
          }
          14%,
          100% {
            opacity: 0;
          }
        }
        .bolt-2 .bolt {
          animation: strike-2 8s infinite;
          animation-delay: 2.5s;
        }
        @keyframes strike-2 {
          0%,
          5% {
            stroke-dashoffset: 250;
            opacity: 0;
          }
          6% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          7% {
            opacity: 0;
          }
          8% {
            opacity: 1;
          }
          9%,
          100% {
            opacity: 0;
          }
        }
        .bolt-3 .bolt {
          animation: strike-3 8s infinite;
          animation-delay: 5.5s;
        }
        @keyframes strike-3 {
          0%,
          3% {
            stroke-dashoffset: 250;
            opacity: 0;
          }
          4% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
          5% {
            opacity: 0.5;
          }
          6% {
            opacity: 1;
          }
          7%,
          100% {
            opacity: 0;
          }
        }
        .navbar-lightning-container {
          animation: globalJitter 8s infinite;
        }
        @keyframes globalJitter {
          11%,
          31%,
          71% {
            transform: translate(0, 0);
          }
          11.2%,
          31.2%,
          71.2% {
            transform: translate(1px, -0.5px);
          }
          11.4%,
          31.4%,
          71.4% {
            transform: translate(0, 0);
          }
        }
        .lightning-flash {
          animation: globalFlash 8s infinite;
        }
        @keyframes globalFlash {
          0%,
          10.8%,
          30.8%,
          70.8% {
            opacity: 0;
          }
          11%,
          31%,
          71% {
            opacity: 1;
          }
          11.5%,
          31.5%,
          71.5% {
            opacity: 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;

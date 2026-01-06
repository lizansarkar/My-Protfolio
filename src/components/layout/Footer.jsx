import React from 'react';
import { Github, Linkedin, X, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  // বর্তমান বছর অটোমেটিক আপডেট হবে
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#060010]">
      <div className="container-base py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* বাম দিক: ব্র্যান্ডিং ও কপিরাইট */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold tracking-tighter text-white">
              PORTFOLIO<span className="text-primary">.</span>
            </h2>
            <p className="text-muted text-sm mt-2 max-w-[250px]">
              বিন্দু থেকে সিন্দু গড়ার নেশায় কোডিং এবং ডিজাইন নিয়ে কাজ করছি।
            </p>
            <p className="text-white/30 text-[12px] mt-6">
              © {currentYear} All Rights Reserved.
            </p>
          </div>

          {/* মাঝখান: কুইক কন্টাক্ট */}
          <div className="flex flex-col items-center">
            <div className="text-white/50 text-sm mb-4 tracking-[3px] uppercase">Say Hello</div>
            <a 
              href="mailto:yourname@email.com" 
              className="text-xl md:text-2xl font-medium text-white hover:text-primary transition-colors flex items-center gap-2 group"
            >
              yourname@email.com
              <Mail size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* ডান দিক: সোশ্যাল এবং স্ক্রল টু টপ */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-5">
              {[
                { icon: <Github size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <X size={18} />, href: "#" }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  className="p-3 bg-glass border border-white/5 rounded-full text-secondary hover:text-primary hover:border-primary/50 transition-all duration-300 shadow-lg"
                >
                  {item.icon}
                </a>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <button 
              onClick={scrollToTop}
              className="group flex items-center gap-2 text-xs font-bold tracking-widest text-white/50 hover:text-primary transition-colors"
            >
              BACK TO TOP 
              <span className="p-2 bg-white/5 rounded-lg group-hover:-translate-y-1 transition-transform">
                <ArrowUp size={14} />
              </span>
            </button>
          </div>

        </div>

        {/* নিচের সরু দাগ (Subtle Divider) */}
        <div className="mt-12 h-[1px] w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;
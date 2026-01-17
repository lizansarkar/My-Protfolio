import React, { useRef, useState } from "react";
// EmailJS ব্যবহারের জন্য নিচের লাইনটি আন-কমেন্ট করুন
// import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import ElectricBorder from "../../components/ui/ElectricBorder";
// import ElectricBorder from "./ElectricBorder";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    /* ===========================================================
    EMAILJS IMPLEMENTATION
    =========================================================== */
    // ডেমো ইফেক্ট (ইমেলজেএস সেট করলে এটি সরিয়ে দেবেন)
    setTimeout(() => {
      setIsSending(false);
      console.log("Form is ready to send via EmailJS");
    }, 2000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden pattern-background">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container-base max-w-[1400px] px-4 relative z-10">
        <div className="text-center w-full px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="inline-flex items-center gap-3 px-5 py-2 mb-12 border border-primary/30 bg-primary/10 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            <span className="inline-flex py-1 items-center gap-2 text-primary text-[10px] md:text-xs uppercase font-black tracking-[4px]">
              <Mail size={20} /> Contact
            </span>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* বাম দিক (Contact Info) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-white">
              Let's Work <br />
              <span className="text-primary italic">Together!</span>
            </h2>

            <p className="text-white/50 text-lg max-w-md leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-6 pt-6">
              <ContactInfo icon={<Mail className="text-primary" />} label="Email" value="lizansarkar16@gmail.com" />
              <ContactInfo icon={<Phone className="text-primary" />} label="Phone" value="+8801929562566" />
              <ContactInfo icon={<MapPin className="text-primary" />} label="Location" value="Rangpur, Bangladesh" />
            </div>
          </motion.div>

          {/* ডান দিক: ইলেকট্রিক বর্ডার র‍্যাপার */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ElectricBorder
              color="#28e98c"
              speed={0}
              chaos={0}
              borderRadius={40}
            >
              <div className="p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
                <form ref={form} onSubmit={sendEmail} className="space-y-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-1">Full Name</label>
                    <input
                      type="text"
                      name="user_name"
                      placeholder="Your full name"
                      required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20 backdrop-blur-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-1">Email</label>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="email@example.com"
                      required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20 backdrop-blur-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-1">Subject (Optional)</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="e.g., Project Proposal"
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20 backdrop-blur-md"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/60 ml-1">Message</label>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-white/[0.03] border border-white/5 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-all text-white placeholder:text-white/20 backdrop-blur-md resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-primary/10 border border-primary/50 text-primary hover:bg-primary hover:text-black py-5 rounded-2xl font-black uppercase tracking-[4px] transition-all flex items-center justify-center gap-3 group active:scale-95 cursor-pointer disabled:cursor-wait"
                  >
                    {isSending ? "Sending..." : "Send Message"}
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </ElectricBorder>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-6 group cursor-default">
    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:border-primary/50 transition-all duration-500">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{label}</p>
      <p className="text-base md:text-lg text-white/80 font-medium group-hover:text-primary transition-colors">{value}</p>
    </div>
  </div>
);

export default Contact;
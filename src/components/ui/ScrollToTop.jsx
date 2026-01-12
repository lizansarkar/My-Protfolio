import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Lenis বা সাধারণ স্ক্রল উভয় ক্ষেত্রেই এটি কাজ করবে
    const toggleVisibility = () => {
      // scrollY ব্যবহার করা আধুনিক ব্রাউজারের জন্য বেশি ভালো
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          // এখানে বর্ডার এবং শ্যাডো আপনার জোনাকি থিমের সাথে ম্যাচ করা
          className="cursor-pointer fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] p-4 rounded-full bg-[#0a0515]/80 backdrop-blur-md border border-primary/30 text-primary shadow-[0_0_15px_rgba(40,233,140,0.3)] hover:border-primary transition-all duration-300 group"
        >
          <div className="relative">
            {/* জোনাকির মতো পালসিং গ্লো ইফেক্ট */}
            <div className="absolute inset-0 bg-primary blur-lg opacity-20 group-hover:opacity-60 transition-opacity"></div>
            <ArrowUp size={22} className="relative z-10 group-hover:-translate-y-1 transition-transform duration-300" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
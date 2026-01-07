import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const FireflyCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  
  // মাউসের পজিশন ট্র্যাক করার জন্য Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // জোনাকির মুভমেন্টকে সামান্য ডিলে করার জন্য Spring Physics
  const springConfig = { damping: 25, stiffness: 150 };
  const fireflyX = useSpring(mouseX, springConfig);
  const fireflyY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // চেক করা হচ্ছে মাউস কি কোনো বাটনের ওপর আছে কি না
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      
      {/* ১. প্রধান জোনাকি ইফেক্ট (আপনার দেওয়া আগের কোড অনুযায়ী) */}
      <motion.div
        style={{
          x: fireflyX,
          y: fireflyY,
          translateX: "20%", // কার্সার থেকে সামান্য পাশে রাখা হয়েছে
          translateY: "20%",
        }}
        className="relative w-2 h-2 bg-[#28e98c] rounded-full shadow-[0_0_15px_#28e98c,0_0_30px_#28e98c]"
      >
        <div className="absolute inset-0 bg-[#28e98c] rounded-full blur-[2px] opacity-80"></div>

        {/* পালসিং গ্লো */}
        <motion.div
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-3 bg-[#28e98c] rounded-full blur-lg"
        />

        {/* স্পার্ক কণা */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, 15],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#28e98c] rounded-full"
          />
        ))}
      </motion.div>

      {/* ২. কম্পিউটারের আধুনিক কার্সার রিং */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="relative flex items-center justify-center"
      >
        {/* বাইরের রিং যা হোভার করলে বড় হবে */}
        <motion.div
          animate={{
            width: isPointer ? 40 : 20,
            height: isPointer ? 40 : 20,
            borderColor: isPointer ? "#28e98c" : "rgba(255, 255, 255, 0.5)",
          }}
          className="absolute border-2 rounded-full transition-all duration-200"
        />
        
        {/* মাঝখানের সলিড ডট */}
        <div className="w-1 h-1 bg-white rounded-full shadow-[0_0_5px_white]" />
      </motion.div>

      <style jsx global>{`
        * {
          cursor: none !important;
        }
        @media (max-width: 1024px) {
          .firefly-cursor { display: none; }
          * { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default FireflyCursor;
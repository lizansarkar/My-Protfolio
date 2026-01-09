import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const FireflyCursor = () => {
  const [isPointer, setIsPointer] = useState(false);
  const [sparks, setSparks] = useState([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // জোনাকির স্মুথ মুভমেন্ট
  const springConfig = { damping: 30, stiffness: 200 };
  const fireflyX = useSpring(mouseX, springConfig);
  const fireflyY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 🔥 এই পার্টটি সব সময় ফুলকি ঝরানোর জন্য দায়ী
  useEffect(() => {
    const sparkInterval = setInterval(() => {
      setSparks((prev) => [
        ...prev.slice(-20), // লিস্ট খুব বড় যাতে না হয়ে যায়
        {
          id: Math.random(),
          // fireflyX/Y থেকে বর্তমান ভ্যালু নেওয়া হচ্ছে যাতে মাউস স্থির থাকলেও সঠিক জায়গা থেকে ফুলকি বের হয়
          x: fireflyX.get() + 8,
          y: fireflyY.get() + 8,
          color: Math.random() > 0.5 ? '#28e98c' : '#a2ff00',
        },
      ]);
    }, 1000);

    return () => clearInterval(sparkInterval);
  }, [fireflyX, fireflyY]);

  // পুরনো স্পার্ক মুছে ফেলা
  useEffect(() => {
    const timer = setInterval(() => {
      setSparks((prev) => prev.slice(1));
    }, 600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      
      {/* ১. স্পার্ক ট্রেইল (মাউস স্থির থাকলেও ঝরবে) */}
      <AnimatePresence>
        {sparks.map((spark) => (
          <motion.div
            key={spark.id}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ 
              opacity: 0, 
              scale: 0, 
              y: spark.y + 50,
              x: spark.x + (Math.random() * 30 - 15)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 5, ease: "easeOut" }}
            className="fixed w-1 h-1 rounded-full z-10"
            style={{ 
              backgroundColor: spark.color,
              left: spark.x,
              top: spark.y,
              boxShadow: `0 0 6px ${spark.color}`
            }}
          />
        ))}
      </AnimatePresence>

      {/* ২. জোনাকি (Firefly) */}
      {/* <motion.div
        style={{
          x: fireflyX,
          y: fireflyY,
          translateX: "5px",
          translateY: "18px",
        }}
        className="relative w-2 h-2 bg-[#28e98c] rounded-full z-20"
      >
        <div className="absolute inset-0 bg-[#28e98c] rounded-full blur-[2px]"></div>
        <motion.div
          animate={{
            scale: [1, 2.5, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{ duration: 1, repeat: Infinity }}
          className="absolute -inset-2 bg-[#28e98c] rounded-full blur-md shadow-[0_0_5px_#28e98c]"
        />
      </motion.div> */}

      {/* ৩. ডিফল্ট কম্পিউটার অ্যারো */}
      <motion.div
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-2px",
          translateY: "-2px",
        }}
        className="relative z-30"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
        >
          <path
            d="M5.5 3.21V20.81L11 15.31H19.5L5.5 3.21Z"
            fill="white"
            stroke="black"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      <style jsx global>{`
        * { cursor: none !important; }
        @media (max-width: 1024px) {
          * { cursor: auto !important; }
        }
      `}</style>
    </div>
  );
};

export default FireflyCursor;
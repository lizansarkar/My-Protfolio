import { ReactLenis } from '@studio-freight/lenis/react';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SmoothScroll = ({ children }) => {
  useEffect(() => {
    // GSAP এবং Lenis কে একসাথে সিঙ্ক করা
    gsap.registerPlugin(ScrollTrigger);
    
    // স্ক্রল করার সময় এনিমেশনগুলো যেন স্মুথ হয়
    const update = (time) => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root options={{ 
      duration: 1.5, // কতক্ষণ ধরে স্ক্রল হবে (বাড়াতে বা কমাতে পারেন)
      smoothWheel: true, 
      wheelMultiplier: 1, 
      lerp: 0.1 // মাউস ছাড়ার পর কতটুকু পিচ্ছিল হবে (০.১ হলো স্ট্যান্ডার্ড)
    }}>
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
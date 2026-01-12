import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Stepper({
  children,
  initialStep = 1,
  nextButtonText = 'Continue',
  backButtonText = 'Back',
}) {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const stepsArray = Children.toArray(children);
  const totalSteps = stepsArray.length;

  const updateStep = (newStep) => {
    setCurrentStep(newStep);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setDirection(-1);
      updateStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setDirection(1);
      updateStep(currentStep + 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* মেইন গ্লাস বক্স */}
      <div className="w-full backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden relative group shadow-2xl">
        
        {/* আপনার Navbar এর মতো লাইটনিং ইফেক্ট */}
        <div className="absolute top-0 left-1/4 w-1/2 h-[1px]"></div>
        
        {/* Step Indicators */}
        <div className="flex items-center justify-between p-6 md:p-10 border-b border-white/5 bg-white/[0.02]">
          {stepsArray.map((_, index) => (
            <React.Fragment key={index}>
              <div 
                onClick={() => {
                  setDirection(index + 1 > currentStep ? 1 : -1);
                  updateStep(index + 1);
                }}
                className={`relative z-10 cursor-pointer flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-500 ${
                  currentStep >= index + 1 ? 'border-primary text-black bg-primary shadow-[0_0_15px_#28e98c]' : 'border-white/20 text-white/40 bg-transparent'
                }`}
              >
                <span className="text-xs md:text-sm font-bold">{index + 1}</span>
              </div>
              {index < totalSteps - 1 && (
                <div className="flex-1 h-[2px] mx-2 md:mx-4 bg-white/5 relative">
                  <motion.div 
                    initial={false}
                    animate={{ width: currentStep > index + 1 ? '100%' : '0%' }}
                    className="absolute inset-0 bg-primary shadow-[0_0_10px_#28e98c]"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Content Area */}
        <div className="relative p-8 md:p-16 min-h-[300px] md:min-h-[350px] flex items-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentStep}
              custom={direction}
              initial={{ x: direction > 0 ? 30 : -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? -30 : 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: "backOut" }}
              className="w-full"
            >
              {stepsArray[currentStep - 1]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Buttons */}
        <div className="p-6 md:p-8 flex justify-between items-center bg-white/[0.01] border-t border-white/5">
          <button
            onClick={handleBack}
            className={`px-6 py-2 text-sm font-semibold transition-all cursor-pointer ${
              currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-white/40 hover:text-primary'
            }`}
          >
            {backButtonText}
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentStep === totalSteps}
            className={`px-8 py-3 rounded-xl font-bold transition-all flex items-center gap-2 cursor-pointer ${
              currentStep === totalSteps 
              ? 'bg-white/5 text-white/20 cursor-not-allowed' 
              : 'bg-primary text-black hover:shadow-[0_0_25px_rgba(40,233,140,0.4)] hover:scale-105 active:scale-95'
            }`}
          >
            {currentStep === totalSteps ? '❤️ If you want, The Journey Continues ❤️' : nextButtonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Step({ children }) {
  return <div className="w-full">{children}</div>;
}
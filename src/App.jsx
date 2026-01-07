// import { useEffect } from 'react';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
import FireflyCursor from "./components/ui/FireflyCursor";
// import Lenis from 'lenis';

function App() {
  // useEffect(() => {
  //   const lenis = new Lenis();
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
    
  //   // Cleanup function
  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className="bg-[#060010] min-h-screen text-white selection:bg-primary selection:text-black">
      <FireflyCursor></FireflyCursor>

      <Navbar />
      <main>
        <Hero />
        
        <div className="container-base">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
import { useEffect } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Contact from "./sections/contact/Contact";
// import FireflyCursor from "./components/ui/FireflyCursor";
import ScrollToTop from "./components/ui/ScrollToTop";
import { Scroll } from "lucide-react";
import Lenis from "lenis";
import Skills from "./sections/skills/Skills";
import Achievement from "./sections/archivement/Archivement";

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    let rafId = null;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Cleanup function: cancel RAF and destroy lenis to stop background work
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Dispatch a lightweight global event while the user is actively scrolling.
  // Canvas animations can listen to this and pause to avoid frame contention.
  useEffect(() => {
    let scrolling = false;
    let scrollTimer = null;

    const onScrollActivity = () => {
      if (!scrolling) {
        scrolling = true;
        window.dispatchEvent(
          new CustomEvent("app:scrolling", { detail: true }),
        );
      }
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrolling = false;
        window.dispatchEvent(
          new CustomEvent("app:scrolling", { detail: false }),
        );
      }, 150);
    };

    window.addEventListener("wheel", onScrollActivity, { passive: true });
    window.addEventListener("touchmove", onScrollActivity, { passive: true });
    window.addEventListener("scroll", onScrollActivity, { passive: true });

    return () => {
      window.removeEventListener("wheel", onScrollActivity);
      window.removeEventListener("touchmove", onScrollActivity);
      window.removeEventListener("scroll", onScrollActivity);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="bg-[#060010] min-h-screen text-white selection:bg-primary selection:text-black">
      {/* <FireflyCursor></FireflyCursor> */}
      <Navbar />
      <main>
        <Hero />
        <div className="container-base">
          <About />
          <Projects />
          <Skills />
          <Achievement />
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;

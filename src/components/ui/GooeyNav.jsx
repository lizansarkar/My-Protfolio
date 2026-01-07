import { useRef, useState, useLayoutEffect } from "react";

const GooeyNav = ({
  items,
  animationTime = 700,
  particleCount = 15,
  particleDistances = [110, 20],
  colors = ["#28e98c", "#28e98c", "#ffffff"],
  initialActiveIndex = 0,
  isVertical = false, 
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [pillStyle, setPillStyle] = useState({ opacity: 0 });

  const noise = (n = 1) => n / 2 - Math.random() * n;
  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(15)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const makeParticles = (element) => {
    if (!element) return;
    for (let i = 0; i < particleCount; i++) {
      const t = animationTime + Math.random() * 200;
      const [endX, endY] = getXY(particleDistances[0] + noise(20), i, particleCount);
      const particle = document.createElement("span");
      particle.className = "goo-particle";
      particle.style.setProperty("--end-x", `${endX}px`);
      particle.style.setProperty("--end-y", `${endY}px`);
      particle.style.setProperty("--time", `${t}ms`);
      particle.style.setProperty("--color", colors[i % colors.length]);
      particle.style.setProperty("--size", `${15 + Math.random() * 15}px`);
      element.appendChild(particle);
      setTimeout(() => { if (element.contains(particle)) element.removeChild(particle); }, t);
    }
  };

  const updatePill = () => {
    const activeLi = navRef.current?.querySelectorAll(".nav-item")[activeIndex];
    if (activeLi && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pos = activeLi.getBoundingClientRect();

      // পিল এর সাইজ এবং পজিশন ক্যালকুলেশন
      const top = pos.top - containerRect.top;
      const left = pos.left - containerRect.left;

      setPillStyle({
        left: `${left}px`,
        top: `${top}px`,
        width: `${pos.width}px`,
        height: `${pos.height}px`,
        opacity: 1,
      });

      if (filterRef.current) {
        filterRef.current.style.left = `${left + pos.width / 2}px`;
        filterRef.current.style.top = `${top + pos.height / 2}px`;
      }
    }
  };

  useLayoutEffect(() => {
    // মেনু ওপেন হওয়ার পর এলিমেন্টগুলো সেট হতে সামান্য সময় নেয়
    const timer = setTimeout(updatePill, 100);
    window.addEventListener("resize", updatePill);
    return () => {
      window.removeEventListener("resize", updatePill);
      clearTimeout(timer);
    };
  }, [activeIndex, isVertical]);

  const handleClick = (e, index) => {
    setActiveIndex(index);
    makeParticles(filterRef.current);
  };

  return (
    <>
      <style>
        {`
          .nav-container { 
            position: relative; 
            width: 100%; 
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .nav-list { 
            display: flex;
            flex-direction: ${isVertical ? "column" : "row"}; 
            gap: 8px; 
            list-style: none; padding: 0; margin: 0; 
            position: relative; 
            z-index: 20; /* টেক্সট যাতে পিলের উপরে থাকে */
          }
          .nav-item {
            padding: 10px 20px;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 700;
            font-size: 11px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 0.3s ease;
            display: block;
            text-align: center;
            cursor: pointer;
            position: relative;
            z-index: 25; /* টেক্সট পিলের উপরে নিশ্চিত করার জন্য */
          }
          .nav-item.active { 
            color: #000000 !important; 
          }
          .active-pill {
            position: absolute;
            background: #eaeaea;
            border-radius: 12px;
            z-index: 10; /* টেক্সট থেকে নিচে থাকবে */
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            pointer-events: none;
          }
          .goo-layer {
            position: absolute;
            pointer-events: none;
            filter: url('#enhanced-goo');
            z-index: 15;
            width: 0; height: 0;
          }
          .goo-particle {
            position: absolute;
            width: var(--size); height: var(--size);
            border-radius: 50%;
            background: var(--color);
            box-shadow: 0 0 10px var(--color);
            animation: shoot var(--time) ease-out forwards;
          }
          @keyframes shoot {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
            100% { transform: translate(calc(-50% + var(--end-x)), calc(-50% + var(--end-y))) scale(0); opacity: 0; }
          }
        `}
      </style>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <defs>
          <filter id="enhanced-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" result="goo" />
          </filter>
        </defs>
      </svg>

      <div className="nav-container" ref={containerRef}>
        <ul ref={navRef} className="nav-list">
          {items.map((item, index) => (
            <li key={index} style={{ width: isVertical ? '100%' : 'auto' }}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, index)}
                className={`nav-item ${activeIndex === index ? "active" : ""}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Active Pill ব্যাকগ্রাউন্ড হিসেবে কাজ করবে */}
        <div className="active-pill" style={pillStyle} />
        <div className="goo-layer" ref={filterRef} />
      </div>
    </>
  );
};

export default GooeyNav;
import { useRef, useEffect, useState, useLayoutEffect } from "react";

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
  const [pillStyle, setPillStyle] = useState({});

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
    const activeLi = navRef.current?.querySelectorAll("a")[activeIndex];
    if (activeLi && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pos = activeLi.getBoundingClientRect();

      setPillStyle({
        left: activeLi.offsetLeft,
        top: isVertical ? activeLi.offsetTop : "50%",
        transform: isVertical ? "none" : "translateY(-50%)",
        width: activeLi.offsetWidth,
        height: isVertical ? activeLi.offsetHeight : "85%",
        opacity: 1
      });

      if (filterRef.current) {
        filterRef.current.style.left = `${pos.x - containerRect.x + pos.width / 2}px`;
        filterRef.current.style.top = `${pos.y - containerRect.y + pos.height / 2}px`;
      }
    }
  };

  useLayoutEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [activeIndex, isVertical]);

  const handleClick = (e, index) => {
    if (activeIndex === index) return;
    setActiveIndex(index);
    makeParticles(filterRef.current);
  };

  return (
    <>
      <style>
        {`
          .nav-container { position: relative; width: 100%; }
          .nav-list { 
            display: flex; 
            flex-direction: ${isVertical ? "column" : "row"}; 
            gap: 10px; 
            list-style: none; padding: 0; margin: 0; position: relative; z-index: 20; 
          }
          .nav-item {
            padding: 12px 20px;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 700;
            font-size: 11px;
            letter-spacing: 2px;
            text-transform: uppercase;
            text-decoration: none;
            transition: color 0.3s;
            display: block;
            text-align: center;
            white-space: nowrap;
          }
          .nav-item.active { color: #000000 !important; }
          .active-pill {
            position: absolute;
            background: #eaeaea;
            border-radius: 10px;
            z-index: 10;
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
            pointer-events: none;
          }
          .goo-layer {
            position: absolute;
            pointer-events: none;
            filter: url('#enhanced-goo');
            z-index: 15;
            width: 0; height: 0;
            display: flex; align-items: center; justify-content: center;
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
            0% { transform: translate(0, 0) scale(1); opacity: 1; }
            100% { transform: translate(var(--end-x), var(--end-y)) scale(0); opacity: 0; }
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
        <div className="active-pill" style={pillStyle} />
        <div className="goo-layer" ref={filterRef} />
      </div>
    </>
  );
};

export default GooeyNav;
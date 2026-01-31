import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./hero.css";

const heroImages = ["/hero-1.jpg", "/hero-2.jpg", "/hero-3.jpg", "/hero-4.jpg"];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500); // 4.5s per image

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Hero Images */}
      <div className="hero-images">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt=""
            className={`hero-img img-${index + 1} ${index === activeIndex ? "active" : ""}`}
          />
        ))}
      </div>

      {/* Centered Hero Content */}
      <div className="hero-content">
        <h1>
          Building BC’s Future,
          <br />
          Frame by Frame
        </h1>
        <Link to="/projects" className="hero-cta">
          View Our Projects
        </Link>
      </div>
    </section>
  );
}

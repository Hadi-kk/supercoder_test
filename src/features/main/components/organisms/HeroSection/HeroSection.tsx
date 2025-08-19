import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/images/herosection.png",
    "/images/herosection.png",
    "/images/herosection.png",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full min-h-[92vh] h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-5000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30">
            <div
              className="absolute"
              style={{
                width: 667,
                height: 120,
                top: 360,
                left: 870,
                transform: "rotate(0deg)",
                opacity: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "left",
              }}
            >
              <h2 className="text-[32px] font-normal leading-[1.5] text-white font-zen-dots">
                Performance Ready <br />
                Apparel For Work & Beyond
              </h2>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 w-8 ${
              currentSlide === index ? "bg-yellow-400" : "bg-white/30"
            } transition-all duration-200`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

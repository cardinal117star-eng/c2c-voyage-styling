import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1500514966906-fe245eea9344?w=1200',
    title: 'Beginner Sailing',
    description: 'From never-sailed to confident helm in a weekend intensive course.',
  },
  {
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
    title: 'Advanced Yacht Handling',
    description: 'Precision docking, heavy-weather sailing and spinnaker mastery.',
  },
  {
    image: 'https://images.unsplash.com/photo-1534061594517-f88d45bfe43f?w=1200',
    title: 'Private Charters',
    description: 'Exclusive coaching days or pure relaxation on the water.',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      ref={sectionRef}
      id="lessons"
      className="py-24 bg-primary reveal-up"
    >
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-center mb-16 section-underline">
          Sailing Experiences
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            {/* Slides */}
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.title} className="min-w-full relative">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/95 to-transparent">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                      {slide.title}
                    </h3>
                    <p className="text-white/90 text-lg">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/80 bg-transparent text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-white/80 bg-transparent text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-port w-8' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

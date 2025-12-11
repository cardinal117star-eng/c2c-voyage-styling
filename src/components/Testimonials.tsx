import { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote:
      "Eric's lessons gave me the confidence to take my family cruising. Clear, calm and incredibly practical instruction.",
    author: 'Sarah Mills',
    location: 'Perth',
  },
  {
    quote:
      "After just a few sessions I was handling our 45ft yacht in 25 knots. Safety-first, no-nonsense coaching.",
    author: 'Tom Reynolds',
    location: 'Fremantle',
  },
  {
    quote:
      "Perfect balance of theory and real sea time. Eric is patient, knowledgeable and a natural teacher.",
    author: 'Maya K.',
    location: 'Gold Coast',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-24 bg-background reveal-left"
    >
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-center mb-16 section-underline">
          What Clients Say
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-secondary rounded-3xl p-10 md:p-14 shadow-card">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-600 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.author}
                    className="min-w-full px-4"
                  >
                    <p className="text-xl md:text-2xl text-foreground italic leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-bold text-port text-lg">
                      — {testimonial.author}, {testimonial.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-10">
              <Button
                variant="default"
                size="sm"
                onClick={prevTestimonial}
              >
                Prev
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={nextTestimonial}
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

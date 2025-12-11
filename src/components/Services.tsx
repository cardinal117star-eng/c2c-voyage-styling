import { useEffect, useRef } from 'react';
import { Ship, Compass, Wind, LifeBuoy } from 'lucide-react';
import { Button } from './ui/button';
import servicesBg from '@/assets/services-bg.jpg';

const services = [
  {
    icon: Ship,
    title: 'Boat Handling & Docking',
    features: [
      'Close-quarters maneuvering',
      'Spring lines & wind-aware docking',
      'Safe departure techniques',
    ],
  },
  {
    icon: Compass,
    title: 'Navigation & Passage Planning',
    features: [
      'Charts, GPS, & tides',
      'Weather routing & night navigation',
      'Coastal voyage planning',
    ],
  },
  {
    icon: Wind,
    title: 'Wind & Sail Trim',
    features: [
      'Reefing & sail shape optimization',
      'Performance extraction from your rig',
      'Apparent wind mastery',
    ],
  },
  {
    icon: LifeBuoy,
    title: 'Safety & Emergency',
    features: [
      'Man overboard recovery',
      'VHF procedures & fire management',
      'Emergency protocols',
    ],
  },
];

const Services = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 reveal-up"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${servicesBg})` }}
      />
      <div className="absolute inset-0 bg-primary/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white text-center mb-16 section-underline">
          Signature Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card/95 backdrop-blur-sm rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-14 h-14 mx-auto mb-6 text-starboard" />
              <h3 className="font-display text-xl font-bold text-port mb-4">
                {service.title}
              </h3>
              <ul className="text-left space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-muted-foreground"
                  >
                    <span className="text-starboard font-bold mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Button variant="heroPrimary" size="lg" asChild>
            <a href="#contact">Chart Your Voyage</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;

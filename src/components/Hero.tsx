import { Button } from './ui/button';
import heroImage from '@/assets/hero-yacht.jpg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury yacht sailing on turquoise waters"
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/60 to-primary/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p
          className="text-lg md:text-xl text-white/90 font-medium mb-4 animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          Western Australia
        </p>
        
        <h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up"
          style={{ animationDelay: '0.4s', textShadow: '2px 4px 20px rgba(0,0,0,0.5)' }}
        >
          Learn To Sail With
          <br />
          <span className="text-starboard-light">Eric Pearson</span>
        </h1>
        
        <p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Professional yacht delivery, seamanship training, and private coaching 
          with over 30 years of global experience.
        </p>
        
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <Button variant="heroPrimary" size="lg" asChild>
            <a href="#contact">Book Your Lesson</a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="#services">Chart Your Voyage</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

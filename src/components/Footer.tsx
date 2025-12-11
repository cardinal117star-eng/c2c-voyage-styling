import Logo from './Logo';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[hsl(210,50%,8%)] to-primary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-10">
          {/* Brand */}
          <div className="flex-1 min-w-[280px]">
            <Logo size="lg" className="mb-4 [&_span]:text-white" />
            <p className="text-white/80 max-w-sm leading-relaxed">
              Private yacht instruction & coaching across Western Australia.
              Confidence, competence, calm on the water.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-port hover:-translate-y-1 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-port hover:-translate-y-1 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center hover:bg-port hover:-translate-y-1 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-white font-bold text-lg mb-3">Book a Lesson</h4>
            <p className="text-white/80">eric@pearson-sailing.com.au</p>
            <p className="text-white/80">+61 400 123 456</p>
            
            <p className="text-white/50 text-sm mt-8">
              © {currentYear} Eric Pearson Sailing
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

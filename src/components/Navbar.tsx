import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Button } from './ui/button';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll state and page
  const showLightText = !isScrolled && isHomePage;
  const textColorClass = showLightText 
    ? 'text-white hover:text-port-light' 
    : 'text-primary hover:text-port';

  const navLinks = [
    { href: isHomePage ? '#services' : '/#services', label: 'Deliveries' },
    { href: isHomePage ? '#lessons' : '/#lessons', label: 'Tuition' },
    { href: isHomePage ? '#testimonials' : '/#testimonials', label: 'Testimonials' },
    { href: isHomePage ? '#contact' : '/#contact', label: 'Contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled || !isHomePage
            ? 'bg-card/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Logo 
              size={isScrolled || !isHomePage ? 'md' : 'lg'} 
              variant={showLightText ? 'light' : 'default'} 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-semibold transition-colors ${textColorClass}`}
              >
                About
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-card rounded-2xl shadow-card-hover p-4 transition-all duration-300 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
              >
                <div className="border-b border-border pb-3 mb-3">
                  <h4 className="text-sm font-bold text-port uppercase tracking-wide mb-2">
                    Professional Credentials
                  </h4>
                  <a href="/documents/Eric Pearson Resume-7.pdf" target="_blank" className="block py-2 text-foreground hover:text-port hover:pl-2 transition-all">
                    Resume (PDF)
                  </a>
                  <a href="/documents/MSI COC_EPearson 2025.pdf" target="_blank" className="block py-2 text-foreground hover:text-port hover:pl-2 transition-all">
                    Master Class 1 COC
                  </a>
                  <a href="/documents/Eric Pearson tickets.pdf" target="_blank" className="block py-2 text-foreground hover:text-port hover:pl-2 transition-all">
                    Tickets & Ratings
                  </a>
                </div>
                <div className="pb-3 mb-3 border-b border-border">
                  <h4 className="text-sm font-bold text-port uppercase tracking-wide mb-2">
                    References
                  </h4>
                  <a href="/documents/MY Kokomo Reference.pdf" target="_blank" className="block py-2 text-foreground hover:text-port hover:pl-2 transition-all">
                    MY Kokomo
                  </a>
                  <a href="/documents/SY Happy Days Reference.pdf" target="_blank" className="block py-2 text-foreground hover:text-port hover:pl-2 transition-all">
                    S/Y Happy Days
                  </a>
                </div>
                <Link 
                  to="/credentials" 
                  className="block text-center font-semibold text-starboard hover:text-port transition-colors"
                >
                  View All Credentials
                </Link>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors ${textColorClass}`}
              >
                {link.label}
              </a>
            ))}

            <Button 
              variant={showLightText ? 'hero' : 'default'} 
              size="sm"
              asChild
            >
              <a href={isHomePage ? '#contact' : '/#contact'}>Get a Quote</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${showLightText ? 'text-white' : 'text-primary'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${showLightText ? 'text-white' : 'text-primary'}`} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[72px] left-0 right-0 bg-card shadow-lg z-40 transition-all duration-500 overflow-hidden lg:hidden ${
          isMobileMenuOpen ? 'max-h-screen py-6' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-6 flex flex-col gap-4">
          <Link 
            to="/" 
            className="py-3 border-b border-border text-primary font-semibold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 border-b border-border text-primary font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="py-3 border-b border-border">
            <h4 className="text-sm font-bold text-port mb-2">Credentials</h4>
            <Link 
              to="/credentials" 
              className="block py-2 text-muted-foreground hover:text-port"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View All Credentials
            </Link>
          </div>
          <Button className="mt-4" asChild>
            <a href={isHomePage ? '#contact' : '/#contact'}>Get a Quote</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

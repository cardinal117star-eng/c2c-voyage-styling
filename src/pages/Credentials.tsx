import { useEffect, useRef } from 'react';
import { FileText, ExternalLink, Award, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import heroImage from '@/assets/services-bg.jpg';

interface DocumentCardProps {
  title: string;
  description: string;
  href: string;
  icon?: 'file' | 'award' | 'star';
}

const DocumentCard = ({ title, description, href, icon = 'file' }: DocumentCardProps) => {
  const IconComponent = icon === 'award' ? Award : icon === 'star' ? Star : FileText;
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 border border-border hover:border-port/30 flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-port/10 flex items-center justify-center group-hover:bg-port/20 transition-colors">
          <IconComponent className="w-7 h-7 text-port" />
        </div>
        <div className="flex-1">
          <h4 className="font-display text-lg font-bold text-primary group-hover:text-port transition-colors">
            {title}
          </h4>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
      </div>
      
      {/* Document Preview Area */}
      <div className="flex-1 bg-secondary/50 rounded-xl p-4 mb-4 min-h-[120px] flex items-center justify-center border border-border/50">
        <div className="text-center">
          <FileText className="w-10 h-10 text-muted-foreground/50 mx-auto mb-2" />
          <p className="text-xs text-muted-foreground">PDF Document</p>
        </div>
      </div>
      
      <span className="inline-flex items-center gap-2 text-starboard font-semibold group-hover:text-port transition-colors">
        View Document <ExternalLink className="w-4 h-4" />
      </span>
    </a>
  );
};

const Credentials = () => {
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

  const credentials = [
    {
      title: 'Resume',
      description: 'Full professional resume (PDF)',
      href: '/documents/Eric Pearson Resume-7.pdf',
      icon: 'file' as const,
    },
    {
      title: 'Resume Table',
      description: 'Detailed experience table',
      href: '/documents/Eric_Pearson_Resume_Table.pdf',
      icon: 'file' as const,
    },
    {
      title: 'Master Class 1 COC',
      description: 'Maritime Safety Queensland Certificate',
      href: '/documents/MSI COC_EPearson 2025.pdf',
      icon: 'award' as const,
    },
    {
      title: 'Tickets & Ratings',
      description: 'All current qualifications',
      href: '/documents/Eric Pearson tickets.pdf',
      icon: 'award' as const,
    },
  ];

  const references = [
    {
      title: 'Reference – MY Kokomo',
      description: 'Superyacht reference letter',
      href: '/documents/MY Kokomo Reference.pdf',
      icon: 'star' as const,
    },
    {
      title: 'Reference – S/Y Happy Days',
      description: '52ft Lagoon Catamaran reference',
      href: '/documents/SY Happy Days Reference.pdf',
      icon: 'star' as const,
    },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Professional sailing credentials"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/70 to-primary/90" />
        
        <div className="relative z-10 container mx-auto px-6 text-center pt-20">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            Professional Credentials
            <br />
            <span className="text-starboard-light">& References</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Over 30 years of maritime experience, certified qualifications, and testimonials from satisfied clients.
          </p>
        </div>
      </section>

      {/* Credentials Section */}
      <section ref={sectionRef} className="py-20 bg-background reveal-up">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12 section-underline">
            Professional Credentials
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {credentials.map((doc) => (
              <DocumentCard key={doc.title} {...doc} />
            ))}
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary text-center mb-12 section-underline">
            Works & References
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {references.map((doc) => (
              <DocumentCard key={doc.title} {...doc} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Credentials;

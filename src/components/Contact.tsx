import { useState, useEffect, useRef, FormEvent } from 'react';
import { Button } from './ui/button';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. Eric will get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-24 bg-primary reveal-right"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6 section-underline">
          Contact Eric Pearson
        </h2>

        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
          Western Australia
          <br />
          Email: <span className="text-starboard-light font-bold">eric@pearson-sailing.com.au</span>
          <br />
          Phone: <span className="text-starboard-light font-bold">+61 400 123 456</span>
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto space-y-5"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-white/95 text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-port text-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-white/95 text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-port text-lg"
          />
          <textarea
            placeholder="Your Message (optional)"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-6 py-4 rounded-xl bg-white/95 text-primary placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-port text-lg resize-none"
          />
          <Button
            type="submit"
            variant="heroPrimary"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

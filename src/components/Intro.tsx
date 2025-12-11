import { useEffect, useRef } from 'react';

const Intro = () => {
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

  return (
    <section
      ref={sectionRef}
      id="intro"
      className="py-24 bg-secondary reveal-up"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center bg-card/80 backdrop-blur-sm rounded-3xl p-10 md:p-16 shadow-card">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6 section-underline">
            Private Yacht Training for All Levels
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed">
            Personal, hands-on coaching in Western Australia with a focus on confidence, 
            safety, and real-world skills.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Learn at your own pace with calm, expert guidance on stunning Australian waters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

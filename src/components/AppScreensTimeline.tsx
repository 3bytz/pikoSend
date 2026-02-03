import React, { useEffect, useRef } from "react";
import { Section } from "./Section";
import { Container } from "./Container";

export const AppScreensTimeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <Section background="soft-grey" id="experience">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-h2 font-poppins font-bold text-piko-black mb-4">
            Experience the PikoSend App
          </h2>
          <p className="text-piko-medium-grey text-lg max-w-2xl mx-auto">
            Manage your money on the go with our powerful mobile app. Send,
            receive, and track your finances with ease.
          </p>
        </div>

        <div className="relative" ref={timelineRef}>
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-piko-purple/30 via-piko-violet/30 to-piko-lilac/30 transform -translate-x-1/2 z-0"></div>

        </div>

        
    
      </Container>

      <style>{`
        .timeline-item.is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </Section>
  );
};

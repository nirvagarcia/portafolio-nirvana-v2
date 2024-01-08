import React, { useEffect, useState, useRef } from "react";

export default function SectionEffect(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          setVisible(true);
        } else if (!entry.isIntersecting && isVisible) {
          setVisible(false);
        }
      });
    });

    observer.observe(domRef.current);

    return () => observer.disconnect();
  }, [isVisible]); 

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      style={{ transitionDelay: `${props.delay}` }}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

import React, { useEffect, useState, useRef } from 'react';

const LazyLoadComponent = ({ children }) => {
  const [inView, setInView] = useState(false);
  const containerRef = useRef(null);

  const handleIntersection = (entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setInView(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    observer.observe(containerRef.current);

    return () => {
      // Cleanup by disconnecting the observer when the component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef}>
      {inView ? children : null}
    </div>
  );
};

export default LazyLoadComponent;

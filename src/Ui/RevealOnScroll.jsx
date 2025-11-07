// import React from 'react'
// import { useEffect, useRef } from "react";


// function RevealOnScroll({ children }) {
//     const ref = useRef(null);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           ref.current.classList.add("visible");
//         }
//       },
//       { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => observer.disconnect();
//   });

//   return (
//     <div ref={ref} className="reveal">
//       {children}
//     </div>
//   )
// }

// export default RevealOnScroll

import React, { useEffect, useRef } from "react";

function RevealOnScroll({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // ✅ Automatically visible on mobile
    if (window.innerWidth < 768) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal transition-all duration-700 ease-out">
      {children}
    </div>
  );
}

export default RevealOnScroll;

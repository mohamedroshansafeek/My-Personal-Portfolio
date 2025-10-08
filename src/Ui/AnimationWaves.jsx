// import React from "react";

// function AnimationWaves() {
//   return (
//     <div className="absolute bottom-0 w-full z-10">
//       <svg
//         viewBox="0 0 1440 280"
//         className="w-full h-auto"
//         preserveAspectRatio="none"
//       >
//         <defs>
//           <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="100%">
//             <stop offset="0%" stopColor="#14b8a6" />
//             <stop offset="100%" stopColor="#592af3" />
//           </linearGradient>
//         </defs>
//         <path
//           fill="url(#waveGradient)"
//           d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,280L1360,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z"
//         ></path>
//       </svg>
//     </div>
//   );
// }

// export default AnimationWaves;

import React from "react";

function AnimationWaves() {
  return (
    <div className="absolute bottom-0 left-0 w-full z-10 hidden lg:block">
      <svg
        viewBox="0 0 1440 280"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="100%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#592af3" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,256L80,240C160,224,320,192,480,186.7C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,280L1360,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z"
        ></path>
      </svg>
    </div>
  );
}

export default AnimationWaves;

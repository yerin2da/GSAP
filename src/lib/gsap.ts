// src/lib/gsap.ts
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// 한 번만 등록
gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

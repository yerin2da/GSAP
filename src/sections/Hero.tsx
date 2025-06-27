// src/sections/Hero.tsx

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero 타이틀 애니메이션
            gsap.from(".hero-title", {
                y: 80,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                },
            });

            // 버튼 애니메이션
            gsap.from(".hero-button", {
                y: 40,
                opacity: 0,
                duration: 0.8,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                },
            });

            // 섹션 자체를 고정 (pin)
            gsap.to(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="section min-h-screen flex items-center justify-center text-center px-4"
        >
            <div className="max-w-5xl mx-auto">
                <p className="uppercase tracking-wide text-sm text-gray-400 mb-4">
                    super lorem abstract brand — powered by direction
                </p>
                <h1 className="hero-title text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Creative <br className="hidden md:block" /> Design
                </h1>
                <button className="hero-button px-6 py-3 bg-white text-black font-semibold text-sm rounded hover:bg-gray-200 transition">
                    Get a Quote
                </button>

                {/* 이미지 공간 */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 h-60 w-full rounded-md" />
                    <div className="bg-gray-800 h-60 w-full rounded-md" />
                </div>
            </div>
        </section>
    );
}

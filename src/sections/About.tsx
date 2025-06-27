// src/sections/About.tsx

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
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
            id="about"
            ref={sectionRef}
            className="min-h-screen py-20 px-4 snap-start"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-4">About</h2>
                    <p className="mb-4 text-gray-300">
                        We create stunning Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        We create stunning Lorem ipsum dolor sit amet, consectetur.
                    </p>
                    <p className="text-gray-400">
                        After 10 years of experience, consectetur adipiscing elit.
                        We create stunning Lorem ipsum dolor sit amet, consectetur.
                    </p>
                </div>
                <div className="bg-gray-800 h-72 w-full rounded-md" />
            </div>
        </section>
    );
}

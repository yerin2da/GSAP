// src/sections/Testimonials.tsx

import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function Testimonials() {
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
            id="testimonials"
            ref={sectionRef}
            className="min-h-screen py-20 px-4 bg-neutral-900 snap-start"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((id) => (
                        <div key={id} className="bg-black p-6 rounded shadow">
                            <div className="bg-gray-700 h-40 w-full mb-4 rounded" />
                            <p className="text-sm italic mb-2">
                                "Amazing team with Lorem Ipsum."
                            </p>
                            <div className="text-sm font-semibold">John Doe</div>
                            <div className="text-xs text-gray-400">Creative Director</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

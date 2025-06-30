// src/sections/MainVisual.tsx

import { useRef, useEffect } from "react";
import { gsap } from "../lib/gsap";
import TailButton from "../UI/TailButton";
import BackImaqe from "../components/BackImage";

export default function MainVisual() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // MainVisual 타이틀 애니메이션
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
            className="section min-h-screen relative flex items-center justify-center text-center px-4"
        >
            <div className="max-w-5xl mx-auto border">
                <p className="uppercase tracking-wide text-sm text-gray-400 mb-4">
                    super lorem abstract brand — powered by direction
                </p>
                <h1 className="text-center leading-[0.8] text-7xl md:text-8xl lg:text-9xl mb-8 flex flex-col items-center justify-center">
                    <span className="">Creative</span>
                    <span className="">Design</span>
                </h1>

                <TailButton
                    bcolor={`text-black bg-white`}
                    caption={`Get a Quote`}
                />

            </div>
            {/* 이미지 */}
            <div className="absolute top-0 right-0 aspect-square h-1/2 z-0 border">
                <BackImaqe
                    imageSrc={`main/pf_img1.png`}
                    title="메인비주얼 작품1"
                />
            </div>
            <div className="absolute bottom-0 left-0 aspect-square h-1/2 z-0 border">
                <BackImaqe
                    imageSrc={`main/pf_img6.png`}
                    title="메인비주얼 작품2"
                />
            </div>
        </section>
    );
}

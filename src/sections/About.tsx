import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

export default function About() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const overlays = gsap.utils.toArray<HTMLElement>(".fill-text .overlay");//.fill-text 안의 .overlay 요소들을 모두 찾음

            overlays.forEach((el) => {
                gsap.to(el, {
                    width: "100%",
                    ease: "sine.out",

                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        end: "bottom 50%",
                        scrub: true,
                        //markers: true, // 디버깅
                    },
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            className="min-h-screen bg-black flex flex-col justify-center items-center px-10 snap-start font-bold"
        >
            <div className={`flex flex-col items-start gap-20`}>
                {[  "We Set the Trend",
                    "We Create Icons",
                    "This Is What IdentityLooks Like",
                    "We Go Beyond All Limits",
                ].map((text, i) => (
                    <div key={i}
                         className="fill-text text-xl sm:text-4xl relative overflow-hidden"
                    >
                        {/* 기본 흐린 텍스트 */}
                        <span className="base block text-gray-500 relative z-10">
                            {text}
                        </span>

                        {/* 흰색으로 채워지는 오버레이 텍스트 */}
                        <span
                            className="overlay absolute top-0 left-0 block whitespace-nowrap z-20"
                            style={{
                                width: "0%",
                                overflow: "hidden",
                                backgroundColor: "white",
                                color: "transparent",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                            }}
                        >
                            {text}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
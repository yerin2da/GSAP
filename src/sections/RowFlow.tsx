import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import BackImaqe from "../components/BackImage";

export default function RowFlow() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const section = sectionRef.current;
            if (!wrapper || !section) return;

            const scrollLength = wrapper.scrollWidth - window.innerWidth + 100;

            gsap.to(wrapper, {
                x: -scrollLength,
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: `+=${scrollLength}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    // markers: true, // 디버깅
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="section min-h-screen flex flex-col justify-center snap-start"
        >
            <h2 className="text-4xl font-normal mb-14 bg-black z-50 text-center">
                Artwork3
            </h2>

            <div
                ref={wrapperRef}
                className="flex w-max h-[50vh] gap-10 px-20"
            >
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="pf-card flex-shrink-0 h-full aspect-square rounded-sm"
                    >
                        <BackImaqe
                            imageSrc={`main/pf_img${i + 1}.png`}
                            title={`작품 ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

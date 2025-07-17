import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import BackImage from "../components/BackImage";

export default function Sec3() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const section = sectionRef.current;
            if (!wrapper || !section) return;

            const buffer = 800;//안전마진
            const scrollLength = wrapper.scrollWidth - window.innerWidth + buffer;

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
                    // markers: true,
                },
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="flex flex-col items-center justify-center w-full min-h-screen bg-black text-white"
        >
            <h2>Floral Legacy</h2>
            <div
                ref={wrapperRef}
                className="flex h-[50vh] w-[25vh] aspect-[1/2] gap-10"
            >
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="pf-card w-full h-full flex-shrink-0 rounded overflow-hidden"
                    >
                        <BackImage
                            imageSrc={`main/sec3/${i + 1}.jpg`}
                            title={`작품 ${i + 1}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
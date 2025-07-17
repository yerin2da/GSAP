// src/sections/Sec2.tsx
import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import IconImaqe from "../components/IconImaqe";

const portfolioData = [
    {
        title: "Blind Intuition",
        txt:"2025, Oil on Canvas, 40 × 50 cm",
        img: "main/sec2/1.jpg",
        link: "https://www.youtube.com/watch?v=kH4aKsh7YeU",
    },
    {
        title: "A Breath of Reminiscence",
        txt:"2025, Acrylic on Canvas, 45 × 30 cm",
        img: "main/sec2/2.jpg",
        link: "https://www.youtube.com/watch?v=peV1soyE8ps",
    },
    {
        title: "Afternoon Pause",
        txt:"2025, Oil on Canvas, 40 × 50 cm",
        img: "main/sec2/3.jpg",
        link: "https://www.youtube.com/watch?v=uAJX9Em7RXM",
    },
    {
        title: "Harvest Warmth",
        txt:"2025, Oil on Canvas, 50 × 50 cm",
        img: "main/sec2/4.jpg",
        link: "https://www.youtube.com/watch?v=9eSxCFSqbzY",
    },
    {
        title: "Fluid Cosmos",
        txt:"2025, Mixed Media on Canvas, 60 × 30 cm",
        img: "main/sec2/5.jpg",
        link: "https://www.youtube.com/watch?v=40jTPGbbvK8",
    },
    {
        title: "Vincent in Reverie",
        txt:"2025, Acrylic on Canvas, 40 × 50 cm",
        img: "main/sec2/6.jpg",
        link: "https://www.youtube.com/watch?v=40jTPGbbvK8",
    },
];

export default function Sec2() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".port_item").forEach((item) => {
                const heading = item.querySelector("h3");

                // 메인 카드 확대 애니메이션
                gsap.fromTo(
                    item,
                    { scale: 1, opacity: 0.5 },
                    {
                        scale: 1.1,
                        opacity: 1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 60%",
                            end: "bottom 40%",
                            toggleActions: "play reverse play reverse",
                            once: false,
                            //markers: true,// 디버깅 라인
                        },
                    }
                );

                if (heading) {
                    gsap.fromTo(
                        heading,
                        { color: "#ffffff" },
                        {
                            color: '#BAF097',
                            scrollTrigger: {
                                trigger: item,
                                start: "top 60%",
                                end: "bottom 40%",
                                toggleActions: "play reverse play reverse",
                            },
                        }
                    );
                }

            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="portfolio2"
            ref={sectionRef}
            className="min-h-[300vh] flex flex-col justify-center items-center"
        >
            <h2>Soft Echoes</h2>
            <div className="flex flex-col gap-16 items-center">
                {portfolioData.map((item, i) => (
                    <div
                        key={i}
                        className="w-80 h-72 xl:w-[30vw] xl:h-[20vw] port_item scale-50 xs:scale-100
                        relative transition-transform duration-500 flex flex-col items-center "
                    >
                        <div className="img_box h-2/3 rounded overflow-hidden">
                            <IconImaqe imageSrc={item.img} title={item.title}/>
                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold !font-saira">
                            {item.title}
                        </h3>
                        <p className={`text-sm font-thin`}>{item.txt}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
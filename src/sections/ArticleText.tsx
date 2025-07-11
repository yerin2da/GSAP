// src/sections/ArticleText.tsx
import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import IconImaqe from "../components/IconImaqe";

const portfolioData = [
    {
        title: "1",
        img: "main/pf_img1.png",
        link: "https://www.youtube.com/watch?v=kH4aKsh7YeU",
    },
    {
        title: "2",
        img: "main/pf_img2.png",
        link: "https://www.youtube.com/watch?v=peV1soyE8ps",
    },
    {
        title: "3",
        img: "main/pf_img3.png",
        link: "https://www.youtube.com/watch?v=uAJX9Em7RXM",
    },
    {
        title: "4",
        img: "main/pf_img4.png",
        link: "https://www.youtube.com/watch?v=9eSxCFSqbzY",
    },
    {
        title: "5",
        img: "main/pf_img5.png",
        link: "https://www.youtube.com/watch?v=40jTPGbbvK8",
    },
];

export default function ArticleText() {
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
                                end: "bottom 60%",
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
            <h2 className="text-3xl font-bold mb-20">Artwork2</h2>
            <div className="flex flex-col gap-16 items-center">
                {portfolioData.map((item, i) => (
                    <div
                        key={i}
                        className="w-80 h-72 xl:w-[30vw] xl:h-[20vw] port_item scale-100
                        relative transition-transform duration-500 flex flex-col items-center "
                    >
                        <div className="img_box h-2/3 rounded-lg overflow-hidden">
                            <IconImaqe imageSrc={item.img} title={item.title}/>
                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
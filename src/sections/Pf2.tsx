// src/sections/Pf2.tsx
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

export default function Pf2() {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".port_item").forEach((item) => {
                const heading = item.querySelector("h3");

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        end: "top 40%",
                        toggleActions: "play reverse play reverse",
                        scrub: true,
                    },
                });

                tl.fromTo(
                    item,
                    { scale: 1, opacity: 0.5 },
                    { scale: 1.2, opacity: 1, ease: "power2.out" }
                );

                if (heading) {
                    tl.fromTo(
                        heading,
                        { color: "#fff" },
                        { color: "red", ease: "none" },
                        "+=0.1" // 동시에 시작 "<" or 딜레이 "+=0.1"로  줄 수도 있음)
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
            className="min-h-[300vh] py-20 px-4 flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-20">pf2</h2>

            <div className="grid grid-cols-1 gap-16 items-center">
                {portfolioData.map((item, i) => (
                    <div
                        key={i}
                        className="port_item relative transition-transform duration-500 flex items-start "
                    >
                        <div className="img_box overflow-hidden rounded-lg w-80 h-fit">
                            <IconImaqe imageSrc={item.img}
                                       title={item.title}
                                       imgClassName={`w-full h-auto object-contain`}
                            />

                        </div>
                        <h3 className="mt-4 text-center text-xl font-semibold">
                            {item.title}
                        </h3>
                        {/*<a*/}
                        {/*    href={item.link}*/}
                        {/*    className="link_wrap absolute inset-0 z-10"*/}
                        {/*    target="_blank"*/}
                        {/*    rel="noopener noreferrer"*/}
                        {/*></a>*/}
                    </div>
                ))}
            </div>
        </section>
    );
}

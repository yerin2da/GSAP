// src/sections/Pf.tsx

import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import IconImaqe from "../components/IconImaqe";
import BackImaqe from "../components/BackImage";

export default function Pf() {
    const sectionRef = useRef<HTMLDivElement>(null);//TypeScript로 해당 참조가 HTMLDivElement라는 것을 명시

    useEffect(() => {
        const ctx = gsap.context(() => {

            //카드 DOM 수집
            const cards = gsap.utils.toArray<HTMLDivElement>(".pf-card");// GSAP에서 반복 애니메이션을 적용
                                                                //해당 배열 안에 들어오는 요소들이 모두 <div>라고 알려줌

            // 섹션 전체 pin 및 scrollTrigger 영역 확보
            gsap.to(sectionRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1200%",
                    pin: true,//섹션을 고정해서 한 장면처럼 보여주는 효과
                    scrub: true,
                },
            });

            // 카드 6장 순차 등장 with timeline
            const tl = gsap.timeline({//여러 애니메이션을 순차적으로 연결할 수 있는 타임라인
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: "+=1200%",
                    scrub: true,//스크롤 진도와 애니메이션 진행률을 1:1로 연결
                },
            });

            cards.forEach((card) => {
                tl.fromTo(
                    card,
                    { opacity: 0, scale: 0.7 },
                    { opacity: 1, scale: 1, ease: "power2.out" }
                );
            });
        //
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            className="section min-h-screen flex flex-col items-center justify-center py-20 px-4 snap-start"
        >
            <h2
                className="text-3xl font-bold mb-10 bg-black z-50"
            >
                Pf
            </h2>
            <div className="relative w-72 h-72">
                {[...Array(6)].map((_, i) => (//해당 배열을 펼쳐서(스프레드) 실제 요소 배열로 변환
                                            //현재 배열의 요소 값 , 해당 요소의 인덱스 값
                    <div
                        key={i}
                        className="pf-card absolute inset-0 bg-gray-800 aspect-square rounded-md flex items-center justify-center text-white text-4xl font-bold"
                        style={{ zIndex: i + 1 }}//i가 커질수록 z-index도 커져서 나중에 나타나는 카드가 앞쪽
                    >
                        <BackImaqe
                            imageSrc={`main/pf_img${i + 1}.png`}
                            title="작품"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

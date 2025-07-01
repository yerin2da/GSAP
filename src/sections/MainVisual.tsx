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
                y: 80,//절대 위치 이동 (기준: px)
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

            //이미지 패럴럭스-오른쪽 그림
            gsap.to(".back-image", {
               opacity: 1,
               xPercent:20,//상대 위치 이동 (기준: %)
               yPercent:-20,
               ease: "none",//애니메이션 속도가 일정
               scrollTrigger:{
                   trigger: sectionRef.current,//스크롤 트리거가 어느 요소에 반응할지
                   start:"top top",
                   end:"bottom top",
                   scrub: true,
               }
            });


            //이미지 패럴럭스-왼쪽 그림
            gsap.to(".back-image2", {
               opacity: 1,
               xPercent:-30,
               yPercent:5,
               ease: "none",
               scrollTrigger:{
                   trigger: sectionRef.current,
                   start:"top top",
                   end:"bottom top",
                   scrub: true,
               }
            });

            // 이미지 등장 애니메이션 (처음에 나타남)
            gsap.from(".back-image", {
                opacity: 0.5,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                },
            });


            gsap.from(".back-image2", {
                opacity: 0.5,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top center",
                },
            });

            // 설명글
            gsap.from(".intro-text", {
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                },
            });
            gsap.to(".intro-text", {
                opacity: 0,
                ease: "none",//애니메이션 속도가 일정
                scrollTrigger:{
                    trigger: sectionRef.current,//스크롤 트리거가 어느 요소에 반응할지
                    start:"top top",
                    end:"bottom top",
                    scrub: true,
                }
            });


        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="hero"
            ref={sectionRef}
            className="section min-h-screen flex items-center justify-center text-center overflow-hidden"
        >
            <div className="w-full max-w-[1980px] mx-auto relative">
                <p className="intro-text opacity-100 uppercase tracking-wide text-sm text-gray-200 mb-4">
                    super lorem abstract brand — powered by direction
                </p>
                <div className={`relative z-10 bg-opacity-80 backdrop-blur py-8`}>
                    <h1 className="relative z-10 text-center leading-[0.8] text-7xl md:text-8xl lg:text-9xl mb-8 flex flex-col items-center justify-center">
                        <span className="">Creative</span>
                        <span className="">Design</span>
                    </h1>
                </div>

                <div className={`relative z-50 pl-40 pt-10`}>
                    <TailButton
                        bcolor={`text-black bg-white`}
                        caption={`Get a Quote`}
                    />
                </div>

                {/* 이미지 */}
                <div className="opacity-50 back-image absolute -top-[36%] right-0 aspect-square h-60 md:h-80 lg:h-96 xl:h-full z-0">
                    <BackImaqe imageSrc="main/pf_img1.png" title="메인비주얼 작품1"/>
                </div>
                <div className="opacity-50 back-image2 absolute -bottom-[36%] left-0 aspect-square h-60 md:h-80 lg:h-96 xl:h-full z-0">
                    <BackImaqe imageSrc="main/pf_img6.png" title="메인비주얼 작품2"/>
                </div>

            </div>

        </section>
    );
}

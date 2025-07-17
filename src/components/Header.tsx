import { useEffect, useState } from "react";

export default function Header() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 10) {
                setHidden(true);
            } else {
                setHidden(false);
            }
        };

        window.addEventListener("scroll", handleScroll);//✅ 사용자의 스크롤 감지
        return () => window.removeEventListener("scroll", handleScroll);// ✅ 컴포넌트 제거 시 정리
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 text-white bg-opacity-80 backdrop-blur border-b border-white/10 h-16 transition-transform duration-300 ${
                hidden ? "-translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="text-xl font-bold tracking-widest">LOGO</div>
                {/*<nav className="flex items-center gap-6 text-sm font-medium">*/}
                {/*    <a href="#hero" className="hover:text-gray-400">Home</a>*/}
                {/*    <a href="#portfolio" className="hover:text-gray-400">Sec1</a>*/}
                {/*    <a href="#about" className="hover:text-gray-400">Sec4</a>*/}
                {/*    <a href="#contact" className="hover:text-gray-400">Contact</a>*/}
                {/*</nav>*/}
            </div>
        </header>
    );
}

import React, { useRef, useState } from 'react';

interface Props {
    btnText?: string;
    onClick?: () => void;// 아무것도 받지 않고(void), 아무것도 반환하지 않는다(void):비어있음"
}
const HoverRippleButton: React.FC<Props> = ({btnText = "Click" , onClick}) => {
    const btnRef = useRef<HTMLButtonElement>(null);
    const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });
    const [hovered, setHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = btnRef.current?.getBoundingClientRect();
        if (!rect) return;
        setCirclePos({
            top: e.clientY - rect.top,
            left: e.clientX - rect.left,
        });
    };

    return (
        <button
            ref={btnRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative  bg-white text-black font-bold text-xl
             transition-colors duration-300 ease-in-out overflow-hidden
             px-3 py-1 rounded-sm min-w-28"
            onClick={onClick}
        >
            {/* 글자 */}
            <span
                className={`relative z-10 transition-colors duration-300 ${
                    hovered ? 'text-white' : 'text-black'
                }`}
            >
                {btnText}
            </span>

            {/* 퍼지는 원형 배경 */}
            <span
                className={`absolute rounded-full bg-green-600 transition-all duration-500 ease-out pointer-events-none z-0`}
                style={{
                    top: `${circlePos.top}px`,
                    left: `${circlePos.left}px`,
                    width: hovered ? '250%' : '0px',
                    height: hovered ? '300%' : '0px',
                    transform: 'translate(-50%, -50%)',
                    backgroundImage: 'linear-gradient(11deg, rgb(245, 237, 71) 12%, rgb(128, 245, 232) 100%)', // 그라데이션 색상
                }}
            />
        </button>
    );
};

export default HoverRippleButton;
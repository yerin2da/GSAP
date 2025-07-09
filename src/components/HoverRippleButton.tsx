import React, { useRef, useState } from 'react';

const HoverRippleButton: React.FC = () => {
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
            className="relative overflow-hidden border-2 border-green-600 bg-white text-black font-semibold text-base px-6 py-3 transition-colors duration-300 ease-in-out"
        >
            {/* 글자 */}
            <span
                className={`relative z-10 transition-colors duration-300 ${
                    hovered ? 'text-white' : 'text-black'
                }`}
            >
                Hover Me
            </span>

            {/* 퍼지는 원형 배경 */}
            <span
                className={`absolute rounded-full bg-green-600 transition-all duration-500 ease-out pointer-events-none z-0`}
                style={{
                    top: `${circlePos.top}px`,
                    left: `${circlePos.left}px`,
                    width: hovered ? '450px' : '0px',
                    height: hovered ? '450px' : '0px',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </button>
    );
};

export default HoverRippleButton;
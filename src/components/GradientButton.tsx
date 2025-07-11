import React from "react";

export default function GradientButton() {
    return (
        <button className="relative overflow-hidden px-6 py-3 rounded-full text-white font-semibold group border border-white">
            {/* 대각선 채워지는 배경 */}
            <span
                className="absolute inset-0 bg-gradient-to-tr from-yellow-400 via-green-300 to-cyan-300 rounded
                   transform scale-0 origin-bottom-left rotate-0 transition-transform duration-500
                   group-hover:scale-[1.5] z-0"
            ></span>

            {/* 텍스트는 위에 고정 */}
            <span className="relative z-10">GRADIENT BUTTON</span>
        </button>
    );
}

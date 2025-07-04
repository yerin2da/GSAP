/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tailwind가 적용될 파일 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        noto: ["Noto Sans KR", "sans-serif"],
        pretendard: ["Pretendard", "sans-serif"],
      },
      colors: {
        mainColor: '#3BBD2A', // 메인컬러
        darkGreen: '#266D00', //
        midGreen: '#9EDE95', //
        lightGreen: '#E6F8DD', //

        mainBg: '#f6f6f6',//전체 배경색
        subColor: '#6B1FC8', // 서브컬러
        subColor2: '#9C59FF', // 서브컬러
        subBurgundy: '#C000B9', // 서브컬러
        midPurple: '#E4D2FF', //미드 보라
        lightPurple: '#F7F1FF', //연한 보라
        textBlack: '#333',
        midBlack: '#2F2E33',
        textWhite: '#fff',
        textGray: '#9ca3af',
        textDarkGray: '#8e9097',
        midGray: '#f2f3f7',
        textLightGray: '#e6e6e6',
        //jeju
        darkPurpleJj: '#817ECC',
        midPurpleJj: '#DDDFF8',
        lightPurpleJj: '#EFF0F8',
        zeroPurpleJj: '#F5F7FA',
      },
      boxShadow: {
        shadowTop: "2px 2px 5px #9999991a",
        shadowBottom: "0px -1px 5px #9999991a",
        shadowBase: "2px 2px 5px rgba(0,0,0,0.1)",
        topInner: 'inset 0px -4px 6px rgba(0, 0, 0, 0.07)',
        fit:'5px 6px 4px 0 rgba(0, 0, 0, 0.25)',
      },
      screens: {//브레이크포인트
        xxs: "360px",  // 360 ~ 479.98px
        xs: "480px", //480 ~ 639.98px
        sm: "640px",      // 640px ~ 767.98px: 일반 모바일 (아이폰, 갤럭시 중형 등)
        md: "768px",      // 768px ~ 1023.98px: 태블릿
        lg: "1024px",     // 1024px ~ 1279.98px: 작은 노트북, 태블릿 가로모드
        xl: "1280px",     // 1280px ~ 1535.98px: 데스크탑
        "2xl": "1536px"   // 1536px 이상: 대형 화면 (와이드 모니터 등)
      },
      fontSize: {//클램프
        'xs': 'clamp(12px, 0.75rem + 0.1vw, 13px)',
        'sm': 'clamp(13px, 0.8125rem + 0.2vw, 15px)',
        'base': 'clamp(15px, 0.9375rem + 0.25vw, 17px)',
        'lg': 'clamp(17px, 1.0625rem + 0.3vw, 19px)',
        'xl': 'clamp(21px, 1rem + 0.5vw, 24px)',
        '2xl': 'clamp(22px, 1.25rem + 0.75vw, 30px)',
        '3xl': 'clamp(24px, 1.5rem + 1vw, 36px)',
        '4xl': 'clamp(30px, 1.75rem + 1.25vw, 48px)',
        '5xl': 'clamp(40px, 2.75rem + 2vw, 72px)',
        '6xl': 'clamp(52px, 3.75rem + 3vw, 96px)',
        '7xl': 'clamp(66px, 5.5rem + 4vw, 144px)',
        '8xl': 'clamp(78px, 8rem + 5vw, 200px)',
        '9xl': 'clamp(80px, 12rem + 5vw, 320px)'
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // 폼 스타일 적용 방식
    }),
  ],
};

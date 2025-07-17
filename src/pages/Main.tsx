// src/pages/Home.tsx

import MainVisual from "../sections/MainVisual";
import Sec1 from "../sections/Sec1";
import Sec4 from "../sections/Sec4";
import Sec3 from "../sections/Sec3";
import Contact from "../sections/Contact";
import Sec2 from "../sections/Sec2";

export default function Main() {
    return (
        <div className="text-white">

            <MainVisual />

            <div className="max-w-[1920px] mx-auto px-10 overflow-hidden">
                <Sec1 />
                <Sec2 />
            </div>

            <div className="max-w-[2560px] overflow-hidden">
                <Sec3 />
            </div>

            <div className="max-w-[1920px] mx-auto px-10 overflow-hidden">
                <Sec4 />
                <Contact />
            </div>

        </div>
    );
}

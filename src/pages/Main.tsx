// src/pages/Home.tsx

import MainVisual from "../sections/MainVisual";
import Pf from "../sections/Pf";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Pf2 from "../sections/Pf2";

export default function Main() {
    return (
        <div className="text-white">

            <MainVisual />

            <div className="max-w-[1920px] mx-auto px-10 overflow-hidden">
                <Pf />
                <Pf2 />
                <Testimonials />
                <About />
                <Contact />
            </div>


        </div>
    );
}

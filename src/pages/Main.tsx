// src/pages/Home.tsx

import MainVisual from "../sections/MainVisual";
import CenterShow from "../sections/CenterShow";
import About from "../sections/About";
import RowFlow from "../sections/RowFlow";
import Contact from "../sections/Contact";
import ArticleText from "../sections/ArticleText";

export default function Main() {
    return (
        <div className="text-white">

            <MainVisual />

            <div className="max-w-[1920px] mx-auto px-10 overflow-hidden">
                <CenterShow />
                <ArticleText />
                <RowFlow />
                <About />
                <Contact />
            </div>


        </div>
    );
}

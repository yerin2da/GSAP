// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../sections/Hero";
import Pf from "../sections/Pf";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Pf2 from "../sections/Pf2";

export default function Main() {

    return (
        <div className="bg-black text-white font-sans ">
            <Header />
            <Hero />
            {/*<Pf />*/}
            <Pf2 />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

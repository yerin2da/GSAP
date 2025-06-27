// src/pages/Home.tsx
import Header from "../components/Header";
import Hero from "../sections/Hero";
import Pf from "../sections/Pf";
import About from "../sections/About";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Main() {

    return (
        <div className="bg-black text-white font-sans ">
            <Header />
            <Hero />
            <Pf />
            <About />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
}

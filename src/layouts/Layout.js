import Header from "./Header";
import Hero from "../sections/Hero";


export default function Layout() {

    return (
        <main className="bg-black text-white font-sans">
            <Header/>
            <Hero/>
            <Portfolio/>
            <About/>
            <Testimonials/>
            <Contact/>
            <Footer/>
        </main>
    );
}

import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoverRippleButton from "../components/HoverRippleButton";

export default function Contact() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 전체 애니메이션 지속시간
            once: false      // 반복
        });
    }, []);

    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10" data-aos="fade-up">
                    Contact
                </h2>
                <form className="space-y-6">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-black border border-white/20 rounded focus:border-white"
                           data-aos="fade-right" data-aos-delay="50"
                    />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-black border border-white/20 rounded focus:border-white"
                           data-aos="fade-right" data-aos-delay="50"
                    />
                    <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 bg-black border border-white/20 rounded focus:border-white"
                              data-aos="fade-right" data-aos-delay="50"
                    />
                    <button type="submit" className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                        Send
                    </button>

                    <HoverRippleButton/>
                </form>
            </div>
        </section>
    );
}
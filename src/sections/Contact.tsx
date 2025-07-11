import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import HoverRippleButton from "../components/HoverRippleButton";

export default function Contact() {
    useEffect(() => {
        AOS.init({
            // duration: 1000, // 전체 애니메이션 지속시간
            once: false      // 반복
        });
    }, []);

    return (
        <section id="contact" className="px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-normal mb-14 bg-black z-50"
                    data-aos="fade-up"
                >
                    Contact
                </h2>
                <form className="space-y-6">
                    <div className={`flex flex-col items-start`}>
                        <p>Name</p>
                        <input type="text" placeholder="Enter your name" name={`name`} autoComplete={`name`}
                               className="w-full p-2 bg-black !border-0 !border-b border-white/60 !rounded-none focus:border-white"
                               data-aos="fade-right" data-aos-delay="50"
                        />
                    </div>
                    <div className={`flex flex-col items-start`}>
                        <p>Email</p>
                        <input type="email" placeholder="Enter your email" name={`email`} autoComplete={`email`}
                               className="w-full p-2 bg-black !border-0 !border-b border-white/60 !rounded-none focus:border-white"
                               data-aos="fade-right" data-aos-delay="50"
                        />
                    </div>
                    <div className={`flex flex-col items-start space-y-3`}>
                        <p>Message</p>
                        <textarea placeholder="Enter your message here" rows={4} name={`message`}
                                  className="w-full p-2 bg-black !border-0 !border-b border-white/60 focus:border-white"
                                  data-aos="fade-right" data-aos-delay="50"
                        />
                    </div>
                    <HoverRippleButton btnText="Send"/>
                </form>
            </div>
        </section>
    );
}
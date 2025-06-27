export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10">Contact</h2>
                <form className="space-y-6">
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-black border border-white/20 rounded" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-black border border-white/20 rounded" />
                    <textarea placeholder="Message" rows={4} className="w-full px-4 py-2 bg-black border border-white/20 rounded" />
                    <button type="submit" className="px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
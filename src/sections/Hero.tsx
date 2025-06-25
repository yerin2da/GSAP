export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center text-center px-4">
            <div className="max-w-5xl mx-auto">
                <p className="uppercase tracking-wide text-sm text-gray-400 mb-4">super lorem abstract brand — powered by direction</p>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
                    Creative <br className="hidden md:block" /> Design
                </h1>
                <button className="px-6 py-3 bg-white text-black font-semibold text-sm rounded hover:bg-gray-200 transition">
                    Get a Quote
                </button>

                {/* 이미지 공간 */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-800 h-60 w-full rounded-md" />
                    <div className="bg-gray-800 h-60 w-full rounded-md" />
                </div>
            </div>
        </section>
    );
}

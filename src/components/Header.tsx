export default function Header() {
    return (
        <header className="sticky top-0 z-50 text-white bg-opacity-80 backdrop-blur border-b border-white/10 h-16">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
                <div className="text-xl font-bold tracking-widest">LOGO</div>
                <nav className="flex items-center gap-6 text-sm font-medium">
                    <a href="#hero" className="hover:text-gray-400">Home</a>
                    <a href="#pf" className="hover:text-gray-400">Pf</a>
                    <a href="#about" className="hover:text-gray-400">About</a>
                    <a href="#contact" className="hover:text-gray-400">Contact</a>
                </nav>
            </div>
        </header>
    );
}

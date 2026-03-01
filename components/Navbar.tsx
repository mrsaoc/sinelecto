import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 w-full border-b border-white/10 bg-[#111111]/80 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-widest text-white hover:text-neon-green transition-colors">
                    S.L.
                </Link>
                <nav className="flex gap-8">
                    <Link href="/manifesto" className="text-sm uppercase tracking-widest text-gray-400 hover:text-neon-pink transition-colors">
                        Manifesto
                    </Link>
                    <Link href="/convite" className="text-sm uppercase tracking-widest text-gray-400 hover:text-neon-purple transition-colors">
                        Convite
                    </Link>
                </nav>
            </div>
        </header>
    );
}
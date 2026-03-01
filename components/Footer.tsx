export default function Footer() {
    return (
        <footer className="w-full border-t border-white/10 bg-[#111111] py-8 mt-auto z-40 relative overflow-hidden">
            {/* Linha de energia sutil no topo do footer */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-xs text-gray-600 uppercase tracking-widest font-mono">
                <p className="hover:text-gray-300 transition-colors duration-300">
                    © 2026 SINE LECTO. A vigília é absoluta.
                </p>

                <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-neon-green transition-colors cursor-pointer">
            Protocolos de Segurança
          </span>
                    <span className="hover:text-neon-pink transition-colors cursor-pointer">
            Termos de Ascensão
          </span>
                </div>
            </div>
        </footer>
    );
}
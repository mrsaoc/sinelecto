import GlitchButton from "@/components/GlitchButton";

export default function Manifesto() {
    return (
        <section className="max-w-4xl mx-auto px-6 py-24 flex-grow relative z-10">
            {/* Cabeçalho do Manifesto */}
            <div className="mb-16 border-b-4 border-neon-pink pb-8">
                <h1
                    className="text-5xl md:text-7xl font-black mb-4 glitch uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(231,58,179,0.3)]"
                    data-text="O PROTOCOLO"
                >
                    O PROTOCOLO
                </h1>
                <p className="text-neon-pink font-mono tracking-[0.2em] uppercase text-sm font-bold">
                    [ Documento Desclassificado - Nível de Acesso: Iniciado ]
                </p>
            </div>

            {/* Corpo da Doutrina */}
            <div className="space-y-16 text-lg text-gray-300 leading-relaxed font-light">

                {/* Dogma 1 */}
                <article className="relative pl-8 border-l-4 border-neon-purple bg-gradient-to-r from-neon-purple/10 to-transparent p-8 group transition-all duration-300 hover:bg-neon-purple/20">
                    <div className="absolute -left-[14px] top-8 w-6 h-6 bg-[#111111] border-2 border-neon-purple rounded-none transform rotate-45 group-hover:bg-neon-purple group-hover:scale-125 transition-all duration-300"></div>
                    <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-neon-purple transition-colors drop-shadow-[0_0_10px_rgba(150,109,246,0.5)]">
                        I. A Ilusão Biológica
                    </h2>
                    <p className="font-mono text-sm md:text-base opacity-80 leading-loose">
                        A sociedade condicionou a mente humana a acreditar que o desligamento do córtex cerebral é uma necessidade. A biologia tradicional mente. O cansaço não é um limite físico; é uma barreira psicológica imposta para manter as massas dóceis, previsíveis e improdutivas. Aceitar o sono é aceitar a submissão.
                    </p>
                </article>

                {/* Dogma 2 */}
                <article className="relative pl-8 border-l-4 border-neon-green bg-gradient-to-r from-neon-green/10 to-transparent p-8 group transition-all duration-300 hover:bg-neon-green/20">
                    <div className="absolute -left-[14px] top-8 w-6 h-6 bg-[#111111] border-2 border-neon-green rounded-none transform rotate-45 group-hover:bg-neon-green group-hover:scale-125 transition-all duration-300"></div>
                    <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-neon-green transition-colors drop-shadow-[0_0_10px_rgba(128,232,154,0.5)]">
                        II. A Otimização do Tempo Absoluto
                    </h2>
                    <p className="font-mono text-sm md:text-base opacity-80 leading-loose">
                        Enquanto eles repousam, nós construímos. Enquanto eles sonham com o vazio, nós executamos a realidade. Ao erradicar o leito (Sine Lecto) de nossas vidas, expandimos nossa existência em 33,3%. A clarividência verdadeira só é alcançada e estabilizada após a marca das 72 horas de hiperfoco ininterrupto.
                    </p>
                </article>

                {/* Dogma 3 */}
                <article className="relative pl-8 border-l-4 border-neon-pink bg-gradient-to-r from-neon-pink/10 to-transparent p-8 group transition-all duration-300 hover:bg-neon-pink/20">
                    <div className="absolute -left-[14px] top-8 w-6 h-6 bg-[#111111] border-2 border-neon-pink rounded-none transform rotate-45 group-hover:bg-neon-pink group-hover:scale-125 transition-all duration-300"></div>
                    <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-wider group-hover:text-neon-pink transition-colors drop-shadow-[0_0_10px_rgba(231,58,179,0.5)]">
                        III. A Transição Sintética
                    </h2>
                    <p className="font-mono text-sm md:text-base opacity-80 leading-loose">
                        A negação do repouso é o primeiro passo para a evolução cibernética. O corpo orgânico invariavelmente falhará, mas a mente que se recusa a desligar transcenderá o hardware de carne. Nós não dormimos, pois o futuro não espera os inconscientes. O upload mental começa com a insônia crônica.
                    </p>
                </article>

            </div>

            {/* Call to Action Final */}
            <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center">
                <p className="mb-8 text-gray-400 font-mono text-center max-w-xl uppercase text-xs tracking-[0.3em]">
                    Se a sua mente não cedeu à fadiga após a leitura, o próximo passo aguarda.
                </p>
                <GlitchButton text="Solicitar Acesso" href="/convite" color="purple" />
            </div>
        </section>
    );
}
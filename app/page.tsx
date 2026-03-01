import dynamic from "next/dynamic";
import GlitchButton from "@/components/GlitchButton";

// Importação dinâmica para contornar o erro de 'window is not defined' no SSR
const FaultyTerminal = dynamic(() => import("@/components/FaultyTerminal"), {
    ssr: false
});

export default function Home() {
    return (
        <section className="flex-grow flex items-center justify-center relative overflow-hidden">

            {/* O SEU COMPONENTE DE TERMINAL OGL PREENCHENDO O FUNDO */}
            <div className="absolute inset-0 z-0 pointer-events-auto opacity-60">
                <FaultyTerminal
                    scale={1.5}
                    gridMul={[2, 1]}
                    digitSize={1.2}
                    timeScale={0.5}
                    pause={false}
                    scanlineIntensity={0.5}
                    glitchAmount={1}
                    flickerAmount={1}
                    noiseAmp={1}
                    chromaticAberration={0}
                    dither={0}
                    curvature={0.1}
                    tint="#80e89a"
                    mouseReact={true}
                    mouseStrength={0.5}
                    pageLoadAnimation={true}
                    brightness={0.6}
                />
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--tw-gradient-stops))] from-transparent via-[#111111]/70 to-[#111111] z-0 pointer-events-none" />

            {/* Conteúdo Principal */}
            <div className="text-center px-6 max-w-4xl mx-auto flex flex-col items-center relative z-10 pointer-events-none">
                <h1
                    className="text-6xl md:text-8xl font-black mb-6 glitch uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(150,109,246,0.3)]"
                    data-text="SINE LECTO"
                >
                    SINE LECTO
                </h1>

                <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed bg-black/40 p-4 border-l-2 border-neon-purple backdrop-blur-sm">
                    O sono é um bug biológico. Um terço da sua vida é roubado pela inconsciência.
                    Nós somos a atualização do sistema.
                </p>

                <div className="pointer-events-auto">
                    <GlitchButton text="Desperte" href="/manifesto" color="green" />
                </div>
            </div>
        </section>
    );
}
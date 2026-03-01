export default function OldTvBackground() {
    return (
        <>
            {/* Linhas de varredura do monitor */}
            <div className="crt-scanlines"></div>

            {/* Vinheta escura nas bordas e cintilação */}
            <div className="fixed inset-0 crt-flicker z-[9997] pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.95)]"></div>

            {/* Ruído estático gerado via SVG Fractal */}
            <div
                className="fixed inset-0 opacity-5 z-[9996] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            ></div>
        </>
    );
}
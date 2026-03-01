"use client";

import { useState } from "react";
import GlitchButton from "@/components/GlitchButton";

export default function Convite() {
    const [status, setStatus] = useState("AWAITING_INPUT");
    const [formData, setFormData] = useState({ id: "", key: "" });
    const [isProcessing, setIsProcessing] = useState(false);

    const handleAscension = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.id || !formData.key) {
            setStatus("ERR: DADOS INCOMPLETOS");
            return;
        }

        setIsProcessing(true);
        setStatus("PROCESSANDO_SINAPSES...");

        // Falsa sequência de carregamento e validação neural
        setTimeout(() => setStatus("VERIFICANDO_HISTÓRICO_DE_VIGÍLIA..."), 1500);
        setTimeout(() => setStatus("ANOMALIA_DETECTADA"), 3500);
        setTimeout(() => {
            setStatus("FALHA CRÍTICA: SONO RECENTE DETECTADO. ACESSO NEGADO.");
            setIsProcessing(false);
        }, 5000);
    };

    return (
        <section className="flex-grow flex items-center justify-center p-6 relative z-10">
            <div className="w-full max-w-lg border border-neon-purple/40 bg-black/60 backdrop-blur-md p-10 relative shadow-[0_0_40px_rgba(150,109,246,0.15)]">
                {/* Cantos decorativos cibernéticos */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-purple" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-purple" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-purple" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-purple" />

                <h1
                    className="text-3xl mb-2 text-white font-bold tracking-widest uppercase text-center glitch"
                    data-text="Iniciação"
                >
                    Iniciação
                </h1>

                <div className="h-6 mb-8 flex justify-center items-center">
                    <p className={`text-xs font-mono tracking-widest uppercase ${status.includes("ERR") || status.includes("FALHA") ? "text-neon-pink" : "text-neon-green animate-pulse"}`}>
                        Status: {status}
                    </p>
                </div>

                <form className="space-y-8" onSubmit={handleAscension}>
                    <div className="relative group">
                        <label className="block text-xs uppercase tracking-widest text-neon-green mb-2">
                            Identificador Neural (Nome)
                        </label>
                        <input
                            type="text"
                            disabled={isProcessing}
                            value={formData.id}
                            onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-600 focus:border-neon-green outline-none py-2 text-white transition-colors font-mono focus:bg-neon-green/5 pl-2 disabled:opacity-50"
                            placeholder="Digite sua designação..."
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-neon-green w-0 group-focus-within:w-full transition-all duration-300"></div>
                    </div>

                    <div className="relative group">
                        <label className="block text-xs uppercase tracking-widest text-neon-purple mb-2">
                            Chave de Vigília (Código)
                        </label>
                        <input
                            type="password"
                            disabled={isProcessing}
                            value={formData.key}
                            onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                            className="w-full bg-transparent border-b border-gray-600 focus:border-neon-purple outline-none py-2 text-white transition-colors font-mono focus:bg-neon-purple/5 pl-2 tracking-[0.3em] disabled:opacity-50"
                            placeholder="••••••••"
                        />
                        <div className="absolute bottom-0 left-0 h-[1px] bg-neon-purple w-0 group-focus-within:w-full transition-all duration-300"></div>
                    </div>

                    <div className="pt-6 w-full flex justify-center">
                        {/* Como ele está dentro de um form, o comportamento nativo de clique já aciona o onSubmit */}
                        <div className={isProcessing ? "opacity-50 pointer-events-none w-full" : "w-full flex justify-center"}>
                            <GlitchButton text="Submeter Consciência" color="pink" className="w-full flex justify-center" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
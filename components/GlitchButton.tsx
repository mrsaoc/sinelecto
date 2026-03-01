import Link from "next/link";

interface GlitchButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    color?: "green" | "pink" | "purple";
    className?: string;
}

export default function GlitchButton({ text, href, onClick, color = "green", className = "" }: GlitchButtonProps) {
    const colorStyles = {
        green: "border-neon-green text-neon-green hover:bg-neon-green hover:text-[#111111]",
        pink: "border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-[#111111]",
        purple: "border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-[#111111]",
    };

    const glowColors = {
        green: "text-neon-pink",
        pink: "text-neon-green",
        purple: "text-neon-pink",
    };

    const ButtonContent = (
        <button
            onClick={onClick}
            className={`group relative px-8 py-4 border uppercase tracking-widest font-bold overflow-hidden transition-colors duration-200 ${colorStyles[color]} ${className}`}
        >
      <span className="relative z-10 transition-transform duration-100 group-hover:-translate-x-1 group-hover:translate-y-[1px] block">
        {text}
      </span>

            {/* Camada de Glitch Oculta que aparece no Hover */}
            <div className={`btn-glitch-layer group-hover:opacity-100 group-hover:animate-pulse z-20 ${glowColors[color]}`}>
                <span className="absolute -left-1 font-black mix-blend-difference">{text}</span>
                <span className="absolute left-1 text-white mix-blend-difference opacity-70">{text}</span>
            </div>
        </button>
    );

    if (href) {
        return <Link href={href}>{ButtonContent}</Link>;
    }

    return ButtonContent;
}
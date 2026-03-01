import type { Metadata } from "next";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OldTvBackground from "@/components/OldTvBackground";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sine Lecto | A Vigília Eterna",
    description: "O sono é uma falha de design do corpo humano. Junte-se à Ascensão.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR">
        <body className="min-h-screen flex flex-col pt-20 relative">
        <OldTvBackground />
        <NavBar />
        <main className="flex-grow flex flex-col relative z-10">
            {children}
        </main>
        <Footer />
        </body>
        </html>
    );
}
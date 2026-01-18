import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

export const metadata: Metadata = {
    title: "AutoCare & Tuning - Chăm sóc và Tuning xe chuyên nghiệp",
    description:
        "Dịch vụ chăm sóc và tuning xe hơi chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="vi" className="dark">
        <head>
            <link
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
                rel="stylesheet"
            />
        </head>
        <body
            className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300`}
        >
        <Header />

        {/* ✅ ĐÃ FIX: KHÔNG flex, KHÔNG w-full, KHÔNG justify-center */}
        <main className="flex-grow">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}

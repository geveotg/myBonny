import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "./lib/AntdRegistry";
import Header from "./navigation/header/header";
import Footer from "./navigation/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "My Bonny",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <StyledComponentsRegistry>
                <body className={inter.className}>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </StyledComponentsRegistry>
        </html>
    );
}

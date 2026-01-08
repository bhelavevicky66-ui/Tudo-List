import { TodoProvider } from "@/store/todo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Todo Next + TypeScript",
    description: "A modern todo application built with Next.js and TypeScript",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <TodoProvider>{children}</TodoProvider>
            </body>
        </html>
    );
}

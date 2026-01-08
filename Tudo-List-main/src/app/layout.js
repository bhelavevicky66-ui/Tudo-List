import { TodoProvider } from "@/store/todo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Todo Next + TypeScript",
    description: "A modern todo application built with Next.js and TypeScript",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={inter.className}
                style={{
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box",
                    fontFamily: inter.style.fontFamily,
                }}
            >
                <TodoProvider>{children}</TodoProvider>
            </body>
        </html>
    );
}

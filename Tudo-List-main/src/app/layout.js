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
                    fontFamily: inter.style.fontFamily,
                }}
            >
                <style dangerouslySetInnerHTML={{
                    __html: `
            * {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            body {
              line-height: 1.5;
              -webkit-font-smoothing: antialiased;
            }
            button, input, textarea, select {
              font: inherit;
            }
          `
                }} />
                <TodoProvider>{children}</TodoProvider>
            </body>
        </html>
    );
}

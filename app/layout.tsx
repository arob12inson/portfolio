import type { Metadata } from "next";
import { Alegreya_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/Nav";

const inter = Alegreya_Sans({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aidan Robinson",
  description: "My Wonderful Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

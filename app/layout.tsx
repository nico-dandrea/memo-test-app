import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "@/app/ApolloWrapper";
import Box from "@/components/Box";
import HomeLink from "./HomeLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex h-screen bg-gradient-to-b from-yellow-200 to-amber-300 justify-center items-center">
          <Box className=" bg-white p-8 rounded-lg shadow-lg text-pink-600">
            <HomeLink className="text-center" title="Memo Test" subtitle="How high can you go?"/>
            <Box className="border-t my-4 mb-6"></Box>
            <ApolloWrapper>
              {children}
            </ApolloWrapper>
          </Box>
        </section>
      </body>
    </html>
  );
}

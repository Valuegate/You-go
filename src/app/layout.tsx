"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Providers from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata: Metadata = {
    title: "YouGo",
    description: "YouGo",
  };
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <body className={inter.className}>
          {/* <Providers>{children}</Providers> */}
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}

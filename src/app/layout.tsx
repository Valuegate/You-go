"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: "YouGo",
  description: "YouGo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

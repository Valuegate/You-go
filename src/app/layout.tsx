"use client";
import "./globals.css";
import type { Metadata } from "next";
import React, { useEffect, useState } from "react";
import { hasCookie, setCookie } from "cookies-next";

import { Roboto } from "next/font/google";
import Providers from "./providers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import CookieConsentBanner from "../components/Cookie/Cookie";

const inter = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
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
    description: "Join the shopping revolution",
  };

  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(!hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true");
    setShowConsent(true);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <link rel="icon" href="./icon.ico" type="image/x-icon" />
        <body className={inter.className}>
          {/* <Providers>{children}</Providers> */}
          {children}
          {showConsent && <CookieConsentBanner handleAccept={acceptCookie} />}
        </body>
      </html>
    </QueryClientProvider>
  );
}

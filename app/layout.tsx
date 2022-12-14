"use client";
import React from "react";
import { Header } from "../components/Header";
import "../styles/globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}

import React from "react";
import "../styles/globals.css";

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

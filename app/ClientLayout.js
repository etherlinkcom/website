"use client"

import { ThemeProvider } from "next-themes";
import { FaucetProvider } from "../components/contexts/FaucetContext";
import "../css/tailwind.css";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class" a defaultTheme="dark">
      <FaucetProvider>
        {children}
      </FaucetProvider>
    </ThemeProvider>
  );
}

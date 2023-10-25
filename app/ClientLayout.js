"use client"

import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider attribute="class"a defaultTheme="dark">
        { children }
    </ThemeProvider>
  );
}

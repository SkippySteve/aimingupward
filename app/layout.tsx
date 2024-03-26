import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "@/app/page";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout(){
  return (
    <html lang="en">
      <body>
      <Home/>
      </body>
    </html>
  );
}

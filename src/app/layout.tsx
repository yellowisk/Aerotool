import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aerotool",
  description: "Aircraft Tool Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={twMerge(
          inter.className,
          "bg-white text-black dark:bg-neutral-950 dark:text-white antialiased"
        )}
      >
        {children}
      </body>
      <Toaster />
    </html>
  );
}

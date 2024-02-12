import { Sidebar } from "@/components/utils/sidebar/sidebar";
import React from "react";

export default function AppLayout({
  children,
}: Readonly<{ children?: React.ReactNode }>) {
  return (
    <div className="flex flex-1 h-screen py-2">
      <Sidebar />
      {children}
    </div>
  );
}

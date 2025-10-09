"use client";

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import TopTabs from "./components/TopTabs";
import EditorPane from "./components/EditorPane";
import StatusBar from "./components/StatusBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [activeFile, setActiveFile] = useState("Hero.tsx");

  return (
    <html lang="en">
      <body className="bg-[#1e1e1e] text-white font-mono">
        <div className="flex h-screen w-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />

          {/* Main Editor */}
          <div className="flex flex-col flex-1">
            {/* Tabs */}
            <TopTabs activeFile={activeFile} />

            {/* Content Area */}
            {/* ✅ pass setActiveFile down */}
            <EditorPane activeFile={activeFile} setActiveFile={setActiveFile} />

            {/* Status Bar */}
            <StatusBar />
          </div>
        </div>
      </body>
    </html>
  );
}
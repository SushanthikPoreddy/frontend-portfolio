"use client";

import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import TopTabs from "./components/TopTabs";
import EditorPane from "./components/EditorPane";
import StatusBar from "./components/StatusBar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [activeFile, setActiveFile] = useState("Hero.tsx");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Auto-close sidebar on window resize up to large screens (prevents stale open drawer)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setSidebarOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <html lang="en">
      <body className="bg-[#1e1e1e] text-white font-mono">
        <div className="flex h-svh w-screen overflow-hidden">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <Sidebar
              activeFile={activeFile}
              setActiveFile={(f) => {
                setActiveFile(f);
                setSidebarOpen(false);
              }}
              variant="desktop"
            />
          </div>

          {/* Mobile/Tablet off-canvas Sidebar */}
          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 z-40 bg-black/50 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="fixed left-0 top-0 bottom-0 z-50 w-64 max-w-[80%] lg:hidden">
                <Sidebar
                  activeFile={activeFile}
                  setActiveFile={(f) => {
                    setActiveFile(f);
                    setSidebarOpen(false);
                  }}
                  variant="mobile"
                />
              </div>
            </>
          )}

          {/* Main Editor */}
          <div className="flex flex-col flex-1 min-w-0">
            {/* Tabs with mobile hamburger */}
            <TopTabs
              activeFile={activeFile}
              onToggleSidebar={() => setSidebarOpen((v) => !v)}
            />

            {/* Content Area */}
            <EditorPane activeFile={activeFile} setActiveFile={setActiveFile} />

            {/* Status Bar */}
            <StatusBar />
          </div>
        </div>
      </body>
    </html>
  );
}
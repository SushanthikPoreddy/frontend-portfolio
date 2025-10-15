"use client";

import { FiMenu } from "react-icons/fi";

interface TopTabsProps {
  activeFile: string;
  onToggleSidebar?: () => void;
}

export default function TopTabs({ activeFile, onToggleSidebar }: TopTabsProps) {
  return (
    <div className="flex items-center bg-[#2d2d2d] h-10 border-b border-gray-700 shrink-0">
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden px-3 h-full flex items-center justify-center text-gray-300 hover:text-white"
        onClick={onToggleSidebar}
        aria-label="Toggle Sidebar"
      >
        <FiMenu className="text-xl" />
      </button>

      <div className="px-3 py-2 bg-[#1e1e1e] text-xs sm:text-sm text-white border-r border-gray-700 truncate max-w-full">
        {activeFile}
      </div>

      {/* Spacer that allows horizontal scroll if you add more tabs later */}
      <div className="flex-1 overflow-x-auto no-scrollbar" />
    </div>
  );
}
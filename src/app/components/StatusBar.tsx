"use client";

export default function StatusBar() {
  return (
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 sm:px-4 text-[10px] sm:text-xs text-white shrink-0">
      <span>✔ Build Successful</span>
      <span>🚀 Portfolio Ready</span>
    </div>
  );
}
"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero({ setActiveFile }: { setActiveFile: (file: string) => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    const bootSequence: string[] = [
      "[BOOT] Initializing system...",
      "[OK] Loading Frontend Stack...",
      "[OK] Importing React, Angular, TypeScript...",
      "[OK] Applying Styles (Tailwind, SCSS)...",
      "[OK] Running Tests (Jest, Cypress)...",
      "[OK] Deploying Portfolio Environment...",
      "-----------------------------------------",
      "System Ready ✅",
      "WELCOME — Sushanthik Reddy",
      "Frontend Developer | Building Interactive UIs",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[i]]);
        i++;
      } else {
        clearInterval(interval);
        setBooted(true);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex items-center justify-center min-h-[calc(100svh-40px)] bg-black text-green-400 font-mono overflow-hidden px-3">
      <div className="w-full max-w-2xl bg-[#0a0a0a] border border-green-500 rounded-lg shadow-lg p-4 sm:p-6">
        <h2 className="text-green-300 mb-3 sm:mb-4 text-sm sm:text-base">Portfolio Boot Sequence</h2>

        {/* Boot Logs */}
        <div className="space-y-1.5 sm:space-y-2 min-h-[220px] sm:min-h-[250px] text-xs sm:text-sm">
          {logs.map((log, idx) => {
            const safeLog = log || "";
            return (
              <motion.p
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.1 }}
                className={
                  safeLog.includes("[OK]")
                    ? "text-green-400"
                    : safeLog.includes("System Ready")
                    ? "text-yellow-400 font-bold"
                    : safeLog.includes("WELCOME")
                    ? "text-cyan-400 text-sm sm:text-lg font-extrabold"
                    : "text-gray-300"
                }
              >
                {safeLog}
              </motion.p>
            );
          })}
        </div>

        {/* Button shows after boot */}
        {booted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 sm:mt-6 text-center"
          >
            <button
              onClick={() => setActiveFile("About.tsx")}
              className="w-full sm:w-auto px-5 sm:px-6 py-2 bg-green-600 text-black font-semibold rounded shadow-lg hover:bg-green-500 hover:scale-105 transition"
            >
              Explore My Journey →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
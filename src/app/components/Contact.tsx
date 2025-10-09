// src/app/components/Contact.tsx
"use client";
import { motion } from "framer-motion";

export default function Contact() {
  const issues = [
    {
      id: 1,
      status: "open",
      icon: "📧",
      label: "Contact via Email",
      value: "psushanthikr@gmail.com",
      link: "mailto:psushanthikr@gmail.com",
      tags: ["enhancement"],
    },
    {
      id: 2,
      status: "open",
      icon: "🔗",
      label: "Connect on LinkedIn",
      value: "linkedin.com/in/sushanthikreddy",
      link: "https://www.linkedin.com/in/sushanthik-reddy-302aa2164",
      tags: ["help wanted"],
    },
    {
      id: 3,
      status: "open",
      icon: "📍",
      label: "Based in United States",
      value: "United States",
      link: "",
      tags: ["discussion"],
    },
  ];

  return (
    <div className="h-full w-full bg-[#0d1117] text-gray-200 font-mono p-8 overflow-auto">
      {/* Header like GitHub Issues */}
      <div className="flex items-center justify-between mb-6">
        <input
          type="text"
          placeholder="is:issue is:open"
          className="bg-[#161b22] border border-gray-700 text-sm text-gray-300 px-3 py-2 rounded w-1/2 focus:outline-none focus:ring focus:ring-green-500"
        />
      </div>

      <h2 className="text-green-400 text-xl mb-4"># Contact Issues</h2>

      {/* Issues List */}
      <div className="space-y-4">
        {issues.map((issue, idx) => (
          <motion.div
            key={issue.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="bg-[#161b22] border border-gray-700 rounded-lg p-4 hover:border-green-500 transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-400">
                  #{issue.id} [{issue.status}]
                </p>
                <h3 className="text-lg text-white mt-1">
                  {issue.icon} {issue.label}
                </h3>
                <p className="text-gray-400 text-sm mt-1">
                  {issue.link ? (
                    <a
                      href={issue.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline"
                    >
                      {issue.value}
                    </a>
                  ) : (
                    issue.value
                  )}
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Opened just now by{" "}
                  <span className="text-blue-400">you</span>
                </p>
              </div>

              {/* Tags */}
              <div className="flex gap-2">
                {issue.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                      tag === "enhancement"
                        ? "bg-green-700 text-green-200"
                        : tag === "help wanted"
                        ? "bg-purple-700 text-purple-200"
                        : tag === "documentation"
                        ? "bg-blue-700 text-blue-200"
                        : "bg-gray-700 text-gray-200"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
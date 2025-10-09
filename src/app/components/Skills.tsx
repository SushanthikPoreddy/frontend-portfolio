// components/Skills.tsx
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Skill = {
  name: string;
  years: number;
  level: number;
};

type Category = {
  id: string;
  title: string;
  skills: Skill[];
};

const categories: Category[] = [
  {
    id: "frameworks",
    title: "Frameworks",
    skills: [
      { name: "React.js", years: 6, level: 98 },
      { name: "Angular", years: 5, level: 95 },
      { name: "Next.js", years: 3, level: 85 },
      { name: "TypeScript", years: 3, level: 90}
    ],
  },
  {
    id: "styling",
    title: "Styling",
    skills: [
      { name: "Tailwind CSS", years: 2, level: 80 },
      { name: "SCSS / SASS", years: 4, level: 90 },
      { name: "Bootstrap", years: 4, level: 88 },
      { name: "Material UI", years: 3, level: 85 },
      { name: "WCAG 2.1 Accessibility", years: 3, level: 85 },
    ],
  },
  {
    id: "testing",
    title: "Testing",
    skills: [
      { name: "Jest", years: 4, level: 92 },
      { name: "React Testing Library", years: 3, level: 88 },
      { name: "Cypress / Playwright", years: 2, level: 80 },
      { name: "Jasmine / Karma", years: 3, level: 85 },
    ],
  },
  {
    id: "apis",
    title: "APIs & Data",
    skills: [
      { name: "REST APIs", years: 6, level: 95 },
      { name: "GraphQL", years: 2, level: 75 },
      { name: "Chart.js", years: 2, level: 78 },
      { name: "Mapbox", years: 2, level: 82 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tools",
    skills: [
      { name: "CI/CD Pipelines", years: 4, level: 88 },
      { name: "Git & GitHub Workflows", years: 6, level: 95 },
      { name: "Webpack / Vite", years: 3, level: 85 },
      { name: "AWS Cognito", years: 2, level: 75 },
      { name: "Node.js", years: 3, level: 80 },
    ],
  },
];


export default function Skills() {
  const [openCategory, setOpenCategory] = useState<Category | null>(null);
  const [visibleSkills, setVisibleSkills] = useState<string[]>([]);
  const [buildFinished, setBuildFinished] = useState(false);

  useEffect(() => {
    if (openCategory) {
      setVisibleSkills([]);
      setBuildFinished(false);
      let i = 0;
      const interval = setInterval(() => {
        const skill = openCategory.skills[i];
        if (skill) {
          setVisibleSkills((prev) => [...prev, skill.name]);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(() => setBuildFinished(true), 800); // delay for realism
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, [openCategory]);

  return (
    <div className="flex h-full">
      {/* Left Pane */}
      <aside className="w-1/4 bg-[#252526] border-r border-gray-700 p-4">
        <h2 className="text-green-400 font-bold mb-4">Skills Explorer</h2>
        <ul className="space-y-3">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button
                onClick={() => setOpenCategory(cat)}
                className={`w-full text-left px-2 py-1 rounded transition-colors ${
                  openCategory?.id === cat.id
                    ? "bg-green-500 text-black font-semibold"
                    : "hover:bg-gray-700 text-gray-300"
                }`}
              >
                {cat.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Right Pane */}
      <main className="flex-1 bg-[#1e1e1e] p-6 font-mono text-sm text-gray-300 overflow-y-auto">
        {!openCategory ? (
          <p className="text-gray-500">Select a category from left pane...</p>
        ) : (
          <div>
            {/* Build logs */}
            <p className="text-blue-400">+ npm run build:skills</p>
            <p>Compiling category "{openCategory.title}"...</p>

            <div className="mt-4 space-y-2">
              {openCategory.skills.map((skill, idx) => {
                const isVisible = visibleSkills.includes(skill.name);
                return (
                  <motion.p
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ delay: idx * 0.2 }}
                  >
                    {isVisible ? (
                      <>
                        <span className="text-green-400">✔</span> Loaded skill →{" "}
                        <span className="text-white">{skill.name}</span>{" "}
                        <span className="text-gray-400">
                          ({skill.level}% mastery, {skill.years} yrs exp)
                        </span>
                      </>
                    ) : (
                      <span className="text-gray-500">
                        ...loading {skill.name}
                      </span>
                    )}
                  </motion.p>
                );
              })}
            </div>

            {/* Extra output after build */}
            {buildFinished && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mt-8 space-y-6"
              >
                {/* Fake Jest-style test runner */}
                <div>
                  <p className="text-yellow-400">Running skill-tests...</p>
                  {openCategory.skills.map((skill) => (
                    <p key={skill.name}>
                      <span className="text-green-400">✓</span>{" "}
                      {skill.name} validated
                    </p>
                  ))}
                  <p className="text-green-300 mt-2">
                    Test Suites: 1 passed, 0 failed
                  </p>
                  <p className="text-green-300">Tests: {openCategory.skills.length} passed</p>
                </div>

                {/* ASCII-style coverage bar */}
                <div>
                  <p className="text-yellow-400 mb-2">Skill Coverage Report:</p>
                  {openCategory.skills.map((skill) => (
                    <p key={skill.name} className="text-gray-300">
                      {skill.name.padEnd(15)}{" "}
                      <span className="text-green-400">
                        {"█".repeat(Math.round(skill.level / 10))}
                      </span>
                      <span className="text-gray-600">
                        {"░".repeat(10 - Math.round(skill.level / 10))}
                      </span>{" "}
                      {skill.level}%
                    </p>
                  ))}
                </div>

                <p className="text-yellow-400 mt-4">
                  Build finished with 0 errors.
                </p>
              </motion.div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
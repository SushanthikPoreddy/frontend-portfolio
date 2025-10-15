"use client";
import Image from "next/image";

export default function About() {
  const badges = [
    { name: "React", color: "from-[#61DAFB] to-[#21A1F1]", textColor: "text-black" },
    { name: "Angular", color: "from-[#DD0031] to-[#C3002F]", textColor: "text-white" },
    { name: "TypeScript", color: "from-[#3178C6] to-[#235A97]", textColor: "text-white" },
    { name: "Next.js", color: "from-[#000000] to-[#333333]", textColor: "text-white" },
    { name: "Accessibility", color: "from-[#2E8B57] to-[#1E5631]", textColor: "text-white" },
    { name: "Testing", color: "from-[#6E7B91] to-[#495061]", textColor: "text-white" },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full bg-[#0d1117] text-gray-100 font-mono flex flex-col justify-center px-4 sm:px-6 md:px-10 py-10"
    >
      <div className="flex flex-col-reverse md:flex-row gap-10 items-center md:items-start max-w-6xl mx-auto">
        {/* Left Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left mt-4 md:mt-0">
            Sushanthik Reddy
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base text-center md:text-left">
            Front-End Developer | Crafting Responsive UIs
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
            {badges.map((badge) => (
              <span
                key={badge.name}
                className={`px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-gradient-to-r ${badge.color} ${badge.textColor} shadow-md shadow-black/30`}
              >
                ● {badge.name.toUpperCase()}
              </span>
            ))}
          </div>

          {/* README-style content */}
          <div className="mt-6 text-[13px] sm:text-sm leading-relaxed space-y-4">
            <h2 className="text-base sm:text-lg text-green-400 font-semibold">## About Me</h2>
            <p>
              Hello! I&apos;m{" "}
              <span className="text-green-400 font-bold">Sushanthik Reddy</span>, an experienced{" "}
              <span className="text-blue-400">Front-End Developer</span> with 6+ years of success
              building modern, high-performance web applications. My expertise spans{" "}
              <span className="text-pink-400">React.js</span>,{" "}
              <span className="text-red-400">Angular</span>, and{" "}
              <span className="text-indigo-400">Next.js</span> — focusing on pixel-perfect design,
              accessibility (WCAG 2.1), and seamless API integrations.
            </p>

            <p>
              I’ve delivered solutions for{" "}
              <span className="text-yellow-300">First Home Mortgage</span> (dynamic dashboards with{" "}
              <span className="text-blue-400">React &amp; Mapbox</span>) and{" "}
              <span className="text-yellow-300">Zoho Corp</span> (modernized enterprise UIs using{" "}
              <span className="text-red-400">Angular</span> &amp; 
              <span className="text-blue-400">React</span>). My work consistently enhances
              performance, accessibility, and engagement.
            </p>

            <p>
              I thrive in Agile teams, collaborating with designers, QA, and PMs to build scalable,
              maintainable codebases. Whether transforming Figma mockups, boosting test coverage
              with <span className="text-pink-400">Jest</span> &amp; 
              <span className="text-pink-400">Cypress</span>, or mentoring developers — I bring
              strong technical depth and collaboration skills.
            </p>

            <p>
              Outside of work, I love exploring front-end innovations, contributing to open source,
              and mentoring upcoming developers. I believe in continuous learning and pushing the
              limits of modern web experiences.
            </p>

            {/* JSON Section */}
            <h2 className="text-base sm:text-lg text-green-400 font-semibold mt-6">
              ## Profile Overview
            </h2>
            <div className="bg-[#161b22] p-4 sm:p-6 rounded-lg text-xs sm:text-sm overflow-x-auto border border-gray-700">
              <pre className="whitespace-pre-wrap">
{`{
  "name": "Sushanthik Reddy",
  "role": "Front-End Developer",
  "location": "United States",
  "experience": ["6+ years", "First Home Mortgage", "Zoho Corp"],
  "education": {
    "bachelors": "B.Tech in Computer Science, GNITC (2016–2020)",
    "masters": "M.S. in Data Science, UMBC (2021–2023)"
  }
}`}
              </pre>
            </div>

            <h2 className="text-base sm:text-lg text-green-400 font-semibold mt-6">
              ## Current Focus
            </h2>
            <ul className="list-disc pl-5 sm:pl-8 space-y-1 text-[13px] sm:text-sm">
              <li>🌐 Scaling front-end apps with best practices</li>
              <li>📈 Continuous learning &amp; open-source contributions</li>
            </ul>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] rounded-2xl overflow-hidden border-4 border-gray-700 shadow-lg shadow-purple-500/30">
          <Image
            src="/profile.jpeg"
            alt="Sushanthik Reddy"
            width={220}
            height={220}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
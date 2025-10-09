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
    <div className="h-full w-full bg-[#0d1117] text-gray-100 font-mono flex flex-col p-8 overflow-auto items-ceneter">
      {/* Split Layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Side: Content */}
        <div className="flex-1">

          <h1 className="mt-4 text-3xl font-bold text-white">Sushanthik Reddy</h1> <p className="text-gray-400 mt-1"> Front-End Developer | Crafting Responsive UIs </p>
          {/* Badges Section */}
          <div className="mt-4 flex flex-wrap gap-3 mb-8">
            {badges.map((badge) => (
              <span
                key={badge.name}
                className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${badge.color} ${badge.textColor} shadow-md shadow-black/20 tracking-wide`}
              >
                ● {badge.name.toUpperCase()}
              </span>
            ))}
          </div>

          {/* README Style Content */}
          <div className="prose prose-invert max-w-none">
            <h2>## About Me</h2>
<p>
  Hello! I'm <span className="text-green-400 font-bold">Sushanthik Reddy</span>,  
  an experienced <span className="text-blue-400">Front-End Developer</span> with 6+ years of success
  building modern, high-performance web applications.  
  My expertise spans <span className="text-pink-400">React.js</span>, <span className="text-red-400">Angular</span>, 
  <span className="text-indigo-400"> Next.js</span>, and responsive UI development, with a strong focus on 
  pixel-perfect design, accessibility (WCAG 2.1), and seamless API integrations.
</p>

<p className="mt-4">
  Over the years, I’ve delivered solutions for organizations ranging from 
  <span className="text-yellow-300"> First Home Mortgage</span>, where I built dynamic dashboards with 
  <span className="text-blue-400"> React.js & Mapbox</span>, to 
  <span className="text-yellow-300"> Zoho Corp</span>, where I modernized enterprise apps using 
  <span className="text-red-400"> Angular</span> and <span className="text-blue-400"> React</span>.  
  My work consistently improves performance, accessibility, and user engagement.
</p>

<p className="mt-4">
  I thrive in Agile teams, collaborating with designers, QA, and product managers to 
  deliver scalable, maintainable codebases. Whether transforming Figma mockups into 
  production-ready UIs, increasing test coverage with <span className="text-pink-400">Jest</span> and 
  <span className="text-pink-400"> Cypress</span>, or mentoring junior developers, I bring both 
  technical depth and a passion for collaboration.
</p>

<p className="mt-4">
  Outside of coding, I enjoy exploring the latest front-end innovations, contributing to 
  open-source, and mentoring upcoming developers. I believe in continuous learning 
  and pushing the boundaries of what modern web experiences can achieve.
</p>

            <h2 className="mt-6">## Profile Overview</h2>
<pre className="bg-[#161b22] p-6 rounded-lg text-sm overflow-x-auto border border-gray-700">
{`{
  "name": "Sushanthik Reddy",
  "role": "Front-End Developer",
  "location": "United States",
  "experience": [
    "6+ years",
    "First Home Mortgage",
    "Zoho Corp",
  ],
  education: {
      bachelors: "B.Tech in Computer Science, Guru Nanak Institutions (2016–2020)",
      masters: "M.S. in Data Science, UMBC (2021–2023)",
    },
}`}
</pre>

            <h2 className="mt-6">## Current Focus</h2>
            <ul className="list-disc pl-6">
              <li>🌐 Scaling front-end apps with best practices</li>
              <li>📈 Continuous learning & open-source contributions</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Big Profile Image */}
        {/* Right Side: Profile Image with extra spacing */}
<div className="flex-shrink-0 mt-12 md:mt-20">
  <Image
    src="/profile.jpeg"
    alt="Sushanthik Reddy"
    width={220}
    height={220}
    className="rounded-2xl border-4 border-gray-700 shadow-lg shadow-purple-500/30 object-cover"
  />
</div>
      </div>
    </div>
  );
}
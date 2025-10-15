"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

type Node = {
  id: string;
  year: string;
  title: string;
  fileName: string;
  description: string;
  tech: string[];
  achievements: string[];
  type: "role" | "project" | "education";
  image?: string;
  children?: Node[];
};

const timeline: Node[] = [
  {
    id: "fhm",
    year: "2021 – Present",
    title: "First Home Mortgage",
    fileName: "FirstHomeMortgage.tsx",
    description:
      "Led the front-end development of mortgage dashboards and internal tools used daily by loan officers. Focused on creating secure, scalable, and accessible interfaces integrated with AWS Cognito for authentication and Mapbox for interactive data visualization. Partnered with business stakeholders to refine user experience and improve application performance.",
    tech: ["React.js", "Next.js", "TypeScript", "SASS", "Jest", "Mapbox", "AWS Cognito"],
    achievements: [
      "Designed and implemented a reusable UI component system that reduced development time for new features by 40% and improved consistency across applications.",
      "Introduced WCAG 2.1 accessibility enhancements, making the dashboards fully compliant and significantly improving usability for users with disabilities.",
      "Boosted overall unit test coverage by 60% through Jest and React Testing Library, ensuring long-term maintainability and confidence in production releases.",
    ],
    type: "role",
    children: [
      {
        id: "loan-dashboard",
        year: "2024",
        title: "Customer Loan Dashboard",
        fileName: "LoanDashboard.tsx",
        description:
          "Built a React.js and Next.js dashboard with secure AWS Cognito login and Mapbox-powered geospatial views. Delivered an intuitive visualization layer for tracking customer loans, enabling officers to analyze loan progress geographically and generate actionable insights.",
        tech: ["React.js", "Next.js", "AWS Cognito", "Mapbox"],
        achievements: [
          "Integrated AWS Cognito for secure, enterprise-grade authentication, ensuring data privacy and compliance.",
          "Implemented highly interactive loan visualization dashboards using Mapbox, enabling location-based insights that supported smarter loan approvals.",
          "Developed reusable chart and table components, cutting repetitive code by 35% and improving UI scalability for future projects.",
        ],
        type: "project",
        image: "",
      },
      {
        id: "pipeline-manager",
        year: "2023",
        title: "Loan Officer Pipeline Manager",
        fileName: "PipelineManager.tsx",
        description:
          "Developed a pipeline management tool in Angular 16+ that streamlined applicant tracking and improved officer workflows. Focused on performance optimization, accessibility, and responsive layouts. Also mentored junior developers, improving team productivity.",
        tech: ["Angular 16+", "RxJS", "Material UI", "Jasmine/Karma"],
        achievements: [
          "Migrated the application to Angular 16+, improving rendering performance by 25% and unlocking advanced RxJS features.",
          "Delivered a fully responsive and accessible user interface, ensuring smooth usability across desktops, tablets, and mobile devices.",
          "Mentored 3 junior developers on Angular best practices, unit testing, and clean coding patterns, boosting overall team velocity.",
        ],
        type: "project",
      },
    ],
  },
  {
    id: "zoho",
    year: "2019 – 2021",
    title: "Zoho Corporation",
    fileName: "ZohoCorp.tsx",
    description:
      "Contributed to modernizing enterprise-grade applications by migrating legacy systems to Angular and React. Delivered highly performant, scalable front-end solutions for critical business tools. Drove improvements in maintainability, introduced code splitting, and implemented lazy loading to enhance load times across applications.",
    tech: ["Angular", "React", "TypeScript", "RxJS", "Bootstrap"],
    achievements: [
      "Modernized 5+ enterprise UIs by migrating legacy apps to Angular and React, improving maintainability and future scalability.",
      "Improved application load times by 30% through code splitting, lazy loading, and performance tuning techniques.",
      "Achieved 100% unit test coverage across critical components using Jasmine/Karma, increasing reliability and confidence in production deployments.",
    ],
    type: "role",
  },
  {
    id: "edu",
    year: "Master's and Bachelor's",
    title: "Education",
    fileName: "Education.tsx",
    description:
      "Gained a solid academic foundation in Computer Science and Engineering, with emphasis on software engineering principles, data structures, and full-stack development. Strengthened analytical and problem-solving skills through research, thesis work, and applied coursework in machine learning and data systems.",
    tech: [],
    achievements: [
      "M.S. in Data Science – UMBC, Maryland, USA (2023): Specialized in machine learning, big data analytics, and cloud-based solutions for scalable applications.",
      "B.Tech in Computer Science and Engineering – GNITC Hyderabad, India (2020): Built a strong base in algorithms, operating systems, and distributed systems.",
    ],
    type: "education",
  },
];

export default function JourneyTimeline() {
  const [activeNode, setActiveNode] = useState<Node | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Timeline Sidebar */}
      <div className="w-full lg:w-1/4 bg-[#252526] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-gray-700 overflow-y-auto">
        <h2 className="text-green-400 font-bold mb-4 sm:mb-6 text-base sm:text-lg">Commit History</h2>
        <div className="relative border-l-2 border-gray-600 ml-3">
          {timeline.map((node, index) => (
            <div key={node.id} className="mb-6 sm:mb-8 ml-6">
              <motion.div
                className="cursor-pointer group"
                onClick={() => {
                  if (node.children) {
                    setExpanded(expanded === node.id ? null : node.id);
                  }
                  setActiveNode(node);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
              >
                <span
                  className={`absolute -left-3 flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 border rounded-full transition ${
                    node.type === "education"
                      ? "bg-blue-600 border-blue-400"
                      : "bg-gray-800 border-gray-400 group-hover:bg-green-500"
                  }`}
                >
                  <FaCircle className="text-[8px] sm:text-xs text-gray-300 group-hover:text-white" />
                </span>

                <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-green-400">
                  {node.title}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">{node.year}</p>
              </motion.div>

              {expanded === node.id && node.children && (
                <div className="ml-6 mt-3 sm:mt-4 space-y-3 sm:space-y-4 border-l border-gray-700 pl-3 sm:pl-4">
                  {node.children.map((child, idx) => (
                    <motion.div
                      key={child.id}
                      className="cursor-pointer group"
                      onClick={() => setActiveNode(child)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <h4 className="text-purple-300 text-sm sm:text-base font-medium group-hover:text-purple-400">
                        {child.title}
                      </h4>
                      <p className="text-gray-500 text-xs">{child.year}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Editor Pane */}
      <div className="flex-1 bg-[#1e1e1e] p-4 sm:p-6 lg:p-8 overflow-y-auto">
        {activeNode ? (
          activeNode.type === "education" ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="font-mono space-y-6 text-sm sm:text-base"
            >
              <div className="bg-[#1e1e1e] border border-gray-700 rounded-lg p-4">
                <h3 className="text-blue-400 text-lg font-bold mb-2">
                  commit e3d9a7c
                </h3>
                <p className="text-gray-400">
                  Author: Sushanthik Reddy &lt;psushanthikr@gmail.com&gt;
                </p>
                <p className="text-gray-500">Date: Thu Sep 19 12:00:00 2024</p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#1a1a1a] border-l-4 border-blue-500 pl-4 py-2 rounded">
                  <span className="text-blue-400 font-semibold">
                    tag: UMBC-2023
                  </span>
                  <p className="text-white">
                    M.S. in Data Science — UMBC, Maryland, USA (2023)
                  </p>
                </div>

                <div className="bg-[#1a1a1a] border-l-4 border-blue-500 pl-4 py-2 rounded">
                  <span className="text-blue-400 font-semibold">
                    tag: GNITC-2020
                  </span>
                  <p className="text-white">
                    B.Tech in Computer Science and Engineering — GNITC, Hyderabad, India (2020)
                  </p>
                </div>
              </div>

              <div className="bg-[#101010] border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <h4 className="text-emerald-400 font-semibold mb-3">
                  Git Diff — Skills Gained
                </h4>
                <pre className="text-emerald-400 text-xs sm:text-sm">
                  + UI/UX Design Systems{"\n"}
                  + Advanced JavaScript & TypeScript{"\n"}
                  + React.js & Angular Frameworks{"\n"}
                  + Full-Stack Web Development{"\n"}
                  + Data Structures & Algorithms{"\n"}
                  + Cloud Computing Fundamentals{"\n"}
                  + Machine Learning and Algorithms{"\n"}
                  + Python Programming{"\n"}
                  + Database Management (SQL & NoSQL){"\n"}
                  + Team Collaboration & Leadership{"\n"}
                  + Research & Thesis Work
                </pre>
              </div>
            </motion.div>
          ) : activeNode.type === "role" && activeNode.children ? (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm sm:text-base"
            >
              <h2 className="text-blue-400 text-lg sm:text-xl font-bold mb-4">
                {activeNode.fileName} — Project Overview
              </h2>
              <p className="text-gray-300 mb-6">{activeNode.description}</p>

              <h3 className="text-purple-300 font-semibold mb-3">
                Projects under {activeNode.title}:
              </h3>
              <ul className="space-y-4">
                {activeNode.children.map((child) => (
                  <li key={child.id} className="border-b border-gray-700 pb-3">
                    <p className="text-white font-medium">
                      {child.title} ({child.year})
                    </p>
                    <p className="text-gray-400 text-sm">{child.description}</p>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 mt-4 italic">
                Select a project from the sidebar to view full details.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm sm:text-base"
            >
              <h2 className="text-blue-400 text-lg sm:text-xl font-bold mb-4">
                {activeNode.fileName}
              </h2>
              <p className="text-gray-300 mb-4">{activeNode.description}</p>

              {activeNode.tech && activeNode.tech.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-purple-400 font-semibold mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gray-700 text-sm text-gray-200 transition duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-green-400 hover:shadow-[0_0_10px_#22c55e]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-green-400 font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {activeNode.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {activeNode.image && (
                <div className="mt-6">
                  <h4 className="text-pink-400 font-semibold mb-2">
                    Project Preview:
                  </h4>
                  <img
                    src={activeNode.image}
                    alt={activeNode.title}
                    className="rounded-lg border border-gray-600 shadow-lg hover:scale-[1.02] transition max-w-full h-auto"
                  />
                </div>
              )}
            </motion.div>
          )
        ) : (
          <p className="text-gray-500 italic text-sm sm:text-base">
            ⬅ Select a commit to view details
          </p>
        )}
      </div>
    </div>
  );
}
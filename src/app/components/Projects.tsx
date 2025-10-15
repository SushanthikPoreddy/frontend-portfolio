"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

type Project = {
  id: string;
  year: string;
  title: string;
  fileName: string;
  description: string;
  tech: string[];
  achievements: string[];
  type: "project" | "certification";
  image?: string;
};

const projects: Project[] = [
  {
    id: "2",
    year: "2025",
    title: "Patient Dashboard",
    fileName: "PatientDashboard.tsx",
    description:
      "Single-page React dashboard for health professionals to visualize patient vitals and diagnosis history with API integration and blood pressure chart.",
    tech: ["React.js", "Tailwind CSS", "Chart.js", "REST API", "Framer Motion", "Adobe XD"],
    achievements: [
      "Transformed Adobe XD designs into a pixel-perfect frontend layout",
      "Integrated Coalition Tech API to fetch patient vitals, lab data, and diagnoses",
      "Engineered dynamic blood pressure trend chart using Chart.js",
      "Maintained responsive UI with fixed sidebar and scroll-safe content zones",
      "Resolved scroll-overlap bug between patient header and content layout",
    ],
    type: "project",
    image: "/Patient_dashboard.png",
  },
  {
    id: "3",
    year: "2019",
    title: "Plant Leaf Disease Detection UI",
    fileName: "LeafDiseaseFrontend.tsx",
    description:
      "UI prototype for a smart agricultural tool that lets users upload leaf images and receive visual health feedback with ML model overlay.",
    tech: ["React.js", "Bootstrap", "Python Flask (backend)", "TensorFlow", "OpenCV", "Spyder IDE"],
    achievements: [
      "Designed clean and intuitive UI for disease upload/scan module",
      "Displayed live prediction results from Python backend (Lateblight, Healthy etc.)",
      "Integrated real-time edge detection snapshots from OpenCV",
      "Focused on frontend improvements to complement ML model pipeline",
      "Mocked loading and scan status animations for better UX",
    ],
    type: "project",
    image: "/Health_detection.png",
  },
  {
    id: "4",
    year: "2018",
    title: "Pill Reminder App",
    fileName: "PillReminderApp.tsx",
    description:
      "Android app with senior-friendly UI for pill schedules, OCR-based prescription scanning, and photo-based tablet recognition.",
    tech: ["Android Studio", "Java", "XML", "Mobile Vision API", "OCR", "SQLite", "Material Design"],
    achievements: [
      "Large, accessible controls and color-coded schedules",
      "OCR to auto-extract prescription details",
      "Custom alarm manager with voice prompts",
      "Clean navigation with persistent data via SQLite",
    ],
    type: "project",
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Timeline Sidebar */}
      <div className="w-full lg:w-1/4 bg-[#252526] p-6 border-b lg:border-b-0 lg:border-r border-gray-700 overflow-y-auto">
        <h2 className="text-green-400 font-bold mb-6">Commit History</h2>
        <div className="relative border-l-2 border-gray-600 ml-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="mb-8 ml-6 cursor-pointer group"
              onClick={() => setActiveProject(project)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12 }}
            >
              <span
                className={`absolute -left-3 flex items-center justify-center w-5 h-5 border rounded-full transition ${
                  project.type === "certification"
                    ? "bg-yellow-600 border-yellow-400"
                    : "bg-gray-800 border-gray-400 group-hover:bg-green-500"
                }`}
              >
                <FaCircle className="text-xs text-gray-300 group-hover:text-white" />
              </span>

              <h3 className="text-white font-semibold group-hover:text-green-400">{project.title}</h3>
              <p className="text-gray-400 text-sm">{project.year}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Editor Pane */}
      <div className="flex-1 bg-[#1e1e1e] p-4 sm:p-6 overflow-y-auto">
        {activeProject ? (
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h2 className="text-blue-400 text-xl font-bold mb-4">{activeProject.fileName}</h2>
            <p className="text-gray-300 mb-4">{activeProject.description}</p>

            <div className="mb-4">
              <h4 className="text-purple-400 font-semibold mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.tech.map((tech, i) => (
                  <span
                    key={`${activeProject.id}-tech-${i}`}
                    className="px-3 py-1 rounded-lg bg-gray-700 text-sm text-gray-200 transition duration-300 transform hover:scale-105 hover:bg-gray-800 hover:text-green-400 hover:shadow-[0_0_10px_#22c55e]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {!!activeProject.achievements?.length && (
              <div>
                <h4 className="text-green-400 font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {activeProject.achievements.map((point, i) => (
                    <li key={`${activeProject.id}-ach-${i}`}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeProject.image && (
              <div className="mt-6">
                <h4 className="text-pink-400 font-semibold mb-2">Project Preview:</h4>
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="rounded-lg border border-gray-600 shadow-lg hover:scale-[1.02] transition max-w-full h-auto"
                />
              </div>
            )}
          </motion.div>
        ) : (
          <p className="text-gray-500 italic">⬅ Select a commit to view project details</p>
        )}
      </div>
    </div>
  );
}
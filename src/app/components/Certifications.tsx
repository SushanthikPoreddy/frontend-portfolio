"use client";
import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

type Certificate = {
  id: string;
  title: string;
  provider: string;
  year: string;
  boosts: { Cloud: number; Data: number; AI: number; "UI/UX": number };
};

const initialColumns: Record<string, Certificate[]> = {
  "2021": [
    {
      id: "databricks",
      title: "Winner: Hackathon - Data Viz",
      provider: "Hackathon",
      year: "2021",
      boosts: { Cloud: 1, Data: 4, AI: 2, "UI/UX": 3 },
    },
  ],
  "2022": [
    {
      id: "azure-data",
      title: "Advanced ML Certification",
      provider: "Coursera",
      year: "2022",
      boosts: { Cloud: 2, Data: 3, AI: 5, "UI/UX": 2 },
    },
  ],
  "2023": [
    {
      id: "aws",
      title: "AWS Certified Solutions Architect",
      provider: "AWS",
      year: "2023",
      boosts: { Cloud: 5, Data: 2, AI: 1, "UI/UX": 1 },
    },
  ],
};

export default function CertificationsKanban() {
  const [columns, setColumns] = useState(initialColumns);
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      // same column reorder
      const newColumn = Array.from(columns[source.droppableId]);
      const [moved] = newColumn.splice(source.index, 1);
      newColumn.splice(destination.index, 0, moved);

      setColumns({
        ...columns,
        [source.droppableId]: newColumn,
      });
    } else {
      // move between columns
      const sourceCol = Array.from(columns[source.droppableId]);
      const destCol = Array.from(columns[destination.droppableId]);
      const [moved] = sourceCol.splice(source.index, 1);
      destCol.splice(destination.index, 0, moved);

      setColumns({
        ...columns,
        [source.droppableId]: sourceCol,
        [destination.droppableId]: destCol,
      });
    }

    // 🎉 Confetti when moving cards
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className="h-full flex flex-col bg-[#1e1e1e] p-6 relative">
      <h2 className="text-green-400 font-bold mb-6 text-xl">
        📋 Certificates Board
      </h2>
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="flex gap-6 overflow-x-auto">
          {Object.entries(columns).map(([colId, certs]) => (
            <Droppable key={colId} droppableId={colId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-[#252526] border border-gray-700 rounded-lg p-4 w-72 flex-shrink-0"
                >
                  <h3 className="text-blue-400 font-semibold mb-4">{colId}</h3>
                  {certs.map((cert, index) => (
                    <Draggable
                      key={`${colId}-${cert.id}`}
                      draggableId={`${colId}-${cert.id}`}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <motion.div
                            onClick={() => setActiveCert(cert)}
                            whileHover={{
                              scale: 1.05,
                              rotate: 1,
                              boxShadow: "0px 0px 15px rgba(34,197,94,0.5)",
                            }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="bg-gray-700 text-white p-3 rounded shadow mb-3 cursor-pointer"
                          >
                            <p className="font-semibold">{cert.title}</p>
                            <p className="text-xs text-gray-300">
                              {cert.provider} • {cert.year}
                            </p>
                          </motion.div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {/* Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 200, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 200, opacity: 0, scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              className="bg-[#1f2937] rounded-lg p-6 w-[750px] max-w-full border border-gray-700 shadow-xl"
            >
              <h2 className="text-green-400 font-bold text-lg mb-6">
                {activeCert.title}
              </h2>

              {/* Bar Chart */}
              <div className="bg-[#111827] p-6 rounded-lg shadow-lg">
                <h3 className="text-purple-400 font-semibold mb-4 text-lg">
                  Skill Boosts
                </h3>
                <div className="h-[300px]">
                  <Bar
                    data={{
                      labels: ["Cloud", "Data", "AI", "UI/UX"],
                      datasets: [
                        {
                          label: activeCert.title,
                          data: [
                            activeCert.boosts.Cloud,
                            activeCert.boosts.Data,
                            activeCert.boosts.AI,
                            activeCert.boosts["UI/UX"],
                          ],
                          backgroundColor: [
                            "rgba(34,197,94,0.7)",
                            "rgba(59,130,246,0.7)",
                            "rgba(236,72,153,0.7)",
                            "rgba(251,191,36,0.7)",
                          ],
                          borderColor: [
                            "#22c55e",
                            "#3b82f6",
                            "#ec4899",
                            "#fbbf24",
                          ],
                          borderWidth: 2,
                        },
                      ],
                    }}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: { labels: { color: "#e5e7eb" } },
                      },
                      scales: {
                        x: {
                          ticks: { color: "#e5e7eb" },
                          grid: { color: "#374151" },
                        },
                        y: {
                          ticks: { color: "#e5e7eb" },
                          grid: { color: "#374151" },
                          suggestedMin: 0,
                          suggestedMax: 6,
                        },
                      },
                    }}
                  />
                </div>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={() => setActiveCert(null)}
                  className="px-4 py-2 bg-red-600 rounded hover:bg-red-500 text-white"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
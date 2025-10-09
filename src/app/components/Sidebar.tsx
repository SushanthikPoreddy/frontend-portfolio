interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
}

export default function Sidebar({ activeFile, setActiveFile }: SidebarProps) {
  const files = [
    { name: "Hero.tsx", color: "text-purple-400" },
    { name: "About.tsx", color: "text-cyan-400" },
    { name: "JourneyTimeline.tsx", color: "text-blue-400" },
    { name: "Projects.tsx", color: "text-green-400" },
    
    { name: "Certifications.tsx", color: "text-yellow-400" },
    { name: "Contact.tsx", color: "text-pink-400" },
  ];

  return (
    <aside className="w-60 bg-[#252526] border-r border-gray-700 text-sm">
      <div className="px-4 py-3 text-gray-400 text-xs border-b border-gray-700">
        EXPLORER
      </div>
      <ul className="px-4 py-3 space-y-2">
        {files.map((file) => (
          <li
            key={file.name}
            onClick={() => setActiveFile(file.name)}
            className={`${file.color} cursor-pointer px-2 py-1 rounded 
              ${activeFile === file.name ? "bg-[#37373d]" : "hover:bg-[#2a2d2e]"}`}
          >
            📄 {file.name}
          </li>
        ))}
      </ul>
    </aside>
  );
}
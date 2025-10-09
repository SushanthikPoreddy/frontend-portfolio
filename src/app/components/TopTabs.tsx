interface TopTabsProps {
  activeFile: string;
}

export default function TopTabs({ activeFile }: TopTabsProps) {
  return (
    <div className="flex items-center bg-[#2d2d2d] h-10 border-b border-gray-700">
      <div className="px-4 py-2 bg-[#1e1e1e] text-sm text-white border-r border-gray-700">
        {activeFile}
      </div>
    </div>
  );
}
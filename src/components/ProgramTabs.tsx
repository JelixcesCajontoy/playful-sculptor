
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProgramTabsProps {
  children: React.ReactNode;
  defaultTab?: string;
}

const ProgramTabs = ({ children, defaultTab = "instruction" }: ProgramTabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    { value: "instruction", label: "Instruction" },
    { value: "extension", label: "Extension" },
    { value: "faculty", label: "Faculty Development" },
    { value: "library", label: "Library" },
    { value: "compliance", label: "Compliance Report" },
    { value: "working", label: "Working Checklist" },
    { value: "technical", label: "AACCUP Technical Report" },
    { value: "documents", label: "Requested Documents" },
  ];

  return (
    <Tabs defaultValue={defaultTab} className="w-full" onValueChange={setActiveTab}>
      <TabsList className="w-full flex justify-start overflow-x-auto scrollbar-hide bg-gray-100 p-1 rounded-t-lg border border-gray-200">
        {tabs.map((tab) => (
          <TabsTrigger 
            key={tab.value}
            value={tab.value} 
            className={`px-6 py-2.5 rounded-md transition-all duration-200 ${
              activeTab === tab.value 
              ? "bg-blue-700 text-white shadow-md" 
              : "hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {children}
    </Tabs>
  );
};

export default ProgramTabs;

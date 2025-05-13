
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";

interface EmptyTabContentProps {
  value: string;
  message?: string;
}

const EmptyTabContent = ({ value, message = "Content will appear here." }: EmptyTabContentProps) => {
  return (
    <TabsContent value={value}>
      <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px] flex items-center justify-center border border-gray-100">
        <p className="text-gray-500 text-center">{message}</p>
      </div>
    </TabsContent>
  );
};

export default EmptyTabContent;

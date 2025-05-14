
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { FileText } from 'lucide-react';

interface WorkingChecklistTabProps {
  programCode: string;
}

const WorkingChecklistTab = ({ programCode }: WorkingChecklistTabProps) => {
  return (
    <TabsContent value="working" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <div className="mb-4">
          <div className="bg-blue-700 text-white p-4 font-semibold">
            <h3 className="flex items-center">
              <FileText className="mr-2 h-5 w-5" /> File
            </h3>
          </div>
          <div className="p-4 bg-gray-100 flex items-center hover:bg-gray-200 transition-colors cursor-pointer">
            <FileText className="mr-2 h-5 w-5 text-blue-700" />
            <span className="text-gray-800">CvSU Bacoor-{programCode} Program_Working-Checklist.docx</span>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default WorkingChecklistTab;

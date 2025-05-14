
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import NarrativeVideoSection from './NarrativeVideoSection';
import DocumentList from './DocumentList';

interface LibraryTabProps {
  programCode: string;
}

const LibraryTab = ({ programCode }: LibraryTabProps) => {
  const libraryDocuments = [
    { name: "LIBRARY-1.WELL-DEFINED OBJECTIVES.pdf" },
    { name: "LIBRARY-2.ADEQUATE AND RELEVANT PROJECT-ACTIVITIES.pdf" },
    { name: "LIBRARY-3.SYSTEMATIC AND EFFECTIVE PROCEDURES.pdf" },
    { name: "LIBRARY-4.REASONABLE BUDGET.pdf" },
    { name: "LIBRARY-5.PROVISION OF MATERIALS AND OTHERS RESOURCES.pdf" },
    { name: "LIBRARY-6.BEST PRACTICES.pdf" }
  ];

  return (
    <TabsContent value="library" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <NarrativeVideoSection programCode={programCode} area="library" />
        <DocumentList title="Library Documents" documents={libraryDocuments} />
      </div>
    </TabsContent>
  );
};

export default LibraryTab;


import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import NarrativeVideoSection from './NarrativeVideoSection';
import DocumentList from './DocumentList';

interface ExtensionTabProps {
  programCode: string;
}

const ExtensionTab = ({ programCode }: ExtensionTabProps) => {
  const extensionDocuments = [
    { name: "EXTENSION-1. WELL-DEFINED OBJECTIVES IN EXTENSION SERVICES.pdf" },
    { name: "EXTENSION-2. BACOOREX ADEQUATE PROGRAMS AND BEST PRACTICES.pdf" },
    { name: "EXTENSION-3. SYSTEMATIC AND EFFECTIVE PROCEDURES.pdf" },
    { name: "EXTENSION-4. REASONABLE BUDGET.pdf" },
    { name: "EXTENSION-5. PROVISION OF MATERIALS AND OTHER RESOURCES.pdf" },
    { name: "EXTENSION-6. PARTICIPATION OF SIGNIFICANT NUMBER OF FACULTY/ STAFF/ STUDENTS/ COMMUNITY IN MAJOR PROJECTS/ACTIVITIES.pdf" },
    { name: "EXTENSION-7. Bonus Points: RECOGNITION AND BEST PRACTICES.pdf" },
    { name: "EXTENSION SERVICES-Links.pdf" }
  ];

  return (
    <TabsContent value="extension" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <NarrativeVideoSection programCode={programCode} area="extension" />
        <DocumentList title="Extension Documents" documents={extensionDocuments} />
      </div>
    </TabsContent>
  );
};

export default ExtensionTab;

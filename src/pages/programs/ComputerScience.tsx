
import React from 'react';
import ProgramHeader from '../../components/ProgramHeader';
import ProgramTabs from '../../components/ProgramTabs';
import DocumentTable from '../../components/DocumentTable';
import ComplianceReportTab from '../../components/ComplianceReportTab';
import { TabsContent } from "@/components/ui/tabs";
import Footer from '../../components/Footer';
import ExtensionTab from '../../components/ExtensionTab';
import FacultyTab from '../../components/FacultyTab';
import LibraryTab from '../../components/LibraryTab';
import WorkingChecklistTab from '../../components/WorkingChecklistTab';
import TechnicalReportTab from '../../components/TechnicalReportTab';
import RequestedDocumentsTab from '../../components/RequestedDocumentsTab';

const ComputerScience = () => {
  const documentSections = [
    {
      title: "INSTRUCTION_SECTION 1: WELL-DEFINED OBJECTIVES",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 2: ADEQUATE AND RELEVANT PROJECTS/ACTIVITIES TO ACHIEVE OBJECTIVES",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 3: SYSTEMATIC AND EFFECTIVE PROCEDURES",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 4: REASONABLE BUDGET",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 5: PROVISION OF MATERIALS AND OTHER RESOURCES",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 6: PARTICIPATION OF SIGNIFICANT NUMBER OF FACULTY/ STAFF/ STUDENTS / COMMUNITIES IN MAJOR PROJECTS/ ACTIVITIES",
      type: "pdf"
    },
    {
      title: "INSTRUCTION_SECTION 7: BONUS POINTS: AWARDS OF DISTINCTION AND ACHIEVEMENT AND GRANTS OF THE PROGRAM (BEST PRACTICES ADOPTED)",
      type: "pdf"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <ProgramHeader programName="BS in Computer Science" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            BS in Computer Science
          </h1>
          <p className="text-center text-gray-600 mb-4">Department of Computer Studies</p>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <ProgramTabs>
          <TabsContent value="instruction" className="mt-4 animate-fade-in">
            <DocumentTable 
              programCode="CS" 
              documents={documentSections} 
            />
          </TabsContent>
          
          <ExtensionTab programCode="CS" />
          <FacultyTab programCode="CS" />
          <LibraryTab programCode="CS" />
          <ComplianceReportTab />
          <WorkingChecklistTab programCode="CS" />
          <TechnicalReportTab programCode="CS" />
          <RequestedDocumentsTab programCode="CS" />
        </ProgramTabs>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComputerScience;

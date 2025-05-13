
import React from 'react';
import ProgramHeader from '../../components/ProgramHeader';
import ProgramTabs from '../../components/ProgramTabs';
import DocumentSection from '../../components/DocumentSection';
import EmptyTabContent from '../../components/EmptyTabContent';
import ComplianceReportTab from '../../components/ComplianceReportTab';
import { TabsContent } from "@/components/ui/tabs";

const SecondaryEducation = () => {
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
      <ProgramHeader programName="Bachelor in Secondary Education" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Bachelor in Secondary Education
          </h1>
          <p className="text-center text-gray-600 mb-4">Department of Teacher Education</p>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <ProgramTabs>
          <TabsContent value="instruction" className="mt-4 animate-fade-in">
            <DocumentSection 
              programCode="SEC" 
              documents={documentSections} 
            />
          </TabsContent>
          
          <EmptyTabContent value="extension" message="Extension program content and documents will appear here." />
          <EmptyTabContent value="faculty" message="Faculty development content and documents will appear here." />
          <EmptyTabContent value="library" message="Library resources content and documents will appear here." />
          <ComplianceReportTab />
          <EmptyTabContent value="working" message="Working checklist content and documents will appear here." />
          <EmptyTabContent value="technical" message="AACCUP technical report content and documents will appear here." />
          <EmptyTabContent value="documents" message="Requested documents will appear here." />
        </ProgramTabs>
      </div>

      {/* Footer */}
      <footer className="bg-blue-800 text-white mt-auto">
        <div className="container mx-auto py-6 px-4">
          <div className="text-center text-white/80 text-sm">
            © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SecondaryEducation;

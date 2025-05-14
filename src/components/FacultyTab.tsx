
import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import NarrativeVideoSection from './NarrativeVideoSection';
import DocumentList from './DocumentList';

interface FacultyTabProps {
  programCode: string;
}

const FacultyTab = ({ programCode }: FacultyTabProps) => {
  const facultyDocuments = [
    { name: "FACULTY-1.WELL-DEFINED OBJECTIVES IN FACULTY DEVELOPMENT.pdf" },
    { name: "FACULTY-2.ADEQUATE AND RELEVANT ACTIVITIES AND PROJECTS ANCHORED ON THE OBJECTIVES.pdf" },
    { name: "FACULTY-3.SYSTEMATIC AND EFFECTIVE PROCEDURES (E.G. TEACHING METHOD, CURRICULUM DEVELOPMENT, TESTING, ETC.).pdf" },
    { name: "FACULTY-4.REASONABLE BUDGET.pdf" },
    { name: "FACULTY-5.PROVISION OF MATERIALS AND OTHER RESOURCES.pdf" },
    { name: "FACULTY-6.PARTICIPATION OF SIGNIFICANT NUMBER OF FACULTY- STAFF- STUDENTS-COMMUNITY IN MAJOR PROJECTS-ACTIVITIES.pdf" },
    { name: "FACULTY-7. BONUS POINTS_AWARDS OF DISTINCTION AND ACHIEVEMENT AND GRANTS OF THIS PROGRAM BEST PRACTICES-ADOPTED.pdf" }
  ];

  return (
    <TabsContent value="faculty" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <NarrativeVideoSection programCode={programCode} area="faculty" />
        <DocumentList title="Faculty Development Documents" documents={facultyDocuments} />
      </div>
    </TabsContent>
  );
};

export default FacultyTab;

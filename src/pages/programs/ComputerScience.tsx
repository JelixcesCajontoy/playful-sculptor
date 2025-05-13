
import React from 'react';
import ProgramHeader from '../../components/ProgramHeader';
import ProgramTabs from '../../components/ProgramTabs';
import DocumentSection from '../../components/DocumentSection';
import EmptyTabContent from '../../components/EmptyTabContent';
import ComplianceReportTab from '../../components/ComplianceReportTab';
import { TabsContent } from "@/components/ui/tabs";
import Footer from '../../components/Footer';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { FileText } from 'lucide-react';

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader className="bg-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> Narrative Report
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-800">AACCUP-CS-LevelII-Ph2-NARRATIVE-INSTRUCTION.pdf</p>
                </CardContent>
                <CardFooter className="bg-gray-50 text-sm text-gray-600 rounded-b-lg">
                  Last updated: May 10, 2025
                </CardFooter>
              </Card>

              <Card className="transition-all duration-300 hover:shadow-md">
                <CardHeader className="bg-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" /> Video Presentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-800">AACCUP-CS-LevelII-Ph2-VIDEO-INSTRUCTION.mp4</p>
                </CardContent>
                <CardFooter className="bg-gray-50 text-sm text-gray-600 rounded-b-lg">
                  Duration: 15 minutes
                </CardFooter>
              </Card>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {documentSections.map((doc, index) => (
                <Card 
                  key={index} 
                  className={`transition-all duration-300 hover:shadow-md hover:border-blue-200`}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center text-gray-800">
                      <FileText className="mr-2 h-5 w-5 text-blue-700" />
                      {doc.title}
                    </CardTitle>
                    <CardDescription>
                      Document type: {doc.type.toUpperCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-600">
                      This document contains essential information about the {doc.title.toLowerCase().split(':')[1]} for the Computer Science program.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
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
      <Footer />
    </div>
  );
};

export default ComputerScience;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, FileText, Video } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Psychology = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("instruction");
  
  const departments = [
    { 
      name: 'DAS', 
      label: 'Department of Arts and Sciences',
      programs: ['Bachelor of Science in Psychology', 'Bachelor of Arts in Communication']
    },
    { 
      name: 'DCS', 
      label: 'Department of Computer Studies',
      programs: ['BS in Computer Science', 'BS in Information Technology']
    },
    { 
      name: 'DTE', 
      label: 'Department of Teacher Education',
      programs: ['Bachelor in Elementary Education', 'Bachelor in Secondary Education']
    },
    { 
      name: 'DMS', 
      label: 'Department of Management Studies',
      programs: ['BS in Business Administration', 'BS in Hospitality Management']
    },
    { 
      name: 'DCrim', 
      label: 'Department of Criminology',
      programs: ['BS in Criminology']
    },
  ];

  const handleProgramClick = (program: string) => {
    const formatRoutePath = (name: string) => {
      return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    };
    
    const routePath = formatRoutePath(program);
    navigate(`/programs/${routePath}`);
  };

  const handleHomeClick = () => {
    navigate('/');
  };

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHomeClick}>
              <img src="/lovable-uploads/Cavite_State_University_(CvSU).png" alt="University Logo" className="h-12 w-12"/>
              <h1 className="text-white text-xl font-semibold">Cavite State University - Bacoor City Campus |</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {departments.map((dept) => (
                <DropdownMenu key={dept.name}>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-white hover:text-secondary transition-colors">
                    <span>{dept.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {dept.programs.map((program) => (
                      <DropdownMenuItem 
                        key={program}
                        onClick={() => handleProgramClick(program)}
                      >
                        {program}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white hover:text-secondary transition-colors">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 bg-slate-200 rounded-lg mt-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Bachelor of Science in Psychology
        </h1>
        
        <Tabs defaultValue="instruction" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full flex justify-start overflow-x-auto">
            <TabsTrigger 
              value="instruction" 
              className={`px-6 py-2 ${activeTab === "instruction" ? "bg-blue-700 text-white" : ""}`}
            >
              Instruction
            </TabsTrigger>
            <TabsTrigger 
              value="extension" 
              className={`px-6 py-2 ${activeTab === "extension" ? "bg-blue-700 text-white" : ""}`}
            >
              Extension
            </TabsTrigger>
            <TabsTrigger 
              value="faculty" 
              className={`px-6 py-2 ${activeTab === "faculty" ? "bg-blue-700 text-white" : ""}`}
            >
              Faculty Development
            </TabsTrigger>
            <TabsTrigger 
              value="library" 
              className={`px-6 py-2 ${activeTab === "library" ? "bg-blue-700 text-white" : ""}`}
            >
              Library
            </TabsTrigger>
            <TabsTrigger 
              value="compliance" 
              className={`px-6 py-2 ${activeTab === "compliance" ? "bg-blue-700 text-white" : ""}`}
            >
              Compliance Report
            </TabsTrigger>
            <TabsTrigger 
              value="working" 
              className={`px-6 py-2 ${activeTab === "working" ? "bg-blue-700 text-white" : ""}`}
            >
              Working Checklist
            </TabsTrigger>
            <TabsTrigger 
              value="technical" 
              className={`px-6 py-2 ${activeTab === "technical" ? "bg-blue-700 text-white" : ""}`}
            >
              AACCUP Technical Report
            </TabsTrigger>
            <TabsTrigger 
              value="documents" 
              className={`px-6 py-2 ${activeTab === "documents" ? "bg-blue-700 text-white" : ""}`}
            >
              Requested Documents
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="instruction" className="mt-4">
            <div className="bg-white rounded-md shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div className="bg-blue-700 text-white p-3 font-semibold">
                  <h3>Narrative Report</h3>
                </div>
                <div className="bg-blue-700 text-white p-3 font-semibold">
                  <h3>Video</h3>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2">
                <div className="p-2 bg-gray-100 flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  <span>AACCUP-Psychology-LevelII-Ph2-NARRATIVE-INSTRUCTION.pdf</span>
                </div>
                <div className="p-2 bg-gray-100 flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  <span>AACCUP-Psychology-LevelII-Ph2-NARRATIVE-INSTRUCTION.mp4</span>
                </div>
              </div>
              
              {documentSections.map((doc, index) => (
                <div 
                  key={index}
                  className={`p-2 flex items-center ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  <span>{doc.title}.pdf</span>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="extension">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Extension content will appear here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="faculty">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Faculty Development content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="library">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Library content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="compliance">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Compliance Report content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="working">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Working Checklist content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="technical">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">AACCUP Technical Report content will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px]">
              <p className="text-gray-500">Requested Documents content will appear here.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Footer - Simplified version */}
      <footer className="bg-primary text-white mt-auto">
        <div className="container mx-auto py-8 px-4">
          <div className="text-center text-white/80 text-sm">
            © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Psychology;


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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import ProgramHeader from '../../components/ProgramHeader';

const Criminology = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("instruction");
  const [selectedArea, setSelectedArea] = useState<string>("");
  
  const form = useForm({
    defaultValues: {
      area: "",
    },
  });

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
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

  const areasData = [
    { value: "area1", label: "AREA 1: Mission, Goals and Objectives" },
    { value: "area2", label: "AREA 2: Faculty" },
    { value: "area3", label: "AREA 3: Curriculum and Instruction" },
    { value: "area4", label: "AREA 4: Support to Students" },
    { value: "area5", label: "AREA 5: Research" },
    { value: "area6", label: "AREA 6: Extension and Community Involvement" },
    { value: "area7", label: "AREA 7: Library" },
    { value: "area8", label: "AREA 8: Physical Facilities" },
    { value: "area9", label: "AREA 9: Laboratories" },
    { value: "area10", label: "AREA 10: Administration" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <ProgramHeader programName="BS in Criminology" />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            BS in Criminology
          </h1>
          <p className="text-center text-gray-600 mb-4">Department of Criminology</p>
          <div className="w-24 h-1 bg-blue-700 mx-auto rounded-full"></div>
        </div>
        
        <Tabs defaultValue="instruction" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="w-full flex justify-start overflow-x-auto scrollbar-hide">
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
                  <span>AACCUP-Crim-LevelII-Ph2-NARRATIVE-INSTRUCTION.pdf</span>
                </div>
                <div className="p-2 bg-gray-100 flex items-center">
                  <Video className="mr-2 h-5 w-5" />
                  <span>AACCUP-Crim-LevelII-Ph2-NARRATIVE-INSTRUCTION.mp4</span>
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
              <div className="max-w-md mx-auto">
                <h2 className="text-xl font-semibold mb-4">Compliance Report</h2>
                <Form {...form}>
                  <form className="space-y-4">
                    <FormField
                      control={form.control}
                      name="area"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-medium">Select Area:</FormLabel>
                          <Select 
                            onValueChange={(value) => {
                              field.onChange(value);
                              handleAreaChange(value);
                            }}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select an area" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-white">
                              <SelectGroup>
                                {areasData.map((area) => (
                                  <SelectItem key={area.value} value={area.value}>
                                    {area.label}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
                
                {selectedArea && (
                  <div className="mt-6 p-4 bg-blue-50 rounded-md">
                    <h3 className="font-medium text-blue-800">
                      {areasData.find(area => area.value === selectedArea)?.label}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      Files and documents related to {areasData.find(area => area.value === selectedArea)?.label} will appear here.
                    </p>
                  </div>
                )}
              </div>
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

      {/* Footer */}
      <footer className="bg-primary text-white mt-auto">
        <div className="container mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">About Us</h3>
              <p className="text-white/80 text-sm">
                Cavite State University - Bacoor City Campus is committed to excellence in education, research, and community service.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Departments</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><span className="hover:text-white transition-colors">Department of Arts and Sciences</span></li>
                <li><span className="hover:text-white transition-colors">Department of Computer Studies</span></li>
                <li><span className="hover:text-white transition-colors">Department of Teacher Education</span></li>
                <li><span className="hover:text-white transition-colors">Department of Management Studies</span></li>
                <li><span className="hover:text-white transition-colors">Department of Criminology</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Courses Offered</h3>
              <ul className="space-y-2 text-white/80 text-sm">
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Psychology</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Computer Science</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Information Technology</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor in Secondary Education - Math</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Business Administration</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Hospitality Management</span></li>
                <li><span className="hover:text-white transition-colors">Bachelor of Science in Criminology</span></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <address className="text-white/80 text-sm not-italic space-y-2">
                <p>Soldiers Hills IV, Molino VI</p>
                <p>Bacoor City, Cavite</p>
                <p>Philippines</p>
                <a href="mailto:cvsubacoor@cvsu.edu.ph" className="hover:text-white transition-colors block">
                  cvsubacoor@cvsu.edu.ph
                </a>
              </address>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80 text-sm">
            © 2025 Cavite State University - Bacoor City Campus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Criminology;

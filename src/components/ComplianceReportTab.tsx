import React, { useState } from 'react';
import { TabsContent } from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { FileText, ChevronRight } from "lucide-react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

interface Area {
  value: string;
  label: string;
  description?: string;
}

interface AreaDocument {
  name: string;
  type: string;
  updatedAt: string;
}

const ComplianceReportTab = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  
  const form = useForm({
    defaultValues: {
      area: "",
    },
  });
  
  const areasData: Area[] = [
    { value: "area1", label: "AREA 1: Mission, Goals and Objectives", description: "Documents related to the program's mission statement, educational goals and specific objectives." },
    { value: "area2", label: "AREA 2: Faculty", description: "Faculty profiles, qualifications, teaching loads, research, and professional development." },
    { value: "area3", label: "AREA 3: Curriculum and Instruction", description: "Course offerings, syllabi, teaching methods, and instructional materials." },
    { value: "area4", label: "AREA 4: Support to Students", description: "Student services, counseling, scholarships, and other support mechanisms." },
    { value: "area5", label: "AREA 5: Research", description: "Research projects, publications, and other scholarly activities." },
    { value: "area6", label: "AREA 6: Extension and Community Involvement", description: "Outreach programs, community service, and civic engagement activities." },
    { value: "area7", label: "AREA 7: Library", description: "Library resources, services, and facilities supporting the program." },
    { value: "area8", label: "AREA 8: Physical Facilities", description: "Classrooms, laboratories, offices, and other physical resources." },
    { value: "area9", label: "AREA 9: Laboratories", description: "Specialized laboratories, equipment, and materials for teaching and research." },
    { value: "area10", label: "AREA 10: Administration", description: "Leadership, organizational structure, policies, and procedures." },
  ];

  // Simulated area documents - in a real app this would come from an API
  const areaDocuments: Record<string, AreaDocument[]> = {
    area1: [
      { name: "Mission_Statement.pdf", type: "PDF", updatedAt: "2025-03-15" },
      { name: "Program_Objectives.docx", type: "DOCX", updatedAt: "2025-02-22" },
      { name: "Strategic_Plan_2023-2026.pdf", type: "PDF", updatedAt: "2025-01-10" }
    ],
    area2: [
      { name: "Faculty_Profiles.xlsx", type: "XLSX", updatedAt: "2025-04-05" },
      { name: "Faculty_Development_Plan.pdf", type: "PDF", updatedAt: "2025-03-20" }
    ],
    area3: [
      { name: "Curriculum_Map.pdf", type: "PDF", updatedAt: "2025-03-28" },
      { name: "Course_Syllabi.zip", type: "ZIP", updatedAt: "2025-04-10" }
    ],
    // Other areas would have their documents here
  };

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
  };

  return (
    <TabsContent value="compliance" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100 min-h-[400px]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6 pb-2 border-b border-gray-200">
            <div className="bg-blue-700 h-8 w-1 mr-3 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Compliance Report</h2>
          </div>
          
          <div className="bg-blue-50/50 p-5 rounded-lg border border-blue-100 mb-6">
            <p className="text-gray-700">
              Select an area to view the compliance documents and reports related to that specific section of the AACCUP accreditation requirements.
            </p>
          </div>
          
          <Form {...form}>
            <form className="space-y-4 mb-8">
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700 text-base">Select Area for Compliance Documents:</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleAreaChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm h-12">
                          <SelectValue placeholder="Select an area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg max-h-80">
                        <SelectGroup>
                          {areasData.map((area) => (
                            <SelectItem 
                              key={area.value} 
                              value={area.value} 
                              className="cursor-pointer hover:bg-blue-50 py-3"
                            >
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
            <div className="mt-8 animate-fade-in-up">
              <div className="bg-white rounded-md border border-blue-200 overflow-hidden">
                <div className="bg-blue-700 text-white p-4 flex items-center justify-between">
                  <h3 className="font-medium text-lg">
                    {areasData.find(area => area.value === selectedArea)?.label}
                  </h3>
                </div>
                
                <div className="p-4 bg-blue-50/30 border-b border-blue-100">
                  <p className="text-gray-700">
                    {areasData.find(area => area.value === selectedArea)?.description || 
                     `Documents related to ${areasData.find(area => area.value === selectedArea)?.label}`}
                  </p>
                </div>
                
                <div className="p-4">
                  {areaDocuments[selectedArea] && areaDocuments[selectedArea].length > 0 ? (
                    <div className="overflow-hidden rounded-md border border-gray-200">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50 hover:bg-gray-50">
                            <TableHead className="w-[50%]">Document Name</TableHead>
                            <TableHead className="w-[25%]">Type</TableHead>
                            <TableHead className="w-[25%]">Last Updated</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {areaDocuments[selectedArea].map((doc, i) => (
                            <TableRow key={i} className="hover:bg-blue-50/50 cursor-pointer">
                              <TableCell className="font-medium flex items-center">
                                <FileText className="h-4 w-4 mr-2 text-blue-700" />
                                {doc.name}
                              </TableCell>
                              <TableCell>{doc.type}</TableCell>
                              <TableCell>{doc.updatedAt}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="mt-4 bg-white p-5 rounded-md text-center border border-dashed border-gray-300">
                      <div className="w-full p-4">
                        <AspectRatio ratio={16/9} className="bg-gray-100 rounded-md flex items-center justify-center">
                          <p className="text-sm text-gray-500 italic">No documents found for this area</p>
                        </AspectRatio>
                      </div>
                      <p className="text-sm text-gray-500 mt-4">Contact the program administrator to upload compliance documents.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          
          {!selectedArea && (
            <div className={cn(
              "mt-6 p-8 bg-gray-50 rounded-md border border-dashed border-gray-300",
              "flex flex-col items-center justify-center text-center"
            )}>
              <div className="bg-blue-100 p-3 rounded-full mb-4">
                <ChevronRight className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">Select an Area</h3>
              <p className="text-gray-500 max-w-md">
                Choose an area from the dropdown above to view the corresponding compliance documents and reports.
              </p>
            </div>
          )}
        </div>
      </div>
    </TabsContent>
  );
};

export default ComplianceReportTab;

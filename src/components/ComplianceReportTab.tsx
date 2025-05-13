
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

interface Area {
  value: string;
  label: string;
}

const ComplianceReportTab = () => {
  const [selectedArea, setSelectedArea] = useState<string>("");
  
  const form = useForm({
    defaultValues: {
      area: "",
    },
  });
  
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

  const handleAreaChange = (value: string) => {
    setSelectedArea(value);
  };

  return (
    <TabsContent value="compliance">
      <div className="bg-white p-6 rounded-md shadow-sm min-h-[200px] border border-gray-100">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-gray-800 border-b pb-2">Compliance Report</h2>
          <Form {...form}>
            <form className="space-y-4">
              <FormField
                control={form.control}
                name="area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-medium text-gray-700">Select Area:</FormLabel>
                    <Select 
                      onValueChange={(value) => {
                        field.onChange(value);
                        handleAreaChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 rounded-md shadow-sm">
                          <SelectValue placeholder="Select an area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-white border border-gray-200 shadow-lg">
                        <SelectGroup>
                          {areasData.map((area) => (
                            <SelectItem key={area.value} value={area.value} className="cursor-pointer hover:bg-blue-50">
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
            <div className="mt-8 p-5 bg-blue-50 rounded-md border border-blue-100">
              <h3 className="font-medium text-blue-800 text-lg mb-2">
                {areasData.find(area => area.value === selectedArea)?.label}
              </h3>
              <p className="text-gray-700">
                Files and documents related to {areasData.find(area => area.value === selectedArea)?.label.toLowerCase()} will appear here.
              </p>
              <div className="mt-4 bg-white p-3 rounded-md shadow-sm border border-gray-100">
                <p className="text-sm text-gray-500 italic">No documents found. Contact administrator to upload files.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </TabsContent>
  );
};

export default ComplianceReportTab;


import React from 'react';
import { TabsContent } from "@/components/ui/tabs";
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { FileText } from 'lucide-react';

interface RequestedDocumentsTabProps {
  programCode: string;
}

const RequestedDocumentsTab = ({ programCode }: RequestedDocumentsTabProps) => {
  const requestedDocuments = [
    { category: "Instruction", document: "Instruction: Additional Documents.pdf" },
    { category: "Faculty Development", document: "Faculty Additional Documents.pdf" },
    { category: "Extension", document: "2019-2024 SUMMARY MATRIX...pdf" }
  ];

  return (
    <TabsContent value="documents" className="animate-fade-in">
      <div className="bg-white p-6 rounded-md shadow-sm border border-gray-100">
        <div className="mb-4">
          <div className="bg-blue-700 text-white p-4 font-semibold">
            <h3>Requested Documents</h3>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-50 hover:bg-blue-50">
                <TableHead className="w-[40%]">Category</TableHead>
                <TableHead>Requested Documents</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requestedDocuments.map((item, i) => (
                <TableRow key={i} className={`${i % 2 === 0 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-200 cursor-pointer`}>
                  <TableCell>{item.category}</TableCell>
                  <TableCell className="flex items-center">
                    <FileText className="mr-2 h-4 w-4 text-blue-700" />
                    {item.document}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TabsContent>
  );
};

export default RequestedDocumentsTab;

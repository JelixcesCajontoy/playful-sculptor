
import React from 'react';
import { FileText, Video } from 'lucide-react';
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableHead, 
  TableRow, 
  TableCell 
} from "@/components/ui/table";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Document {
  title: string;
  type: string;
}

interface DocumentTableProps {
  programCode: string;
  documents: Document[];
}

const DocumentTable = ({ programCode, documents }: DocumentTableProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mb-4">
        <div className="bg-blue-700 text-white p-4 font-semibold rounded-md shadow-sm">
          <h3 className="flex items-center">
            <FileText className="mr-2 h-5 w-5" /> Narrative Report
          </h3>
        </div>
        <div className="bg-blue-700 text-white p-4 font-semibold rounded-md shadow-sm">
          <h3 className="flex items-center">
            <Video className="mr-2 h-5 w-5" /> Video Presentation
          </h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-b border-gray-200 mb-4">
        <div className="p-3 bg-gray-100 flex items-center rounded-md hover:bg-gray-200 transition-colors">
          <FileText className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">AACCUP-{programCode}-LevelII-Ph2-NARRATIVE-INSTRUCTION.pdf</span>
        </div>
        <div className="p-3 bg-gray-100 flex items-center rounded-md hover:bg-gray-200 transition-colors">
          <Video className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">AACCUP-{programCode}-LevelII-Ph2-VIDEO-INSTRUCTION.mp4</span>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>Document Title</TableHead>
              <TableHead className="w-[120px]">Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc, index) => (
              <TableRow key={index} className="hover:bg-gray-50 cursor-pointer">
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-blue-700" />
                  {doc.title}
                </TableCell>
                <TableCell>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs uppercase font-medium">
                    {doc.type}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DocumentTable;

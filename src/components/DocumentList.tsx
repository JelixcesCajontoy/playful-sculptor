
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

interface Document {
  name: string;
  type?: string;
}

interface DocumentListProps {
  title: string;
  documents: Document[];
  headingBgColor?: string;
  headingTextColor?: string;
  alternateRows?: boolean;
  showType?: boolean;
}

const DocumentList = ({ 
  title, 
  documents, 
  headingBgColor = "bg-blue-700", 
  headingTextColor = "text-white",
  alternateRows = true,
  showType = false
}: DocumentListProps) => {
  return (
    <div className="mb-4 overflow-hidden">
      <div className={`${headingBgColor} ${headingTextColor} p-4 font-semibold`}>
        <h3>{title}</h3>
      </div>
      
      <div className="overflow-hidden">
        {documents.map((doc, index) => (
          <div 
            key={index}
            className={`p-3 flex items-center hover:bg-gray-200 transition-colors cursor-pointer ${
              alternateRows && index % 2 === 0 ? 'bg-white' : 'bg-gray-100'
            }`}
          >
            <FileText className="mr-2 h-5 w-5 text-blue-700 flex-shrink-0" />
            <span className="text-gray-800">{doc.name}</span>
            {showType && doc.type && (
              <span className="ml-auto bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs uppercase font-medium">
                {doc.type}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentList;

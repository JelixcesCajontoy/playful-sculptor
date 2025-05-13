
import React from 'react';
import { FileText, Video } from 'lucide-react';

interface Document {
  title: string;
  type: string;
}

interface DocumentSectionProps {
  programCode: string;
  documents: Document[];
}

const DocumentSection = ({ programCode, documents }: DocumentSectionProps) => {
  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="bg-blue-700 text-white p-4 font-semibold rounded-md shadow-sm">
          <h3 className="flex items-center">
            <FileText className="mr-2 h-5 w-5" /> Narrative Report
          </h3>
        </div>
        <div className="bg-blue-700 text-white p-4 font-semibold rounded-md shadow-sm">
          <h3 className="flex items-center">
            <Video className="mr-2 h-5 w-5" /> Video
          </h3>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border-b border-gray-200">
        <div className="p-3 bg-gray-100 flex items-center rounded-md hover:bg-gray-200 transition-colors">
          <FileText className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">AACCUP-{programCode}-LevelII-Ph2-NARRATIVE-INSTRUCTION.pdf</span>
        </div>
        <div className="p-3 bg-gray-100 flex items-center rounded-md hover:bg-gray-200 transition-colors">
          <Video className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">AACCUP-{programCode}-LevelII-Ph2-NARRATIVE-INSTRUCTION.mp4</span>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {documents.map((doc, index) => (
          <div 
            key={index}
            className={`p-3 flex items-center ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
          >
            <FileText className="mr-3 h-5 w-5 text-blue-700" />
            <span className="text-gray-800">{doc.title}.pdf</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentSection;

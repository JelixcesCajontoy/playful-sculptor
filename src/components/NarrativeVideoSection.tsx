
import React from 'react';
import { FileText, Video } from 'lucide-react';

interface NarrativeVideoSectionProps {
  programCode: string;
  area: string;
}

const NarrativeVideoSection = ({ programCode, area }: NarrativeVideoSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <div className="bg-blue-700 text-white p-4 font-semibold">
          <h3 className="flex items-center">
            <FileText className="mr-2 h-5 w-5" /> Narrative Report
          </h3>
        </div>
        <div className="p-3 bg-gray-100 flex items-center hover:bg-gray-200 transition-colors cursor-pointer">
          <FileText className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">
            {area === "library" && `AACCUP-BM-LevelIII-Ph2-Narrative-Library.pdf`}
            {area === "extension" && `LevelIII-BM-NARRATIVE-EXTENSION.pdf`}
            {area === "faculty" && `AACCUP-BM-LevelIII-Ph2-Narrative-Faculty.pdf`}
            {!["library", "extension", "faculty"].includes(area) && 
              `AACCUP-${programCode}-LevelII-Ph2-NARRATIVE-${area.toUpperCase()}.pdf`}
          </span>
        </div>
      </div>
      <div>
        <div className="bg-blue-700 text-white p-4 font-semibold">
          <h3 className="flex items-center">
            <Video className="mr-2 h-5 w-5" /> Video
          </h3>
        </div>
        <div className="p-3 bg-gray-100 flex items-center hover:bg-gray-200 transition-colors cursor-pointer">
          <Video className="mr-2 h-5 w-5 text-blue-700" />
          <span className="text-gray-800">
            {area === "library" && `AACCUP-BM-LevelIII-Ph2-Narrative-Library.mp4`}
            {area === "extension" && `LevelIII-BM-NARRATIVE-EXTENSION.mp4`}
            {area === "faculty" && `AACCUP-BM-LevelIII-Ph2-Narrative-Faculty.mp4`}
            {!["library", "extension", "faculty"].includes(area) && 
              `AACCUP-${programCode}-LevelII-Ph2-VIDEO-${area.toUpperCase()}.mp4`}
          </span>
        </div>
      </div>
    </div>
  );
};

export default NarrativeVideoSection;

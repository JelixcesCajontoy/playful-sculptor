
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const BusinessAdministration = () => {
  const navigate = useNavigate();
  
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

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-primary text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={handleHomeClick}>
              <img src="/lovable-uploads/Cavite_State_University_(CvSU).png" alt="University Logo" className="h-12 w-12"/>
              <h1 className="text-white text-xl font-semibold">Cavite State University - Bacoor City Campus</h1>
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">
          BS in Business Administration
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            The BS in Business Administration program at Cavite State University - Bacoor City Campus 
            prepares students for careers in business management, entrepreneurship, and corporate leadership.
          </p>
          <p className="text-lg mb-6">
            Our program provides a comprehensive foundation in business principles including management, 
            marketing, finance, accounting, economics, and business ethics.
          </p>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Program Outcomes</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Develop business management and leadership skills</li>
            <li className="mb-2">Understand financial and accounting principles</li>
            <li className="mb-2">Apply marketing strategies and consumer behavior concepts</li>
            <li className="mb-2">Analyze business problems and develop strategic solutions</li>
            <li className="mb-2">Prepare for careers in business management, entrepreneurship, and corporate settings</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
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

export default BusinessAdministration;

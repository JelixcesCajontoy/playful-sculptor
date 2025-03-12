import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ComputerScience = () => {
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
          BS in Computer Science
        </h1>
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            The BS in Computer Science program at Cavite State University - Bacoor City Campus 
            prepares students for careers in software development, systems analysis, and other computing fields.
          </p>
          <p className="text-lg mb-6">
            Our program provides a strong foundation in computer science theory, algorithms, programming languages, 
            software engineering, and database systems.
          </p>
          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">Program Outcomes</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Develop proficiency in programming languages and software development</li>
            <li className="mb-2">Understand computer science theory and algorithms</li>
            <li className="mb-2">Apply problem-solving skills to complex computing challenges</li>
            <li className="mb-2">Design and implement database systems and applications</li>
            <li className="mb-2">Prepare for careers in software engineering, systems analysis, and related fields</li>
          </ul>
        </div>
      </div>

      {/* Footer - already simplified */}
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

export default ComputerScience;
